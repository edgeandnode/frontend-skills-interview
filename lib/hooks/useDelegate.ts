'use client'

import { l2StakingExtensionAbi, l2StakingProxyAddress } from '@/generated/wagmi'
import { createUseSimulateContract, createUseWriteContract } from 'wagmi/codegen'

export const useDelegate = createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingProxyAddress,
  functionName: 'delegate',
})

export const useSimulateDelegate = createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingProxyAddress,
  functionName: 'delegate',
})

export const stakingContractAddress = l2StakingProxyAddress['421614']
