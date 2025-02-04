import IndexersTableDetailsLink from '@/app/indexers/_IndexersTable/IndexersTableDetailsLink'
import { Account } from '@/components/Account'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function IndexersTableUI({
  rows,
}: {
  rows: {
    id: string
    delegatedTokens: string
    delegatorIndexingRewards: string
    delegatedStakeRatio: string
    lastDelegator?: { id: string; delegatedTokens: string; lastDelegatedAt: string }
  }[]
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Indexer</TableHead>
          <TableHead>Delegated Tokens</TableHead>
          <TableHead>Indexing Rewards</TableHead>
          <TableHead>Overdelegation %</TableHead>
          <TableHead>Last Delegator</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ id, delegatedTokens, delegatedStakeRatio, delegatorIndexingRewards, lastDelegator }) => (
          <TableRow key={id} className="">
            <TableCell>
              <Account id={id} iconDiameter={20} className="gap-1 text-sm text-muted-foreground" />
            </TableCell>
            <TableCell>
              <p>{delegatedTokens}</p>
            </TableCell>
            <TableCell>
              <p>{delegatorIndexingRewards}</p>
            </TableCell>
            <TableCell>
              <p>{delegatedStakeRatio}</p>
            </TableCell>
            <TableCell>
              {lastDelegator ? (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">{lastDelegator.delegatedTokens}</p>
                    <p className="text-xs font-semibold text-muted-foreground">({lastDelegator.lastDelegatedAt})</p>
                  </div>
                  <Account id={id} iconDiameter={20} className="gap-1 text-xs text-muted-foreground" />
                </div>
              ) : null}
            </TableCell>
            <TableCell>
              <IndexersTableDetailsLink id={id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
