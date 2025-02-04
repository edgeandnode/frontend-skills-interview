import { DataGroup } from '@/app/indexers/[id]/_IndexerMetrics/DataGroup'
import { Skeleton } from '@/components/ui/skeleton'

function ValueSkeleton() {
  return <Skeleton className="h-7 w-20" />
}

export function IndexerMetricsSkeleton() {
  return (
    <>
      <DataGroup label="Delegated Tokens" value={<ValueSkeleton />} unit="GRT" />
      <DataGroup label="Available Capacity" value={<ValueSkeleton />} unit="GRT" />
      <DataGroup label="Max Capacity" value={<ValueSkeleton />} unit="GRT" />
    </>
  )
}
