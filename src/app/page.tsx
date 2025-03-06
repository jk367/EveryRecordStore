'use client'

import { recordStores } from '@/data/stores'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Dynamically import the map component to avoid SSR issues
const RecordMap = dynamic(() => import('@/components/RecordMap'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '70vh', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Loading map...
    </div>
  ),
})

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontWeight: 400, textAlign: 'center', marginBottom: '0.5rem' }}>NYC RECORD STORES</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          A guide to every record store in New York City.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          {isClient ? (
            <RecordMap stores={recordStores} />
          ) : (
            <div style={{ width: '100%', height: '70vh', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Loading map...
            </div>
          )}
        </div>
      </div>

      <div className="content-section">
        <div className="grid-2">
          <div>
            <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>ABOUT</h2>
            <p>
              Every Record Store is a guide to vinyl record shops across New York City. 
              Hover over a record on the map to see basic information, or click for the full review.
            </p>
          </div>

          <div>
            <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>RATINGS</h2>
            <div className="rating-legend">
              <div className="rating-item">
                <div className="rating-color" style={{ background: '#ff0000', border: '1px solid #fff' }}></div>
                <span>Red: Poor selection, condition, or experience</span>
              </div>
              <div className="rating-item">
                <div className="rating-color" style={{ background: '#000000', border: '1px solid #fff' }}></div>
                <span>Black: Adequate, meets expectations</span>
              </div>
              <div className="rating-item">
                <div className="rating-color" style={{ background: '#FFD700', border: '1px solid #fff' }}></div>
                <span>Gold: Excellent, highly recommended</span>
              </div>
              <div className="rating-item">
                <div className="rating-color" style={{ background: '#B9F2FF', border: '1px solid #fff' }}></div>
                <span>Diamond: Best in borough</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>RECENTLY ADDED</h2>
        <div className="store-grid">
          {recordStores.map((store) => (
            <div key={store.id} className="store-card">
              <h3 style={{ marginBottom: '0.5rem' }}>
                <a href={`/store/${store.slug}`}>{store.name.toUpperCase()}</a>
              </h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{store.borough}</p>
              <p style={{ marginBottom: '0.5rem' }}>{store.reviewExcerpt}</p>
              <div>
                <a href={`/store/${store.slug}`} style={{ textDecoration: 'underline' }}>Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 