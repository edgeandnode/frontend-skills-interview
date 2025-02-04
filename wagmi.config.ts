import { defineConfig, loadEnv } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { getAddress } from 'viem'
import { arbitrum, arbitrumSepolia } from 'viem/chains'

/** @type {import('@wagmi/cli').Config} */
export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  })

  return {
    out: 'generated/wagmi.ts',
    contracts: [],
    plugins: [
      etherscan({
        apiKey: env.ARBISCAN_KEY || '',
        chainId: arbitrum.id,
        contracts: [
          {
            name: 'L2GraphTokenProxy',
            address: {
              [arbitrum.id]: getAddress('0x9623063377AD1B27544C965cCd7342f7EA7e88C7'),
              [arbitrumSepolia.id]: getAddress('0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04'),
            },
          },
          {
            name: 'L2GraphTokenImplementation',
            address: {
              [arbitrum.id]: getAddress('0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df'),
              [arbitrumSepolia.id]: getAddress('0x4cf968bA38b43dd10be114daa7959C1b369479e5'),
            },
          },
          {
            name: 'L2StakingProxy',
            address: {
              [arbitrum.id]: getAddress('0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03'),
              [arbitrumSepolia.id]: getAddress('0x865365C425f3A593Ffe698D9c4E6707D14d51e08'),
            },
          },
          {
            name: 'L2StakingExtension',
            address: {
              [arbitrum.id]: getAddress('0x3bE385576d7C282070Ad91BF94366de9f9ba3571'),
              [arbitrumSepolia.id]: getAddress('0x05709dd705A5674346B7206a2bC657C8bAb3301B'),
            },
          },
        ],
        tryFetchProxyImplementation: true,
      }),
      react(),
    ],
  }
})
