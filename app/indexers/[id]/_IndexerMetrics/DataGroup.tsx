import { RefetchingIndicator } from '@/components/RefetchingIndicator'

export function DataGroup({
  label,
  value,
  unit,
  isRefetching,
}: {
  label: React.ReactNode
  value: React.ReactNode
  unit: React.ReactNode
  isRefetching?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold leading-none text-muted-foreground">{label}</p>
      <div className="flex items-center gap-1">
        {typeof value === 'string' ? <p className="text-xl font-extrabold tracking-tight">{value}</p> : value}
        {isRefetching ? (
          <RefetchingIndicator />
        ) : (
          <p className="text-sm font-medium leading-none text-muted-foreground">{unit}</p>
        )}
      </div>
    </div>
  )
}
