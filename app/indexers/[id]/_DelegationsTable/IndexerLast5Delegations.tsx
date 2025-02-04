'use client'

import { DelegationsTable } from '@/app/indexers/[id]/_DelegationsTable/DelegationsTable'
import { useIdParam } from '@/app/indexers/[id]/useIdParam'
import { formatGRTToNumber } from '@/lib/formatGRTToNumber'
import { indexerDetailsQueryOptionsClient } from '@/lib/queries/indexerDetails/client'
import { useSuspenseQuery } from '@tanstack/react-query'

export function IndexerLast5Delegations() {
  const id = useIdParam()
  const {
    data: { mostRecentIndexerDelegations },
    isRefetching,
  } = useSuspenseQuery({ ...indexerDetailsQueryOptionsClient(id) })

  return (
    <DelegationsTable
      title="Most recent delegations"
      entity="Delegator"
      rows={mostRecentIndexerDelegations.map(
        ({ delegator: { id: delegatorId }, lastDelegatedAt, id, stakedTokens }) => ({
          address: delegatorId,
          id,
          amount: formatGRTToNumber(stakedTokens),
          date: new Date(lastDelegatedAt! * 1000),
        }),
      )}
      isRefetching={isRefetching}
    />
  )
}
