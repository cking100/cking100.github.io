
import { useEffect, useState } from "react"

export default function MouseMoveEffect() {
  const [Position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${Position.x}px ${Position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  )
}
