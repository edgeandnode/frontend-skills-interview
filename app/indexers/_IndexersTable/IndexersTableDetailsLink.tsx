'use client'

import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function IndexersTableDetailsLink({ id }: { id: string }) {
  const pathname = usePathname()

  return (
    <Link key={id} href={`${pathname}/${id}`} className={buttonVariants({ variant: 'ghost' })}>
      <ArrowRight />
    </Link>
  )
}
