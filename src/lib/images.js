// Responsive-image helper (Bug 3 fix).
// Every photo ships at native resolution plus a <=760px "-sm" variant. `pic()`
// returns the data an <img> needs to pick the right file per viewport via
// srcset/sizes, so the browser never downloads (or wastefully upscales past)
// more pixels than the layout shows. Native widths come from the build-time
// manifest — we never upscale beyond a photo's true resolution.
import manifest from './imageManifest.json'

const B = import.meta.env.BASE_URL

export function pic(name) {
  const m = manifest[name]
  if (!m) return { src: `${B}img/${name}.jpg` }
  const sw = Math.min(760, m.w)
  return {
    src: `${B}img/${name}.jpg`,
    srcSet: `${B}img/${name}-sm.jpg ${sw}w, ${B}img/${name}.jpg ${m.w}w`,
    width: m.w,
    height: m.h,
    nativeW: m.w,
  }
}

// native width for a given image (used by the over-display audit)
export const nativeWidth = (name) => (manifest[name] ? manifest[name].w : 0)
export { manifest }
