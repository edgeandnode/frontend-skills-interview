'use client'

import { DataGroup } from '@/app/indexers/[id]/_IndexerMetrics/DataGroup'
import { useIdParam } from '@/app/indexers/[id]/useIdParam'
import { calculateIndexerCapacity } from '@/lib/calculateIndexerCapacity'
import { formatGRTToNumber } from '@/lib/formatGRTToNumber'
import { decimalFormat } from '@/lib/formatters'
import { graphNetworkQueryOptionsClient } from '@/lib/queries/graphNetwork/client'
import { indexerDetailsQueryOptionsClient } from '@/lib/queries/indexerDetails/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'

export function IndexerMetrics() {
  const id = useIdParam()
  const {
    data: { indexer },
    isRefetching: isIndexerDetailsRefetching,
  } = useSuspenseQuery({ ...indexerDetailsQueryOptionsClient(id) })
  const {
    data: {
      graphNetwork: { delegationRatio },
    },
    isRefetching: isGraphNetworkRefetching,
  } = useSuspenseQuery({ ...graphNetworkQueryOptionsClient() })

  if (!indexer) return notFound()

  const { delegatedTokens, lockedTokens, stakedTokens } = indexer

  const { availableDelegationCapacity, maxCapacity } = calculateIndexerCapacity({
    delegatedTokens,
    delegationRatio,
    lockedTokens,
    stakedTokens,
  })

  return (
    <>
      <DataGroup
        label="Delegated Tokens"
        value={decimalFormat.format(formatGRTToNumber(delegatedTokens))}
        unit="GRT"
        isRefetching={isIndexerDetailsRefetching}
      />
      <DataGroup
        label="Available Capacity"
        value={decimalFormat.format(formatGRTToNumber(availableDelegationCapacity))}
        unit="GRT"
        isRefetching={isIndexerDetailsRefetching || isGraphNetworkRefetching}
      />
      <DataGroup
        label="Max Capacity"
        value={decimalFormat.format(formatGRTToNumber(maxCapacity))}
        unit="GRT"
        isRefetching={isIndexerDetailsRefetching || isGraphNetworkRefetching}
      />
    </>
  )
}
