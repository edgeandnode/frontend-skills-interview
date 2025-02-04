'use client'

import { usePathname, useSearchParams } from 'next/navigation'

export default function useCreateURL<K extends string, V extends string>(searchParamKey: K) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (searchParamValue: V) => {
    const params = new URLSearchParams(searchParams)
    params.set(searchParamKey, searchParamValue)
    return `${pathname}?${params.toString()}`
  }
}
