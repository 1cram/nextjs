"use client"

import { useState, useEffect } from "react"

interface UseImageLoaderProps {
  src: string
  fallbackSrc?: string
}

interface ImageLoaderState {
  src: string
  isLoading: boolean
  hasError: boolean
  isLoaded: boolean
}

export function useImageLoader({ src, fallbackSrc }: UseImageLoaderProps): ImageLoaderState {
  const [state, setState] = useState<ImageLoaderState>({
    src,
    isLoading: true,
    hasError: false,
    isLoaded: false,
  })

  useEffect(() => {
    if (!src) {
      setState((prev) => ({
        ...prev,
        hasError: true,
        isLoading: false,
        src: fallbackSrc || "/placeholder.svg",
      }))
      return
    }

    setState((prev) => ({ ...prev, isLoading: true, hasError: false, isLoaded: false }))

    const img = new Image()

    img.onload = () => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isLoaded: true,
        hasError: false,
      }))
    }

    img.onerror = () => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        hasError: true,
        isLoaded: false,
        src: fallbackSrc || "/placeholder.svg",
      }))
    }

    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, fallbackSrc])

  return state
}
