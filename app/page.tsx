import Link from 'next/link'

import { Button, buttonVariants } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

function DisabledLinkWithTooltip({ title }: { title: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="cursor-not-allowed opacity-50">{title}</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Coming Soon!</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center gap-2 pt-4">
        <h2 className="text-2xl text-muted-foreground">Welcome to The Graph Protocol!</h2>
        <p className="text-xl font-semibold tracking-tight">
          Choose which list would you like to see from the menu below!
        </p>
        <div className="mt-4 flex w-80 flex-col gap-4">
          <Link href="/indexers" className={buttonVariants({})}>
            Indexers
          </Link>
          <TooltipProvider delayDuration={10}>
            <DisabledLinkWithTooltip title="Delegators" />
            <DisabledLinkWithTooltip title="Curators" />
          </TooltipProvider>
        </div>
      </div>
    </main>
  )
}
