'use client'

import { IndexersTableUI } from '@/app/indexers/_IndexersTable/IndexersTableUI'
import { compactGRTFormat, dateFormat, percentageFormat } from '@/lib/formatters'
import { formatGRTToNumber } from '@/lib/formatGRTToNumber'
import { indexersQueryOptionsClient } from '@/lib/queries/indexers/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function IndexersList() {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') ?? '1') ?? 1
  const { data } = useSuspenseQuery({ ...indexersQueryOptionsClient(currentPage) })

  return (
    <IndexersTableUI
      rows={data.indexers.map(({ id, delegatedStakeRatio, delegatedTokens, delegatorIndexingRewards, delegators }) => ({
        id,
        delegatedStakeRatio: percentageFormat.format(parseFloat(delegatedStakeRatio)),
        delegatedTokens: compactGRTFormat.format(formatGRTToNumber(delegatedTokens)),
        delegatorIndexingRewards: compactGRTFormat.format(formatGRTToNumber(delegatorIndexingRewards)),
        lastDelegator:
          delegators.length > 0
            ? {
                id: delegators[0].delegator.id,
                delegatedTokens: compactGRTFormat.format(formatGRTToNumber(delegators[0].stakedTokens)),
                lastDelegatedAt: delegators[0].lastDelegatedAt
                  ? dateFormat.format(new Date(delegators[0].lastDelegatedAt * 1000))
                  : 'Never',
              }
            : undefined,
      }))}
    />
  )
}
