import { Account } from '@/components/Account'
import { RefetchingIndicator } from '@/components/RefetchingIndicator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { dateFormat, grtFormatOptions } from '@/lib/formatters'

export function DelegationsTable({
  title,
  entity,
  rows,
  isRefetching,
}: {
  title: string
  entity: string
  rows: { date: Date; amount: number; id: string; address: string }[]
  isRefetching?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {isRefetching ? <RefetchingIndicator /> : null}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>{entity}</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(({ address, amount, date, id }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{dateFormat.format(date)}</TableCell>
              <TableCell>
                <Account id={address} iconDiameter={20} className="gap-1 text-sm text-muted-foreground" />
              </TableCell>
              <TableCell className="text-right">
                {new Intl.NumberFormat('en-US', { ...grtFormatOptions, roundingMode: 'ceil' }).format(amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
