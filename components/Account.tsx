'use client'

import { addrShortener } from '@/lib/addrShortener'
import { cn } from '@/lib/utils'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export function Account({
  id,
  iconDiameter,
  className,
  address,
}: {
  id: string
  iconDiameter: number
  className?: string
  address?: React.ReactNode
}) {
  return (
    <div className={cn('flex items-center gap-8', className)}>
      <Jazzicon diameter={iconDiameter} seed={jsNumberForAddress(id)} />
      {address ? address : <p>{addrShortener(id)}</p>}
    </div>
  )
}
