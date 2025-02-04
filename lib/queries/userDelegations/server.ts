import 'server-only'

import { ssrClient } from '@/lib/graphql/ssr.client'
import { queryOptions } from '@tanstack/react-query'
import { getUserDelegationsQueryKey, queryUserDelegations } from '@/lib/queries/userDelegations/query'

export function userDelegationsQueryOptionsSSR(userId: string) {
  return queryOptions({
    queryKey: getUserDelegationsQueryKey(userId),
    queryFn: () => queryUserDelegations({ client: ssrClient, vars: { userId } }),
  })
}
