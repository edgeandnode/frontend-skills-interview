import { DelegationsTableSkeleton } from '@/app/indexers/[id]/_DelegationsTable/DelegationsTableSkeleton'
import { IndexerMetricsSkeleton } from '@/app/indexers/[id]/_IndexerMetrics/IndexerMetricsSkeleton'
import { IndexerLast5Delegations } from '@/app/indexers/[id]/_DelegationsTable/IndexerLast5Delegations'
import { IndexerMetrics } from '@/app/indexers/[id]/_IndexerMetrics/IndexerMetrics'
import { UserLast5Delegations } from '@/app/indexers/[id]/_DelegationsTable/UserLast5Delegations'
import { IndexerDetailsPageParams } from '@/app/types'
import { BreadCrumbPath } from '@/components/BreadCrumbPath'
import { addrShortener } from '@/lib/addrShortener'
import { getQueryClient } from '@/lib/queries/getQueryClient'
import { graphNetworkQueryOptionsSSR } from '@/lib/queries/graphNetwork/server'
import { indexerDetailsQueryOptionsSSR } from '@/lib/queries/indexerDetails/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Account } from '@/components/Account'
import { DelegatePanel } from '@/app/indexers/[id]/_DelegatePanel/DelegatePanel'

export default async function IndexerDetailsPage(props: { params: Promise<IndexerDetailsPageParams> }) {
  const { id } = await props.params
  const queryClient = getQueryClient()
  queryClient.prefetchQuery({ ...graphNetworkQueryOptionsSSR() })
  queryClient.prefetchQuery({ ...indexerDetailsQueryOptionsSSR(id) })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-col gap-6">
        <BreadCrumbPath items={[{ label: 'Indexers', href: '/indexers' }, { label: addrShortener(id) }]} />
        <div className="flex items-center justify-between">
          <Account id={id} iconDiameter={100} className="text-3xl font-extrabold tracking-tight lg:text-4xl" />
          <div className="flex items-center gap-10">
            <Suspense fallback={<IndexerMetricsSkeleton />}>
              <IndexerMetrics />
            </Suspense>
          </div>
        </div>
        <div className="mt-6 flex gap-20">
          <div className="flex flex-1 flex-col gap-6">
            <Suspense fallback={<DelegationsTableSkeleton />}>
              <IndexerLast5Delegations />
            </Suspense>
            <UserLast5Delegations />
          </div>
          <div className="flex-1">
            <DelegatePanel />
          </div>
        </div>
      </main>
    </HydrationBoundary>
  )
}
