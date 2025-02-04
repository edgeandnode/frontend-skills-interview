import { Menu, MobileMenu } from '@/app/_Layout/Menu'
import { ConnectWalletButton, ConnectWalletButtonMobile } from '@/components/ConnectWalletButton'

function NavBarMobile() {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center justify-between bg-white px-4 md:hidden">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold tracking-tight">The Graph</h1>
        <MobileMenu className="ml-4" />
      </div>
      <ConnectWalletButtonMobile />
    </div>
  )
}

function NavBarDesktop() {
  return (
    <div className="fixed top-0 hidden h-14 w-full items-center justify-between bg-white px-4 md:flex">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold tracking-tight">The Graph Protocol App</h1>
        <Menu className="ml-4" />
      </div>
      <ConnectWalletButton />
    </div>
  )
}

export function NavBar() {
  return (
    <>
      <NavBarMobile />
      <NavBarDesktop />
    </>
  )
}
