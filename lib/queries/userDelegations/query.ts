import { GraphQLClient } from 'graphql-request'

import { graphql } from '@/generated/gql'
import { UserDelegationsDataQueryVariables } from '@/generated/graphql'

const UserDelegationsQuery = graphql(`
  query UserDelegationsData($userId: ID!) {
    mostRecentUserDelegations: delegatedStakes(
      first: 5
      orderBy: lastDelegatedAt
      orderDirection: desc
      where: { delegator_: { id: $userId } }
    ) {
      id
      delegator {
        id
        stakesCount
      }
      indexer {
        id
      }
      stakedTokens
      createdAt
      lastDelegatedAt
    }
  }
`)

type QueryUserDelegationsArgs = {
  client: GraphQLClient
  vars: UserDelegationsDataQueryVariables
}
export async function queryUserDelegations({ client, vars }: QueryUserDelegationsArgs) {
  return await client.request(UserDelegationsQuery, { userId: vars.userId.toLowerCase() })
}

export const getUserDelegationsQueryKey = (id: string) => ['userDelegations', id.toLowerCase()] as const
