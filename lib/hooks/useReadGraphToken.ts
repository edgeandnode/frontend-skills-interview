'use client'

import { l2GraphTokenImplementationAbi, l2GraphTokenProxyAddress } from '@/generated/wagmi'
import { createUseReadContract } from 'wagmi/codegen'

export const useReadGraphToken = createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenProxyAddress,
})
