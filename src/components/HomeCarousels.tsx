'use client'
import { useEffect, useState } from 'react'
import BlockCarousel from '@/components/blocks/BlockCarousel'

const WP_BASE = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://dev-francisco-guardado-universe-wp.pantheonsite.io'

export default function HomeCarousels() {
  const [carousels, setCarousels] = useState<any[]>([])
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    fetch(`${WP_BASE}/wp-json/wp/v2/posts/10`)
      .then(r => r.json())
      .then(data => setCarousels(data.carousels || []))
      .catch(() => {})
  }, [])
  if (!mounted || !carousels.length) return null
  return (
    <>
      {carousels.map((carousel: any, i: number) => (
        <BlockCarousel key={i} title={carousel.title} slides={carousel.slides} />
      ))}
    </>
  )
}
