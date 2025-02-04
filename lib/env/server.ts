import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    API_KEY: z.string().min(32).max(32),
  },
  client: {
    NEXT_PUBLIC_ROOT_URI: z.string().url().default('http://localhost:3000'),
  },
  runtimeEnv: {
    API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_ROOT_URI: process.env.NEXT_PUBLIC_ROOT_URI,
  },
})
