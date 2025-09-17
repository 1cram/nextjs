"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
  description: string
  icon: string
  courses: string[]
  link: string
}

interface CourseCategoriesProps {
  title: string
  subtitle: string
  backgroundColor?: string
  textColor?: string
}

const categories: Category[] = [
  {
    id: "functional",
    name: "FUNCTIONAL",
    description: "Movimenti funzionali per migliorare la forza, l'agilità e le performance quotidiane",
    icon: "/images/icons/functional.png",
    courses: [
      "Easy Training",
      "Fitness Funzionale",
      "TRX",
      "Workout Funzionale",
      "Strength & Conditioning",
      "Hybrid Training",
    ],
    link: "/corsi?category=functional",
  },
  {
    id: "muscle-tone",
    name: "MUSCLE TONE",
    description: "Corsi dedicati al rafforzamento e alla tonificazione muscolare per scolpire il tuo corpo",
    icon: "/images/icons/muscle-tone.png",
    courses: ["Pump", "Total Body"],
    link: "/corsi?category=muscle-tone",
  },
  {
    id: "cardio",
    name: "CARDIO",
    description: "Allenamenti cardiovascolari per migliorare la resistenza e bruciare calorie",
    icon: "/images/icons/cardio.png",
    courses: ["Zumba", "Spinning", "Walking", "Strong", "Fit-Boxe"],
    link: "/corsi?category=cardio",
  },
  {
    id: "postural-balance",
    name: "POSTURAL BALANCE",
    description: "Corsi per migliorare la postura, l'equilibrio e la consapevolezza corporea",
    icon: "/images/icons/postural-balance.png",
    courses: ["Pilates", "Posturale"],
    link: "/corsi?category=postural-balance",
  },
]

export default function CourseCategories({
  title,
  subtitle,
  backgroundColor = "white",
  textColor = "#333333",
}: CourseCategoriesProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="py-24 md:py-32" style={{ backgroundColor, color: textColor }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Link href={category.link} className="block group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                  <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="relative w-24 h-24 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={category.icon || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-unika-dark group-hover:text-unika-yellow transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {category.courses.slice(0, 3).map((course, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {course}
                          </span>
                        ))}
                        {category.courses.length > 3 && (
                          <span className="text-gray-500 text-xs px-2 py-1">+{category.courses.length - 3} altri</span>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-unika-yellow text-unika-dark hover:bg-unika-yellow hover:text-unika-dark transition-colors bg-transparent"
                    >
                      Scopri i Corsi
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/corsi">
            <Button className="bg-unika-yellow hover:bg-unika-yellow-hover text-unika-dark px-8 py-3 rounded-full font-semibold">
              Vedi Tutti i Corsi
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
