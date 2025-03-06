import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontWeight: 400, marginBottom: '1rem' }}>404 - PAGE NOT FOUND</h1>
      <p style={{ marginBottom: '2rem' }}>
        We couldn't find the record store you're looking for.
      </p>
      <Link href="/" style={{ textDecoration: 'underline' }}>
        ← Return to the homepage
      </Link>
    </div>
  )
} 