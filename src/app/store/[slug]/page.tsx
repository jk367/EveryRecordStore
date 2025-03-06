'use client'

import { useEffect, useState } from 'react'
import { recordStores } from '@/data/stores'
import { RecordStore } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function StorePage({ params }: { params: { slug: string } }) {
  const [store, setStore] = useState<RecordStore | null>(null)
  
  useEffect(() => {
    const foundStore = recordStores.find(s => s.slug === params.slug)
    if (foundStore) {
      setStore(foundStore)
    }
  }, [params.slug])

  if (!store) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Loading...</h2>
        </div>
      </div>
    )
  }

  // Helper function to get rating text
  const getRatingText = (rating: string) => {
    switch (rating) {
      case 'red': return 'BAD';
      case 'black': return 'OK';
      case 'gold': return 'GREAT';
      case 'diamond': return 'BEST IN BOROUGH';
      default: return '';
    }
  }

  return (
    <>
      <Link href="/" className="back-link" style={{ textDecoration: 'underline' }}>
        ← Back to map
      </Link>

      <article>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontWeight: 400, marginBottom: '0.5rem' }}>{store.name.toUpperCase()}</h1>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ 
              border: '1px solid #000', 
              padding: '0.25rem 0.5rem', 
              fontWeight: 400,
              fontSize: '0.75rem'
            }}>
              {getRatingText(store.rating)}
            </span>
            <span>{store.borough}</span>
          </div>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{ position: 'relative', height: '300px', marginBottom: '1rem', border: '1px solid #000' }}>
              <Image 
                src={store.imageUrl} 
                alt={store.name}
                className="object-cover"
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>ADDRESS</h2>
              <p>{store.address}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>HOURS</h2>
              <div style={{ fontSize: '0.9rem' }}>
                {Object.entries(store.hours).map(([day, hours]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ textTransform: 'capitalize' }}>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>CONTACT</h2>
              <div style={{ fontSize: '0.9rem' }}>
                {store.phone && (
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Phone:</strong> {store.phone}
                  </p>
                )}
                {store.website && (
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Website:</strong>{' '}
                    <a href={store.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                      {store.website.replace(/^https?:\/\//, '')}
                    </a>
                  </p>
                )}
                {store.instagram && (
                  <p>
                    <strong>Instagram:</strong>{' '}
                    <a 
                      href={`https://instagram.com/${store.instagram.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'underline' }}
                    >
                      {store.instagram}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>ABOUT</h2>
              <p>{store.description}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>SPECIALTIES</h2>
              <div>
                {store.specialties.map((specialty, index) => (
                  <span key={index} className="specialty-tag">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>REVIEW</h2>
              <div>
                {store.fullReview.split('\n\n').map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: '1rem' }}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
} 