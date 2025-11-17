import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krizel: Wellness that Works for Busy Moms',
  description: 'Your fitness companion for workout tips, healthy meal plans, and wellness guidance. Transform your fitness journey with expert advice.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="https://use.typekit.net/den0vgv.css" />
      </head>
      <body className="font-sans bg-accent-cream text-gray-900">
        {children}
      </body>
    </html>
  )
}

