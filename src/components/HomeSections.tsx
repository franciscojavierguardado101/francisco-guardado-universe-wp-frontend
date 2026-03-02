'use client'
import { useEffect, useState } from 'react'
import PageSections from '@/components/PageSections'

const WP_BASE = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://dev-francisco-guardado-universe-wp.pantheonsite.io'

export default function HomeSections() {
  const [sections, setSections] = useState<any[]>([])
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    fetch(`${WP_BASE}/wp-json/wp/v2/posts/10`)
      .then(r => r.json())
      .then(data => setSections(data.page_sections || []))
      .catch((e) => console.error('WP fetch error:', e))
  }, [])
  if (!mounted) return null
  if (!sections.length) return null
  return <PageSections sections={sections} />
}
