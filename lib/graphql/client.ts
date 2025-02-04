import { env } from '@/lib/env/server'
import { GraphQLClient } from 'graphql-request'

// on the client use the /graphql endpoint
export const client = new GraphQLClient(`${env.NEXT_PUBLIC_ROOT_URI}/graphql`)
