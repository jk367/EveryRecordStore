import { RecordStore } from '@/types'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useRef } from 'react'

interface RecordMarkerProps {
  store: RecordStore
}

const RecordMarker: React.FC<RecordMarkerProps> = ({ store }) => {
  const markerRef = useRef<L.Marker>(null)
  const router = useRouter()

  // Simple vinyl record icon
  const customIcon = L.divIcon({
    className: `record-marker record-marker-${store.rating}`,
    html: `<div style="height: 100%; width: 100%;"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  })

  const handleMarkerClick = () => {
    router.push(`/store/${store.slug}`)
  }

  return (
    <Marker 
      position={store.coordinates} 
      icon={customIcon}
      eventHandlers={{
        click: handleMarkerClick
      }}
      ref={markerRef}
    >
      <Popup className="store-info-popup">
        <div>
          <h3 style={{ marginBottom: '0.5rem', fontWeight: 500 }}>{store.name.toUpperCase()}</h3>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>{store.address}</p>
          <p style={{ marginBottom: '0.8rem' }}>{store.reviewExcerpt}</p>
          <div style={{ marginBottom: '0.5rem' }}>
            {store.specialties.map((specialty, index) => (
              <span key={index} className="specialty-tag">
                {specialty}
              </span>
            ))}
          </div>
          <p style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>Price: {store.priceRange}</p>
          <Link href={`/store/${store.slug}`} style={{ textDecoration: 'underline' }}>
            View Details →
          </Link>
        </div>
      </Popup>
    </Marker>
  )
}

export default RecordMarker 