'use client'

type MediaType =
  | { type: 'image';   url: string; alt: string; width: number; height: number; srcset?: string }
  | { type: 'video';   url: string; mime: string }
  | { type: 'youtube'; url: string; embed: string }
  | Record<string, never>

export type Block5050Props = {
  layout:            '50_50'
  media:             MediaType
  title:             string
  description:       string
  position:          'left' | 'right'
  background_color:  'white' | 'black' | 'red' | 'yellow' | 'blue' | 'midnight' | 'navy'
}

const BG_COLORS: Record<Block5050Props['background_color'], string> = {
  white:    '#ffffff',
  black:    '#0a0a0a',
  red:      '#c0392b',
  yellow:   '#f1c40f',
  blue:     '#2980b9',
  midnight: '#1a1a2e',
  navy:     '#0d3b66',
}

const DARK_BACKGROUNDS = new Set(['black', 'midnight', 'navy', 'red', 'blue'])

export default function Block5050({
  media,
  title,
  description,
  position         = 'left',
  background_color = 'white',
}: Block5050Props) {
  const isDark    = DARK_BACKGROUNDS.has(background_color)
  const isYellow  = background_color === 'yellow'
  const textColor = isDark && !isYellow ? '#f5f5f5' : '#1a1a1a'
  const bgColor   = BG_COLORS[background_color] || '#ffffff'

  const imageOrder = position === 'right' ? 2 : 1
  const textOrder  = position === 'right' ? 1 : 2

  const renderMedia = () => {
    if (!media || !('type' in media)) return null
    switch (media.type) {
      case 'image':
        return (
          <img
            src={media.url}
            alt={media.alt || ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '320px' }}
            loading="lazy"
          />
        )
      case 'video':
        return (
          <video controls preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '280px' }}>
            <source src={media.url} type={media.mime || 'video/mp4'} />
          </video>
        )
      case 'youtube':
        return (
          <div style={{ position: 'relative', paddingBottom: '56.25%', minHeight: '240px' }}>
            <iframe
              src={media.embed}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <style>{`
        .ub-5050-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          min-height: 420px;
        }
        .ub-5050-media {
          position: relative;
          overflow: hidden;
          min-height: 320px;
          order: ${imageOrder};
        }
        .ub-5050-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px 64px;
          order: ${textOrder};
        }
        @media (max-width: 640px) {
          .ub-5050-grid {
            grid-template-columns: 1fr;
          }
          .ub-5050-media {
            order: 1 !important;
            min-height: 260px;
          }
          .ub-5050-text {
            order: 2 !important;
            padding: 32px 24px;
          }
        }
      `}</style>

      <section style={{ backgroundColor: bgColor, width: '100%', overflow: 'hidden' }}>
        <div className="ub-5050-grid">

          <div className="ub-5050-media">
            {renderMedia()}
          </div>

          <div className="ub-5050-text" style={{ color: textColor }}>
            {title && (
              <h2 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px', color: textColor }}>
                {title}
              </h2>
            )}
            {description && (
              <div
                style={{ color: textColor, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>

        </div>
      </section>
    </>
  )
}
