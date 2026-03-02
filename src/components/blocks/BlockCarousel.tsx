'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

type CarouselSlide = {
  image_url: string
  image_alt: string
  caption: string
}

export type BlockCarouselProps = {
  title: string
  slides: CarouselSlide[]
}

export default function BlockCarousel({ title, slides }: BlockCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef<number>(0)
  const total = slides.length

  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX
    setDragging(true)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return
    const delta = dragStart.current - e.clientX
    if (delta > 50) next()
    else if (delta < -50) prev()
    setDragging(false)
  }

  if (!slides || slides.length === 0) return null

  const mainSlide = slides[current]
  const peekSlide = slides[(current + 1) % total]

  return (
    <>
      <style>{`
        .ub-carousel-track { display: flex; height: 560px; cursor: grab; }
        .ub-carousel-track.is-dragging { cursor: grabbing; }
        .ub-carousel-main { position: relative; width: 63%; flex-shrink: 0; overflow: hidden; }
        .ub-carousel-peek { position: relative; width: 37%; flex-shrink: 0; overflow: hidden; }
        .ub-carousel-nav {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: row;
          gap: 16px;
          z-index: 20;
        }
        .ub-carousel-counter {
          position: absolute;
          bottom: 16px;
          right: 24px;
        }
        @media (max-width: 640px) {
          .ub-carousel-track { height: 320px; }
          .ub-carousel-main { width: 100%; }
          .ub-carousel-peek { display: none; }
          .ub-carousel-nav {
            top: auto;
            left: auto;
            bottom: 16px;
            right: 16px;
            transform: none;
            flex-direction: column-reverse;
            gap: 10px;
          }
          .ub-carousel-counter { bottom: 16px; right: 80px; }
        }
      `}</style>

      <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

        {/* Vertical title */}
        <div style={{
          position: 'absolute',
          left: '16px',
          top: 0,
          bottom: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <span style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontFamily: 'Georgia, serif',
            textShadow: '0 1px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.6)',
          }}>
            {title}
          </span>
        </div>

        {/* Slide track */}
        <div
          className={`ub-carousel-track${dragging ? ' is-dragging' : ''}`}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* Main slide */}
          <div className="ub-carousel-main">
            <img
              key={current}
              src={mainSlide.image_url}
              alt={mainSlide.image_alt || ''}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              draggable={false}
            />
            {mainSlide.caption && (
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                background: '#000',
                color: '#fff',
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'Georgia, serif',
                maxWidth: '55%',
                lineHeight: 1.4,
              }}>
                {mainSlide.caption}
              </div>
            )}
          </div>

          {/* Peek slide */}
          <div className="ub-carousel-peek">
            <img
              key={(current + 1) % total}
              src={peekSlide.image_url}
              alt={peekSlide.image_alt || ''}
              style={{ width: '170%', height: '100%', objectFit: 'cover', objectPosition: 'left center', display: 'block' }}
              draggable={false}
            />
          </div>
        </div>

        {/* Nav buttons — horizontal on desktop, stacked (> above <) on mobile */}
        <div className="ub-carousel-nav">
          <button
            onClick={next}
            aria-label="Next slide"
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              border: '2px solid #f97316', background: 'transparent',
              color: '#f97316', fontSize: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              lineHeight: 1, transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(249,115,22,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >›</button>
          <button
            onClick={prev}
            aria-label="Previous slide"
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              border: '2px solid #f97316', background: 'transparent',
              color: '#f97316', fontSize: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              lineHeight: 1, transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(249,115,22,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >‹</button>
        </div>

        {/* Counter */}
        <div className="ub-carousel-counter" style={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '12px',
          fontFamily: 'Georgia, serif',
          zIndex: 10,
        }}>
          {current + 1} / {total}
        </div>

      </section>
    </>
  )
}
