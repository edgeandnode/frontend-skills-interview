import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { ConnectWalletButton } from '@/components/ConnectWalletButton'

export function Menu({ className }: { className?: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className={className}>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/indexers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Indexers</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MobileMenu({ className }: { className?: string }) {
  return (
    <Drawer>
      <DrawerTrigger className={className} asChild>
        <Button variant="ghost">Menu</Button>
      </DrawerTrigger>
      <DrawerContent className="mb-4">
        <DrawerHeader className="mx-auto">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="mx-auto">
          <Menu className="flex flex-col gap-2" />
        </div>
        <div className="mx-auto mt-4">
          <ConnectWalletButton />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
