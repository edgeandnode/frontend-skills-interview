import { ConnectWalletButton } from '@/components/ConnectWalletButton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'

export function NotConnectedAlert() {
  return (
    <Alert variant="warning" className="max-w-96">
      <Terminal className="h-4 w-4" />
      <AlertTitle className="font-semibold">Wallet is not connected</AlertTitle>
      <AlertDescription className="flex flex-col gap-2">
        <span>Please connect your wallet to see the page!</span>
        <div className="mx-auto">
          <ConnectWalletButton />
        </div>
      </AlertDescription>
    </Alert>
  )
}
