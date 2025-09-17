export const IMAGE_PATHS = {
  trainers: "/images/trainers",
  courses: "/images/courses",
  gallery: "/images/gallery",
  blog: "/images/blog",
  logos: "/images/logos",
  equipment: "/images/equipment",
  testimonials: "/images/testimonials",
  backgrounds: "/images/backgrounds",
} as const

export type ImageCategory = keyof typeof IMAGE_PATHS

// Helper functions for image paths
export function getTrainerImage(slug: string): string {
  return `${IMAGE_PATHS.trainers}/${slug}.webp`
}

export function getCourseImage(slug: string): string {
  return `${IMAGE_PATHS.courses}/${slug}.webp`
}

export function getGalleryImage(filename: string): string {
  return `${IMAGE_PATHS.gallery}/${filename}.webp`
}

export function getBlogImage(slug: string): string {
  return `${IMAGE_PATHS.blog}/${slug}.webp`
}

export function getLogoImage(variant: "main" | "white" | "dark" | "icon"): string {
  return `${IMAGE_PATHS.logos}/unika-${variant}.svg`
}

export function getEquipmentImage(name: string): string {
  return `${IMAGE_PATHS.equipment}/${name}.webp`
}

// Fallback image generator
export function getFallbackImage(width = 400, height = 300, text = "Unika Fitness"): string {
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`
}

// Image validation
export function isValidImagePath(path: string): boolean {
  return path.startsWith("/images/") || path.startsWith("/placeholder.svg")
}
