export function calculateIndexerCapacity({
  stakedTokens,
  lockedTokens,
  delegatedTokens,
  delegationRatio,
}: {
  stakedTokens: string
  lockedTokens: string
  delegatedTokens: string
  delegationRatio: number
}) {
  const ownedTokens = BigInt(stakedTokens) - BigInt(lockedTokens)
  const maxCapacity = ownedTokens * BigInt(delegationRatio)
  const availableDelegationCapacity = maxCapacity - BigInt(delegatedTokens)
  return {
    maxCapacity,
    availableDelegationCapacity,
  }
}
