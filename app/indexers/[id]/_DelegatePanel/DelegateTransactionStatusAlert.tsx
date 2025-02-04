'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { SendHorizontal, CircleCheck, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useAccount } from 'wagmi'

export function DelegateTransactionStatusAlert({ hash, isConfirmed }: { hash: string; isConfirmed: boolean }) {
  const { chain } = useAccount()

  return (
    <Alert variant={isConfirmed ? 'success' : 'default'} className="max-w-96">
      {isConfirmed ? <CircleCheck className="h-4 w-4" /> : <SendHorizontal className="h-4 w-4" />}
      <AlertTitle className="font-semibold">{isConfirmed ? 'Transaction confirmed!' : 'Transaction sent!'}</AlertTitle>
      <AlertDescription>
        <p className="flex items-center gap-2">
          See the transaction on:{' '}
          <span className="flex gap-[2px]">
            <Link
              className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
              target="_blank"
              href={`${chain?.blockExplorers.default.url}/tx/${hash}`}
            >
              {chain?.blockExplorers.default.name}
            </Link>
            <ExternalLink className="h-3 w-3" />
          </span>
        </p>
      </AlertDescription>
    </Alert>
  )
}
