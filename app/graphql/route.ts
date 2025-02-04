/**
 * This api route exposes a graphql api that routes requests to the Graph Network Arbitrum Sepolia Subgraph on The Graph Network.
 *
 * This is exposed at `/graphql` route.
 */
import { ssrClient } from '@/lib/graphql/ssr.client'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const GraphqlReqSchema = z.object({
  query: z.string().min(1),
  operationName: z.string().optional().nullable(),
  variables: z.record(z.unknown()).optional().nullable(),
})

async function process(request: Request) {
  const body = await request.json()
  const parsedGqlRequest = GraphqlReqSchema.safeParse(body)
  if (!parsedGqlRequest.success) {
    return NextResponse.json({ error: parsedGqlRequest.error }, { status: 400 })
  }
  const gqlRequest = parsedGqlRequest.data

  const gqlResponse = await ssrClient.request(gqlRequest.query, gqlRequest.variables ?? undefined)

  return NextResponse.json({ data: gqlResponse }, { status: 200 })
}

export async function GET(request: Request) {
  return process(request)
}

export async function POST(request: Request) {
  return process(request)
}
