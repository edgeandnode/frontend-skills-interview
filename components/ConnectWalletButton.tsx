'use client'

import { AddressPill } from '@/components/AddressPill'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LogOut } from 'lucide-react'
import { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

function ConnectWalletDialog() {
  const { connectors } = useConnect()
  const { connector: connectedConnector } = useAccount()
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>Pick from the Wallet options below.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {connectors.map((connector) => {
            const { icon, name, id } = connector
            return (
              <Button
                size="lg"
                variant="secondary"
                key={id}
                onClick={async () => {
                  await connector.connect()
                  setOpen(false)
                }}
              >
                <div className="flex items-center gap-2">
                  {connectedConnector?.id === id && <Badge variant="outline">Connected</Badge>}
                  {/* next/image doesn't work with Wagmi's connector.icon since it's in base64 */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {icon ? <img src={icon} alt={name} width={24} height={24} /> : null}
                  <p className="text-lg font-semibold tracking-tight">{name}</p>
                </div>
              </Button>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function Account({ mobile }: { mobile?: boolean }) {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  if (!address) return null

  return (
    <div className="flex max-w-fit items-center">
      <AddressPill address={address} mobile={mobile} />
      <Button size="sm" variant="ghost" onClick={() => disconnect()}>
        <LogOut />
      </Button>
    </div>
  )
}

function GenericConnectWalletButton({ account }: { account: React.ReactNode }) {
  const { isConnected } = useAccount()

  if (isConnected) return account

  return <ConnectWalletDialog />
}

export function ConnectWalletButton() {
  return <GenericConnectWalletButton account={<Account />} />
}

export function ConnectWalletButtonMobile() {
  return <GenericConnectWalletButton account={<Account mobile />} />
}
