import { IndexersList } from '@/app/indexers/IndexersList'
import IndexersListPagination from '@/app/indexers/IndexersListPagination'
import { IndexersPageSearchParams } from '@/app/types'
import { BreadCrumbPath } from '@/components/BreadCrumbPath'
import { Skeleton } from '@/components/ui/skeleton'
import { getQueryClient } from '@/lib/queries/getQueryClient'
import { graphNetworkQueryOptionsSSR } from '@/lib/queries/graphNetwork/server'
import { indexersQueryOptionsSSR } from '@/lib/queries/indexers/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'

export default async function IndexersPage(props: { searchParams?: Promise<IndexersPageSearchParams> }) {
  const searchParams = await props.searchParams
  const page = parseInt(searchParams?.page ?? '1') ?? 1
  const queryClient = getQueryClient()

  queryClient.prefetchQuery({ ...graphNetworkQueryOptionsSSR() })

  if (page > 1) {
    queryClient.prefetchQuery({ ...indexersQueryOptionsSSR(page - 1) })
  }
  queryClient.prefetchQuery({ ...indexersQueryOptionsSSR(page) })
  queryClient.prefetchQuery({ ...indexersQueryOptionsSSR(page + 1) })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-col gap-4">
        <BreadCrumbPath items={[{ label: 'Indexers' }]} />
        <Suspense fallback={<Skeleton className="mx-auto h-[610px] w-[992px]" />}>
          <IndexersList />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-9 w-96" />}>
          <IndexersListPagination />
        </Suspense>
      </main>
    </HydrationBoundary>
  )
}
