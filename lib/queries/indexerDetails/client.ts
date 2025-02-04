import { queryOptions } from '@tanstack/react-query'
import { client } from '@/lib/graphql/client'
import { getIndexerDetailsQueryKey, queryIndexerDetails } from '@/lib/queries/indexerDetails/query'

export function indexerDetailsQueryOptionsClient(indexerId: string) {
  return queryOptions({
    queryKey: getIndexerDetailsQueryKey(indexerId),
    queryFn: () => queryIndexerDetails({ client, vars: { indexerId } }),
  })
}
