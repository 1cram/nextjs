import { IMAGE_PATHS } from "./image-paths"

export interface ImageMetadata {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
  category?: string
}

// Generate responsive srcSet
export function generateSrcSet(baseSrc: string, sizes: number[]): string {
  return sizes.map((size) => `${baseSrc}?w=${size} ${size}w`).join(", ")
}

// Generate blur data URL for placeholder
export function generateBlurDataURL(width = 10, height = 10): string {
  const canvas = typeof window !== "undefined" ? document.createElement("canvas") : null
  if (!canvas) return ""

  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")
  if (!ctx) return ""

  ctx.fillStyle = "#f3f4f6"
  ctx.fillRect(0, 0, width, height)

  return canvas.toDataURL()
}

// Validate image URL
export function isValidImageUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url, window.location.origin)
    return parsedUrl.pathname.match(/\.(jpg|jpeg|png|webp|avif|svg)$/i) !== null
  } catch {
    return false
  }
}

// Get optimized image URL with parameters
export function getOptimizedImageUrl(
  src: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: "webp" | "avif" | "jpg" | "png"
  } = {},
): string {
  if (!src || src.startsWith("/placeholder.svg")) return src

  const params = new URLSearchParams()
  if (options.width) params.set("w", options.width.toString())
  if (options.height) params.set("h", options.height.toString())
  if (options.quality) params.set("q", options.quality.toString())
  if (options.format) params.set("f", options.format)

  const separator = src.includes("?") ? "&" : "?"
  return `${src}${separator}${params.toString()}`
}

// Create image metadata for different categories
export function createImageMetadata(
  filename: string,
  category: keyof typeof IMAGE_PATHS,
  alt: string,
  options: Partial<ImageMetadata> = {},
): ImageMetadata {
  const basePath = IMAGE_PATHS[category]
  const extension = filename.includes(".") ? "" : ".webp"

  return {
    src: `${basePath}/${filename}${extension}`,
    alt,
    width: 800,
    height: 600,
    ...options,
  }
}

// Batch create image metadata
export function createImageBatch(
  filenames: string[],
  category: keyof typeof IMAGE_PATHS,
  altPrefix = "",
): ImageMetadata[] {
  return filenames.map((filename, index) => createImageMetadata(filename, category, `${altPrefix} ${index + 1}`.trim()))
}
