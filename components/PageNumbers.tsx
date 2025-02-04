'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import useCreateURL from '@/lib/useCreateURL'
import { useSearchParams } from 'next/navigation'

export function PageNumbers({ total }: { total: number }) {
  const searchParams = useSearchParams()
  const current = parseInt(searchParams.get('page') ?? '1') ?? 1

  const createPageURL = useCreateURL('page')

  const pages = (
    current < 4
      ? [1, 2, 3, 4, 5]
      : current > total - 3
        ? [total - 4, total - 3, total - 2, total - 1, total]
        : [current - 2, current - 1, current, current + 1, current + 2]
  ).filter((page) => page > 0 && page <= total)
  const previous = Math.max(current - 1, 1)
  const next = Math.min(current + 1, total)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(previous.toString())} />
        </PaginationItem>

        {pages.map((page) => {
          return (
            <PaginationItem key={page}>
              <PaginationLink href={createPageURL(page.toString())} isActive={current === page}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationNext href={createPageURL(next.toString())} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
