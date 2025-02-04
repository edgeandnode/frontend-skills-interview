import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CircleX } from 'lucide-react'

export function DelegateErrorAlert({ error }: { error: string }) {
  return (
    <Alert variant="destructive" className="max-w-96">
      <CircleX className="h-4 w-4" />
      <AlertTitle className="font-semibold">Something went wrong!</AlertTitle>
      <AlertDescription>
        <p className="whitespace-break-spaces break-all">{error}</p>
      </AlertDescription>
    </Alert>
  )
}
