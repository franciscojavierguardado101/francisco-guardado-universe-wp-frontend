'use client'

import { useEffect, useState } from 'react'
import PageSections from '@/components/PageSections'

const WP_HTTPS = 'https://francisco-guardado-universewp.ddev.site:33300'
const WP_HTTP  = 'http://francisco-guardado-universewp.ddev.site:33000'

function rewriteUrls(sections: any[]) {
  return JSON.parse(
    JSON.stringify(sections).replaceAll(WP_HTTPS, WP_HTTP)
  )
}

export default function HomeSections() {
  const [sections, setSections] = useState<any[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetch(`${WP_HTTP}/wp-json/wp/v2/posts/10`)
      .then(r => r.json())
      .then(data => setSections(rewriteUrls(data.page_sections || [])))
      .catch((e) => console.error('WP fetch error:', e))
  }, [])

  if (!mounted) return null
  if (!sections.length) return null
  return <PageSections sections={sections} />
}
