'use client'

import { graphNetworkQueryOptionsClient } from '@/lib/queries/graphNetwork/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { PageNumbers } from '@/components/PageNumbers'
import { INDEXERS_PER_PAGE } from '@/lib/queries/indexers/query'

export default function IndexersListPagination() {
  const { data } = useSuspenseQuery({ ...graphNetworkQueryOptionsClient() })
  return <PageNumbers total={Math.ceil(data.graphNetwork.indexerCount / INDEXERS_PER_PAGE)} />
}
