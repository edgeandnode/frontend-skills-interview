'use client'

import { IndexerDetailsPageParams } from '@/app/types'
import { useParams } from 'next/navigation'

export function useIdParam() {
  const params = useParams<IndexerDetailsPageParams>()
  return params.id
}
