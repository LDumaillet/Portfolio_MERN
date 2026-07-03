import { useEffect, useRef } from 'react'

/**
 * Hook to observe elements and trigger CSS reveal animation.
 * Usage: const ref = useReveal()  →  <div ref={ref} className="reveal">
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Hook to observe multiple elements (children of a container).
 * Usage: const parentRef = useRevealChildren('.reveal')
 */
export function useRevealChildren(selector = '.reveal') {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const els = container.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
