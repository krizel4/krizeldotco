import { Navigation } from './Navigation'
import { Footer } from './Footer'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

