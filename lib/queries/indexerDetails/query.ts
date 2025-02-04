import { GraphQLClient } from 'graphql-request'

import { graphql } from '@/generated/gql'
import { IndexerDetailsDataQueryVariables } from '@/generated/graphql'

const IndexerDetailsQuery = graphql(`
  query IndexerDetailsData($indexerId: ID!) {
    indexer(id: $indexerId) {
      id
      stakedTokens
      lockedTokens
      delegatedTokens
    }
    mostRecentIndexerDelegations: delegatedStakes(
      first: 5
      orderBy: lastDelegatedAt
      orderDirection: desc
      where: { indexer_: { id: $indexerId } }
    ) {
      id
      delegator {
        id
      }
      indexer {
        id
      }
      stakedTokens
      lastDelegatedAt
    }
  }
`)

type QueryIndexerDetailsArgs = {
  client: GraphQLClient
  vars: IndexerDetailsDataQueryVariables
}
export async function queryIndexerDetails({ client, vars }: QueryIndexerDetailsArgs) {
  return await client.request(IndexerDetailsQuery, { indexerId: vars.indexerId.toLowerCase() })
}

export const getIndexerDetailsQueryKey = (id: string) => ['indexerDetails', id.toLowerCase()] as const
