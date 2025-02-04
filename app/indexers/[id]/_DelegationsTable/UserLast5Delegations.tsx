'use client'

import { userDelegationsQueryOptionsClient } from '@/lib/queries/userDelegations/client'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { formatGRTToNumber } from '@/lib/formatGRTToNumber'
import { DelegationsTable } from '@/app/indexers/[id]/_DelegationsTable/DelegationsTable'
import { DelegationsTableSkeleton } from '@/app/indexers/[id]/_DelegationsTable/DelegationsTableSkeleton'

export function UserLast5Delegations() {
  const { address } = useAccount()

  const { data, isRefetching } = useQuery({
    ...userDelegationsQueryOptionsClient(address as string),
    enabled: address != null,
  })

  if (!data) {
    return <DelegationsTableSkeleton />
  }

  return (
    <DelegationsTable
      title="Your most recent delegations"
      entity="Indexer"
      rows={data.mostRecentUserDelegations.map(({ stakedTokens, indexer: { id: indexerId }, id, lastDelegatedAt }) => ({
        address: indexerId,
        id,
        amount: formatGRTToNumber(stakedTokens),
        date: new Date(lastDelegatedAt! * 1000),
      }))}
      isRefetching={isRefetching}
    />
  )
}
