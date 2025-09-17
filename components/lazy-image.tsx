"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { OptimizedImage } from "./optimized-image"
import { cn } from "@/lib/utils"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  threshold?: number
  rootMargin?: string
  placeholder?: React.ReactNode
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  threshold = 0.1,
  rootMargin = "50px",
  placeholder,
  ...props
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const defaultPlaceholder = (
    <div className={cn("bg-muted animate-pulse flex items-center justify-center", className)} style={{ width, height }}>
      <span className="text-muted-foreground text-sm">Caricamento...</span>
    </div>
  )

  return (
    <div ref={imgRef} className={className}>
      {isInView ? (
        <OptimizedImage
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      ) : (
        placeholder || defaultPlaceholder
      )}
    </div>
  )
}
