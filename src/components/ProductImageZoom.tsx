import type React from "react"
import { useState, useRef } from "react"

interface ProductImageZoomProps {
  src: string
  alt: string
  className?: string
}

export function ProductImageZoom({ src, alt, className = "" }: ProductImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    setIsZoomed(true)
  }

  const handleMouseLeave = () => {
    setIsZoomed(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  return (
    <div className="relative">
      <div
        ref={imageRef}
        className={`relative overflow-hidden cursor-crosshair ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-200 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={{
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />

        {/* Overlay para indicar zoom */}
        {!isZoomed && (
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-5 transition-all duration-200 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm text-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-200">
              🔍 Hover para ampliar
            </div>
          </div>
        )}
      </div>

      {/* Zoom indicator */}
      {isZoomed && (
        <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          Zoom activo
        </div>
      )}
    </div>
  )
}
