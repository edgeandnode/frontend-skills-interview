import { Account } from '@/components/Account'
import { addrShortener } from '@/lib/addrShortener'
import { cn } from '@/lib/utils'

export function AddressPill({ address, mobile }: { address: `0x${string}`; mobile?: boolean }) {
  return (
    <Account
      id={address}
      iconDiameter={24}
      className={cn('gap-2 rounded-full border-2 border-solid p-1 pr-2', mobile && 'pr-1')}
      address={
        <p className={cn('text-xs font-semibold leading-none', mobile && 'hidden md:block')}>
          {addrShortener(address)}
        </p>
      }
    />
  )
}
