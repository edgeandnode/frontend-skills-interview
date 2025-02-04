import 'server-only'

import { env } from '@/lib/env/server'
import { GraphQLClient } from 'graphql-request'

// on the server connect directly to the subgraph API
const subgraphQueryUrl = 'https://gateway.thegraph.com/api/subgraphs/id/3xQHhMudr1oh69ut36G2mbzpYmYxwqCeU6wwqyCDCnqV'
export const ssrClient = new GraphQLClient(subgraphQueryUrl, {
  headers: {
    Authorization: `Bearer ${env.API_KEY}`,
  },
})
