'use client'

import { getQueryClient } from '@/lib/queries/getQueryClient'
import { config } from '@/lib/wagmi.config'
import { QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'

export function Providers(props: { children: ReactNode; initialState?: State }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient()

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </WagmiProvider>
  )
}
