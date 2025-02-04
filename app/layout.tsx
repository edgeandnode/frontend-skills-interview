import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { cookieToInitialState } from 'wagmi'
import { Providers } from './_Layout/providers'
import { headers } from 'next/headers'
import { config } from '@/lib/wagmi.config'
import { NavBar } from '@/app/_Layout/NavBar'
import { Connected } from '@/components/Connected'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'The Graph Protocol App',
  description: 'Visualize the Graph Protocol',
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode
  }>,
) {
  const headersList = await headers()
  const initialState = cookieToInitialState(config, headersList.get('cookie'))

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers initialState={initialState}>
          <NavBar />
          <div className="container mx-auto mt-20 px-4">
            <Connected>{props.children}</Connected>
          </div>
        </Providers>
      </body>
    </html>
  )
}
