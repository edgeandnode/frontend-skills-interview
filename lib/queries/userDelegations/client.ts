import { queryOptions } from '@tanstack/react-query'
import { client } from '@/lib/graphql/client'
import { getUserDelegationsQueryKey, queryUserDelegations } from '@/lib/queries/userDelegations/query'

export function userDelegationsQueryOptionsClient(userId: string) {
  return queryOptions({
    queryKey: getUserDelegationsQueryKey(userId),
    queryFn: () => queryUserDelegations({ client, vars: { userId } }),
  })
}
