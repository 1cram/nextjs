export const COURSE_CATEGORIES = {
  "muscle-tone": "MUSCLE TONE",
  cardio: "CARDIO",
  functional: "FUNCTIONAL",
  "postural-balance": "POSTURAL BALANCE",
} as const

export type CategoryKey = keyof typeof COURSE_CATEGORIES

export const ALL_COURSES = {
  functional: [
    "Easy Training",
    "Fitness Funzionale",
    "TRX",
    "Workout Funzionale",
    "Strength & Conditioning",
    "Hybrid Training",
    "HIIT Training", // existing course
  ],
  "muscle-tone": ["Pump", "Total Body"],
  cardio: ["Zumba", "Spinning", "Walking", "Strong", "Fit-Boxe"],
  "postural-balance": [
    "Pilates",
    "Posturale",
    "Pilates Reformer", // existing course
  ],
} as const

export function getCourseCategory(courseName: string): CategoryKey | null {
  const name = courseName.toLowerCase()

  // Check each category for exact matches first
  for (const [categoryKey, courses] of Object.entries(ALL_COURSES)) {
    if (courses.some((course) => course.toLowerCase() === name)) {
      return categoryKey as CategoryKey
    }
  }

  // Fallback to keyword matching for WordPress courses not in our static list
  if (
    name.includes("hiit") ||
    name.includes("strength") ||
    name.includes("tone") ||
    name.includes("sculpt") ||
    name.includes("pump") ||
    name.includes("total body")
  ) {
    return "muscle-tone"
  }

  if (
    name.includes("pilates") ||
    name.includes("yoga") ||
    name.includes("posture") ||
    name.includes("balance") ||
    name.includes("posturale")
  ) {
    return "postural-balance"
  }

  if (
    name.includes("cardio") ||
    name.includes("aerobic") ||
    name.includes("spinning") ||
    name.includes("dance") ||
    name.includes("zumba") ||
    name.includes("walking") ||
    name.includes("strong") ||
    name.includes("fit-boxe") ||
    name.includes("boxe")
  ) {
    return "cardio"
  }

  if (
    name.includes("functional") ||
    name.includes("crossfit") ||
    name.includes("circuit") ||
    name.includes("bootcamp") ||
    name.includes("trx") ||
    name.includes("workout") ||
    name.includes("conditioning") ||
    name.includes("hybrid") ||
    name.includes("easy training")
  ) {
    return "functional"
  }

  return null
}

export function getCoursesForCategory(categoryKey: CategoryKey): string[] {
  return ALL_COURSES[categoryKey] || []
}

export function getAllStaticCourses(): Array<{ name: string; category: CategoryKey }> {
  const allCourses: Array<{ name: string; category: CategoryKey }> = []

  for (const [categoryKey, courses] of Object.entries(ALL_COURSES)) {
    courses.forEach((courseName) => {
      allCourses.push({
        name: courseName,
        category: categoryKey as CategoryKey,
      })
    })
  }

  return allCourses
}

// Get display name for category
export function getCategoryDisplayName(categoryKey: CategoryKey): string {
  return COURSE_CATEGORIES[categoryKey]
}

// Filter courses by category
export function filterCoursesByCategory<T extends { title: { rendered: string } }>(
  courses: T[],
  category: CategoryKey | null,
): T[] {
  if (!category) return courses

  return courses.filter((course) => {
    const courseCategory = getCourseCategory(course.title.rendered)
    return courseCategory === category
  })
}
