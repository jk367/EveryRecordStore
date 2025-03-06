import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Every Record Store - NYC',
  description: 'Reviews of record stores in NYC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 400, margin: 0 }}>
                <a href="/">EVERY RECORD STORE</a>
              </h1>
              <nav>
                <a href="/" className="nav-link">Map</a>
                <a href="/about" className="nav-link">About</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Every Record Store</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 