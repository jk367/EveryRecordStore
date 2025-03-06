// This is a server component
import { recordStores } from '@/data/stores'
import { RecordStore } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import StoreClientComponent from './StoreClientComponent'

// Generate static paths for all stores
export async function generateStaticParams() {
  return recordStores.map((store) => ({
    slug: store.slug,
  }))
}

export default function StorePage({ params }: { params: { slug: string } }) {
  const store = recordStores.find(s => s.slug === params.slug)
  
  if (!store) {
    notFound()
  }

  return <StoreClientComponent store={store} />
} 