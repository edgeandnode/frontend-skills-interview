import { GraphQLClient } from 'graphql-request'

import { graphql } from '@/generated/gql'
import { GraphNetworkDataQuery } from '@/generated/graphql'

const GraphNetworkQuery = graphql(`
  query GraphNetworkData {
    graphNetwork(id: "1") {
      id
      indexerCount
      delegationRatio
    }
  }
`)

type QueryGraphNetworkArgs = {
  client: GraphQLClient
}
export async function queryGraphNetwork({ client }: QueryGraphNetworkArgs) {
  const data = await client.request(GraphNetworkQuery)
  // This casting is fine because we know there's going to be a `graphNetwork` with `id: "1"`
  return { ...data, graphNetwork: data.graphNetwork as NonNullable<GraphNetworkDataQuery['graphNetwork']> }
}

export const graphNetworkQueryKey = ['graphNetwork']
