import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [arbitrumSepolia],
  connectors: [injected()],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [arbitrumSepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
