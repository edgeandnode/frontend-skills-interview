import 'server-only'

import { ssrClient } from '@/lib/graphql/ssr.client'
import { queryOptions } from '@tanstack/react-query'
import { graphNetworkQueryKey, queryGraphNetwork } from '@/lib/queries/graphNetwork/query'

export function graphNetworkQueryOptionsSSR() {
  return queryOptions({
    queryKey: graphNetworkQueryKey,
    queryFn: () => queryGraphNetwork({ client: ssrClient }),
  })
}
