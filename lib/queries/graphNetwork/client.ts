import { queryOptions } from '@tanstack/react-query'
import { client } from '@/lib/graphql/client'
import { graphNetworkQueryKey, queryGraphNetwork } from '@/lib/queries/graphNetwork/query'

export function graphNetworkQueryOptionsClient() {
  return queryOptions({
    queryKey: graphNetworkQueryKey,
    queryFn: () => queryGraphNetwork({ client }),
  })
}
