'use client'

import { NotConnectedAlert } from '@/components/NotConnectedAlert'
import { useAccount } from 'wagmi'

export function Connected({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount()

  if (!isConnected)
    return (
      <div className="flex items-center justify-center py-10">
        <NotConnectedAlert />
      </div>
    )

  return children
}
