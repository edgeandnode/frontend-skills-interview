import 'server-only'

import { ssrClient } from '@/lib/graphql/ssr.client'
import { queryOptions } from '@tanstack/react-query'
import { getIndexerDetailsQueryKey, queryIndexerDetails } from '@/lib/queries/indexerDetails/query'

export function indexerDetailsQueryOptionsSSR(indexerId: string) {
  return queryOptions({
    queryKey: getIndexerDetailsQueryKey(indexerId),
    queryFn: () => queryIndexerDetails({ client: ssrClient, vars: { indexerId } }),
  })
}
