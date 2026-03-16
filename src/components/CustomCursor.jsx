import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX - 4 + 'px'
      dot.style.top = mouseY - 4 + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX - 16 + 'px'
      ring.style.top = ringY - 16 + 'px'
      requestAnimationFrame(animate)
    }

    const onHover = () => {
      dot.style.transform = 'scale(2)'
      ring.style.transform = 'scale(1.5)'
      ring.style.opacity = '0.9'
      ring.style.borderColor = '#7c3aed'
    }

    const onLeave = () => {
      dot.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
      ring.style.opacity = '0.6'
      ring.style.borderColor = '#00f5d4'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', onLeave)
    })

    animate()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
