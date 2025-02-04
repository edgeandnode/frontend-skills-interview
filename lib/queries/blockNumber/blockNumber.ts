import { GraphQLClient } from 'graphql-request'

import { graphql } from '@/generated/gql'

const BlockNumberQuery = graphql(`
  query BlockNumberData($first: Int, $skip: Int) {
    _meta {
      block {
        number
      }
    }
  }
`)

type QueryIndexersArgs = {
  client: GraphQLClient
}
export async function queryBlockNumber({ client }: QueryIndexersArgs) {
  return await client.request(BlockNumberQuery, {})
}

export const blockNumberQueryKey = ['subgraph-block-number']
