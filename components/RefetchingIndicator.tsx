import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

export function RefetchingIndicator({ className }: { className?: string }) {
  return (
    <span className={cn('text-muted-foreground', className)}>
      <LoaderCircle className="h-4 w-4 animate-spin" />
    </span>
  )
}
