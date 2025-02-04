import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'

export function SubmitButton({
  label,
  onClick,
  disabled,
  loading,
}: {
  label: string
  onClick: () => void
  disabled: boolean
  loading?: boolean
}) {
  return (
    <Button className="flex w-full items-center gap-2" onClick={onClick} disabled={disabled}>
      {label}
      {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
    </Button>
  )
}
