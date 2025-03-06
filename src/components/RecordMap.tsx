import { RecordStore } from '@/types'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

interface RecordMapProps {
  stores: RecordStore[]
}

// Dynamically import the Map components to avoid SSR issues with Leaflet
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const RecordMarker = dynamic(
  () => import('./RecordMarker'),
  { ssr: false }
)

const RecordMap: React.FC<RecordMapProps> = ({ stores }) => {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // NYC center coordinates
  const nycCenter: [number, number] = [40.7128, -74.0060]

  if (!isMounted) {
    return <div style={{ width: '100%', height: '70vh', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading map...</div>
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <MapContainer
        center={nycCenter}
        zoom={12}
        style={{ height: '70vh', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map(store => (
          <RecordMarker key={store.id} store={store} />
        ))}
      </MapContainer>

      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        right: '10px', 
        zIndex: 1000, 
        background: 'white', 
        padding: '10px',
        border: '1px solid black',
        fontSize: '12px'
      }}>
        <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>RATINGS</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', marginRight: '5px', background: '#ff0000', border: '1px solid #fff' }}></div>
          <span>Bad</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', marginRight: '5px', background: '#000000', border: '1px solid #fff' }}></div>
          <span>OK</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', marginRight: '5px', background: '#FFD700', border: '1px solid #fff' }}></div>
          <span>Great</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', marginRight: '5px', background: '#B9F2FF', border: '1px solid #fff' }}></div>
          <span>Best</span>
        </div>
      </div>
    </div>
  )
}

export default RecordMap 