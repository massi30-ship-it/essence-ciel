// Shared soft-brand primitives.
// - Wordmark: resolution-independent inline SVG lockup (Bug 4) — ornate serif
//   lettering framed by swash flourishes and a hairline rule, crisp at any size.
// - Placeholder: responsive <img> with srcset/sizes + intrinsic width/height
//   (Bug 3) so nothing over-fetches or shifts layout.
import React from 'react'
import { pic } from '../lib/images.js'

/* ---------- Wordmark (inline SVG) ---------- */
export function Wordmark({ className = '', color = 'currentColor', sub, title = 'Essence Ciel' }) {
  return (
    <svg viewBox="0 0 460 150" className={className} role="img" aria-label={title} style={{ color, width: '100%', height: 'auto', overflow: 'visible' }}>
      {/* top swash flourish */}
      <path d="M120 34 C 175 14, 285 14, 340 34 M150 30 C 200 40, 260 40, 310 30"
            fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      <circle cx="230" cy="22" r="2.4" fill="currentColor" />
      {/* the name — vector text, scales with the SVG */}
      <text x="230" y="92" textAnchor="middle" fill="currentColor"
            fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500"
            fontSize="66" letterSpacing="1">Essence Ciel</text>
      {/* bottom swash flourish with center diamond */}
      <path d="M120 116 C 175 136, 285 136, 340 116" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      <path d="M215 116 L230 108 L245 116 L230 124 Z" fill="currentColor" />
      {sub && (
        <text x="230" y="140" textAnchor="middle" fill="currentColor" opacity="0.7"
              fontFamily="'Jost', sans-serif" fontSize="12" letterSpacing="5"
              style={{ textTransform: 'uppercase' }}>{sub}</text>
      )}
    </svg>
  )
}

/* ---------- Responsive image / placeholder ---------- */
export function Placeholder({
  name, label = 'Image', tone = 'blush', src, alt, mono = false,
  className = '', rounded = 'rounded-[18px]', caption, sizes = '100vw',
}) {
  const p = name ? pic(name) : src ? { src } : null
  const tones = {
    blush: 'from-blush to-blush-accent/70',
    champagne: 'from-champagne to-champagne-accent/70',
    sky: 'from-sky to-sky-accent/70',
    ink: 'from-[#2b2622] to-[#3a342e]',
    cream: 'from-cream to-blush/40',
  }
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {p ? (
        <img
          src={p.src}
          srcSet={p.srcSet}
          sizes={sizes}
          width={p.width}
          height={p.height}
          alt={alt || label}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${mono ? 'mono' : ''}`}
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${tones[tone] || tones.blush} ${mono ? 'mono' : ''}`} role="img" aria-label={alt || label}>
          <span className="script select-none px-4 text-center text-2xl text-ink/40 md:text-3xl">{label}</span>
        </div>
      )}
      {caption && (
        <div className="absolute bottom-3 left-3 rounded-full bg-ink/55 px-3.5 py-1.5 text-[12px] text-offwhite backdrop-blur-md">
          {caption}
        </div>
      )}
    </div>
  )
}

/* ---------- Circular monogram (footer) ---------- */
export function CircleMonogram({ size = 96, className = '' }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={className} aria-label="Essence Ciel monogram">
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 4" />
      <text x="60" y="72" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="42" fill="currentColor">EC</text>
    </svg>
  )
}

/* ---------- Chevron motifs ---------- */
export function Chevron({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 6 16 12 8 18" />
    </svg>
  )
}
export function ChevronDivider({ color = 'text-champagne-accent', count = 40, className = '' }) {
  return (
    <div className={`flex w-full items-center justify-center gap-2 overflow-hidden py-3 ${color} ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Chevron key={i} className="shrink-0 opacity-80" />
      ))}
    </div>
  )
}

/* ---------- Soft organic blob ---------- */
export function Blob({ className = '', fill = '#F5D9DE', style }) {
  return (
    <svg viewBox="0 0 600 600" className={className} style={style} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <path fill={fill} d="M300 40c120 0 250 70 250 220 0 130-70 300-260 300C120 560 40 420 40 280 40 120 160 40 300 40z" />
    </svg>
  )
}
