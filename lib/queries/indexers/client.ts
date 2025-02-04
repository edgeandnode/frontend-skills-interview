import { queryOptions } from '@tanstack/react-query'
import { client } from '@/lib/graphql/client'
import { queryIndexers, getIndexersQueryKey, getIndexersQueryVariables } from '@/lib/queries/indexers/query'

export function indexersQueryOptionsClient(page: number = 1) {
  return queryOptions({
    queryKey: getIndexersQueryKey(page),
    queryFn: () => {
      const vars = getIndexersQueryVariables(page)
      return queryIndexers({ client, vars })
    },
  })
}
