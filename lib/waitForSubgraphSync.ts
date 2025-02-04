'use client'

import { graphql } from '@/generated/gql'
import { client } from '@/lib/graphql/client'

const BlockNumberQuery = graphql(`
  query BlockNumberData($first: Int, $skip: Int) {
    _meta {
      block {
        number
      }
    }
  }
`)

export async function queryBlockNumber() {
  return await client.request(BlockNumberQuery, {})
}

export async function waitForNetworkSubgraphSync(blockNumber: bigint) {
  return new Promise<bigint>((resolve) => {
    const poll = async () => {
      const { _meta } = await queryBlockNumber()

      const subgraphBlockNumber = _meta?.block.number
      if (subgraphBlockNumber !== undefined && BigInt(subgraphBlockNumber) >= blockNumber) resolve(blockNumber)
      else setTimeout(poll, 1000)
    }
    void poll()
  })
}
