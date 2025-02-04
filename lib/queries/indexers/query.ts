import { GraphQLClient } from 'graphql-request'

import { graphql } from '@/generated/gql'
import type { IndexersDataQueryVariables } from '@/generated/graphql'

export const INDEXERS_PER_PAGE = 10

const IndexersQuery = graphql(`
  query IndexersData($first: Int, $skip: Int) {
    indexers(first: $first, skip: $skip, orderBy: delegatedTokens, orderDirection: desc) {
      id
      delegatedTokens
      delegatedStakeRatio
      delegatorIndexingRewards
      delegators(first: 1, orderBy: lastDelegatedAt, orderDirection: desc) {
        id
        delegator {
          id
        }
        stakedTokens
        lastDelegatedAt
      }
    }
  }
`)

type QueryIndexersArgs = {
  client: GraphQLClient
  vars?: IndexersDataQueryVariables
}
export async function queryIndexers({
  client,
  vars = {
    first: INDEXERS_PER_PAGE,
    skip: 0,
  },
}: QueryIndexersArgs) {
  return await client.request(IndexersQuery, vars)
}

export const indexersRootQueryKey = ['indexers'] as const
export const getIndexersQueryKey = (page: number) => [...indexersRootQueryKey, page]
export const getIndexersQueryVariables = (page: number): IndexersDataQueryVariables => ({
  first: INDEXERS_PER_PAGE,
  skip: (page - 1) * INDEXERS_PER_PAGE,
})
