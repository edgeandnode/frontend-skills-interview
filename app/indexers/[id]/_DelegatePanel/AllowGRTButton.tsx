import { DelegateErrorAlert } from '@/app/indexers/[id]/_DelegatePanel/DelegateErrorAlert'
import { SubmitButton } from '@/app/indexers/[id]/_DelegatePanel/SubmitButton'
import { useReadGraphToken } from '@/lib/hooks/useReadGraphToken'
import { useSimulateWriteGraphToken, useWriteGraphToken } from '@/lib/hooks/useWriteGraphToken'
import { useEffect } from 'react'
import { maxUint256 } from 'viem'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'

export function AllowGRTButton({
  actionButton,
  spenderAddress,
  amount,
}: {
  actionButton: React.ReactNode
  spenderAddress: `0x${string}`
  amount: bigint
}) {
  const { address } = useAccount()
  const {
    data: allowance,
    isLoading: isAllowanceLoading,
    refetch: refetchAllowance,
  } = useReadGraphToken({
    functionName: 'allowance',
    args: [address || '0x', spenderAddress],
    query: {
      enabled: address != null,
    },
  })

  // Contract call
  const {
    data: simulateData,
    error: simulateError,
    isLoading: isSimulating,
  } = useSimulateWriteGraphToken({
    functionName: 'approve',
    args: [spenderAddress, maxUint256],
    query: {
      enabled: allowance != null && (allowance <= BigInt(0) || allowance < amount),
    },
  })

  const { data: hash, error: txError, writeContract, isPending } = useWriteGraphToken()

  const {
    data: receipt,
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    async function refetch() {
      if (!isConfirmed || !receipt) return

      void refetchAllowance()
    }
    void refetch()
  }, [isConfirmed, receipt, refetchAllowance])

  if (allowance === undefined || (allowance > BigInt(0) && allowance >= amount)) {
    return actionButton
  }

  const errorMsg = simulateError?.message || txError?.message

  return (
    <div className="flex h-full w-full flex-col items-center gap-4">
      <SubmitButton
        label={isPending ? 'Pending...' : isConfirming ? 'Confirming...' : 'Allow Unlimited GRT'}
        onClick={() => {
          if (!simulateData) return
          void writeContract(simulateData.request)
        }}
        disabled={!simulateData || isSimulating || isPending || isConfirming}
        loading={isAllowanceLoading || isSimulating || isPending || isConfirming}
      />
      {errorMsg ? <DelegateErrorAlert error={errorMsg} /> : null}
    </div>
  )
}
