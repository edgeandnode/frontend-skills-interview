import 'server-only'

import { ssrClient } from '@/lib/graphql/ssr.client'
import { getIndexersQueryKey, getIndexersQueryVariables, queryIndexers } from '@/lib/queries/indexers/query'
import { queryOptions } from '@tanstack/react-query'

export function indexersQueryOptionsSSR(page: number = 1) {
  return queryOptions({
    queryKey: getIndexersQueryKey(page),
    queryFn: () => {
      const vars = getIndexersQueryVariables(page)
      return queryIndexers({ client: ssrClient, vars })
    },
  })
}
