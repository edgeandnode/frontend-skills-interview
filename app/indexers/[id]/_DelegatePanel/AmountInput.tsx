import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function AmountInput({
  value,
  onChange,
  onBlur,
  error,
  touched,
}: {
  value: string
  onChange: (value: string) => void
  onBlur: () => void
  error?: string
  touched?: boolean
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className={cn('w-full text-sm font-medium', touched && error && 'text-red-500')}>Delegation amount:</p>
      <Input
        placeholder="Enter an amount"
        className="w-full"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />
      {touched && error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  )
}
