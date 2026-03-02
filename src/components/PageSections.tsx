/**
 * PageSections.tsx
 * Path: frontend/components/PageSections.tsx
 *
 * Iterates over the page_sections REST API array and renders
 * the correct block component for each layout type.
 *
 * Usage in a Next.js page:
 *
 *   import PageSections from '@/components/PageSections'
 *
 *   // data comes from WordPress REST API:
 *   // GET /wp-json/wp/v2/pages/{id}  →  data.page_sections
 *
 *   export default async function Page({ params }) {
 *     const res  = await fetch(`${WP_URL}/wp-json/wp/v2/pages/${params.id}`)
 *     const data = await res.json()
 *     return <PageSections sections={ data.page_sections } />
 *   }
 */

import Block5050, { type Block5050Props } from '@/components/blocks/Block5050'

type AnySection =
  | ( Block5050Props & { layout: '50_50' } )
  // Add more layout types here as you build them:
  // | ( BlockHeroProps & { layout: 'hero' } )

interface PageSectionsProps {
  sections: AnySection[]
}

export default function PageSections( { sections }: PageSectionsProps ) {
  if ( ! sections?.length ) return null

  return (
    <>
      { sections.map( ( section, i ) => {
        switch ( section.layout ) {
          case '50_50':
            return <Block5050 key={ i } { ...section } />
          default:
            // Unknown layout — fail silently in production
            if ( process.env.NODE_ENV === 'development' ) {
              console.warn( `[PageSections] Unknown layout: ${ ( section as any ).layout }` )
            }
            return null
        }
      } ) }
    </>
  )
}
