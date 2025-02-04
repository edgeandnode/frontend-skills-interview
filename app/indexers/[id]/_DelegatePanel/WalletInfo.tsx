import { AddressPill } from '@/components/AddressPill'
import { RefetchingIndicator } from '@/components/RefetchingIndicator'
import { Skeleton } from '@/components/ui/skeleton'
import { grtFormat } from '@/lib/formatters'
import { formatGRTToNumber } from '@/lib/formatGRTToNumber'
import { useReadGraphToken } from '@/lib/hooks/useReadGraphToken'
import { cn } from '@/lib/utils'
import { useAccount } from 'wagmi'

export function WalletInfo() {
  const { address } = useAccount()
  const { data, isRefetching } = useReadGraphToken({
    functionName: 'balanceOf',
    args: [address!],
    query: { enabled: address != null },
  })

  if (!address) return null

  return (
    <div className="flex w-80 flex-col gap-4 rounded-3xl bg-slate-100 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold leading-none">Account:</p>
        <AddressPill address={address} />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold leading-none">GRT Balance:</p>
        {data ? (
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{grtFormat.format(formatGRTToNumber(data))}</p>
            <RefetchingIndicator className={cn(!isRefetching && 'opacity-0')} />
          </div>
        ) : (
          <Skeleton className="h-4 w-20" />
        )}
      </div>
    </div>
  )
}
