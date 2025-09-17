"use client"
import { useState, useEffect } from "react"
import { ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextReveal from "@/components/animations/text-reveal"

interface GoogleReviewsSectionProps {
  title?: string
  subtitle?: string
  className?: string
}

const sampleReviews = [
  {
    id: 1,
    name: "Maria Rossi",
    rating: 5,
    text: "Esperienza fantastica! I trainer sono molto professionali e l'ambiente è accogliente. Ho raggiunto i miei obiettivi in poco tempo.",
    date: "2 settimane fa",
    avatar: "/placeholder.svg?height=50&width=50&text=MR",
  },
  {
    id: 2,
    name: "Giuseppe Bianchi",
    rating: 5,
    text: "Palestra moderna con attrezzature all'avanguardia. I corsi di gruppo sono fantastici e il personale sempre disponibile.",
    date: "1 mese fa",
    avatar: "/placeholder.svg?height=50&width=50&text=GB",
  },
  {
    id: 3,
    name: "Anna Verdi",
    rating: 5,
    text: "Unika è il posto perfetto per allenarsi! Atmosfera motivante e risultati garantiti. Consiglio vivamente!",
    date: "3 settimane fa",
    avatar: "/placeholder.svg?height=50&width=50&text=AV",
  },
  {
    id: 4,
    name: "Marco Ferrari",
    rating: 5,
    text: "Ottima palestra con trainer qualificati. I corsi funzionali sono impegnativi ma molto efficaci. Ambiente pulito e organizzato.",
    date: "1 settimana fa",
    avatar: "/placeholder.svg?height=50&width=50&text=MF",
  },
  {
    id: 5,
    name: "Lucia Conti",
    rating: 5,
    text: "Sono molto soddisfatta dei risultati ottenuti. Lo staff è competente e sempre pronto ad aiutare. Struttura moderna e ben curata.",
    date: "2 mesi fa",
    avatar: "/placeholder.svg?height=50&width=50&text=LC",
  },
]

export default function GoogleReviewsSection({
  title = "Cosa Dicono i Nostri Clienti",
  subtitle = "Le recensioni Google dei nostri membri soddisfatti",
  className = "",
}: GoogleReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sampleReviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % sampleReviews.length)
    setIsAutoPlaying(false)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + sampleReviews.length) % sampleReviews.length)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-unika-dark mb-4">{title}</h2>
            <p className="text-lg text-unika-dark-lighter max-w-2xl mx-auto mb-8">{subtitle}</p>
          </TextReveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Recensione precedente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex space-x-2">
                {sampleReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-unika-yellow" : "bg-gray-300"
                    }`}
                    aria-label={`Vai alla recensione ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Recensione successiva"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={sampleReviews[currentIndex].avatar || "/placeholder.svg"}
                  alt={sampleReviews[currentIndex].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-unika-dark">{sampleReviews[currentIndex].name}</h4>
                  <div className="flex items-center justify-center">
                    {renderStars(sampleReviews[currentIndex].rating)}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">"{sampleReviews[currentIndex].text}"</p>

              <p className="text-sm text-gray-500">{sampleReviews[currentIndex].date}</p>
            </div>
          </div>

          {/* Google Reviews Summary */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <div className="flex items-center mr-4">{renderStars(5)}</div>
              <span className="text-sm text-gray-600">
                <strong>4.9</strong> su Google Reviews (50+ recensioni)
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-unika-dark-lighter mb-6">
            Vuoi lasciare anche tu una recensione? Condividi la tua esperienza!
          </p>
          <Button
            asChild
            className="bg-unika-yellow hover:bg-unika-yellow-hover text-unika-dark font-semibold px-8 py-3"
          >
            <a
              href="https://www.google.com/search?q=Unika+Fitness+Club+Martina+Franca+recensioni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Lascia una Recensione su Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Unika Fitness Club",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Martina Franca",
                addressCountry: "IT",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
              },
              review: sampleReviews.map((review) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: review.name,
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: review.rating,
                },
                reviewBody: review.text,
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
