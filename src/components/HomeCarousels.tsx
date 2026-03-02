'use client'

import { useEffect, useState } from 'react'
import BlockCarousel from '@/components/blocks/BlockCarousel'

const WP_HTTPS = 'https://francisco-guardado-universewp.ddev.site:33300'
const WP_HTTP  = 'http://francisco-guardado-universewp.ddev.site:33000'

export default function HomeCarousels() {
  const [carousels, setCarousels] = useState<any[]>([])
  const [mounted, setMounted]     = useState(false)

  useEffect(() => {
    setMounted(true)
    fetch(`${WP_HTTP}/wp-json/wp/v2/posts/10`)
      .then(r => r.json())
      .then(data => {
        const raw = data.carousels || []
        const fixed = JSON.parse(JSON.stringify(raw).replaceAll(WP_HTTPS, WP_HTTP))
        setCarousels(fixed)
      })
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
