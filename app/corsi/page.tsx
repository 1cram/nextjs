import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/navigation/main-navbar"
import TextReveal from "@/components/animations/text-reveal"
import ScrollProgress from "@/components/animations/scroll-progress"
import FadeInSection from "@/components/animations/fade-in-section"
import { getAllCourses, getCoursesByCategory } from "@/lib/course-data"
import { Clock, Users } from "lucide-react"
import { getCategoryDisplayName, COURSE_CATEGORIES, type CategoryKey } from "@/lib/course-categories"

export const metadata: Metadata = {
  title: "Corsi | Unika Fitness Club",
  description:
    "Scopri tutti i corsi che Unika Fitness Club ha da offrirti per migliorare il tuo benessere fisico e mentale.",
}

export default async function CorsiPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const category = searchParams.category as CategoryKey | undefined

  const coursesToDisplay = category && category in COURSE_CATEGORIES ? getCoursesByCategory(category) : getAllCourses()

  const categoryDisplayName = category ? getCategoryDisplayName(category) : null

  const getCategoryColor = (courseCategory: string) => {
    switch (courseCategory) {
      case "functional":
        return "bg-green-100 text-green-800"
      case "muscle-tone":
        return "bg-blue-100 text-blue-800"
      case "cardio":
        return "bg-red-100 text-red-800"
      case "postural-balance":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <MainNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {categoryDisplayName ? `Corsi ${categoryDisplayName}` : "I Nostri Corsi"}
            </h1>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              {categoryDisplayName
                ? `Scopri tutti i corsi di ${categoryDisplayName.toLowerCase()} disponibili presso Unika Fitness Club.`
                : "Scopri tutti i corsi che Unika Fitness Club ha da offrirti per migliorare il tuo benessere fisico e mentale. Abbiamo corsi per tutti i livelli e tutte le esigenze."}
            </p>
          </TextReveal>

          {categoryDisplayName && (
            <TextReveal delay={0.2}>
              <div className="text-center">
                <Link href="/corsi">
                  <Button variant="outline" className="rounded-full bg-transparent">
                    ← Vedi Tutti i Corsi
                  </Button>
                </Link>
              </div>
            </TextReveal>
          )}
        </div>
      </section>

      {/* Sezione Corsi */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {coursesToDisplay.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">
                {categoryDisplayName
                  ? `Nessun corso ${categoryDisplayName.toLowerCase()} disponibile al momento`
                  : "Nessun corso disponibile al momento"}
              </h2>
              <p className="text-gray-600">Controlla più tardi per vedere i nostri corsi.</p>
              {categoryDisplayName && (
                <div className="mt-4">
                  <Link href="/corsi">
                    <Button className="bg-unika-yellow hover:bg-unika-yellow-hover text-unika-dark rounded-full">
                      Vedi Tutti i Corsi
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesToDisplay.map((course, index) => (
                <FadeInSection key={course.id} direction="up" delay={index * 0.1}>
                  <Link href={`/corso/${course.id}`} className="block group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100">
                      <div className="relative h-[250px] overflow-hidden">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(course.category)}`}
                        >
                          {getCategoryDisplayName(course.category as CategoryKey)}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-unika-yellow transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span>Max {course.maxParticipants} partecipanti</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-4xl font-semibold mb-4">Pronto a iniziare?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Prenota una lezione di prova gratuita e scopri quale corso fa per te.
            </p>
            <Link href="/prenota">
              <Button className="bg-unika-yellow text-unika-dark hover:bg-unika-yellow-hover rounded-full px-8 py-6 text-lg">
                Prenota una Prova Gratuita
              </Button>
            </Link>
          </TextReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-unika-dark text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-4 text-white">Unika Fitness Club</h4>
              <p className="text-gray-400 mb-4">
                Via Example 123
                <br />
                00100 Roma, Italia
              </p>
              <div className="flex items-center mb-2 text-gray-400">
                <span>+39 331 913 8064</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>unikafitnessclub@gmail.com</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Servizi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/pilates" className="hover:text-unika-yellow">
                    Pilates Reformer
                  </Link>
                </li>
                <li>
                  <Link href="/ems" className="hover:text-unika-yellow">
                    EMS Training
                  </Link>
                </li>
                <li>
                  <Link href="/corsi" className="hover:text-unika-yellow">
                    Corsi di Gruppo
                  </Link>
                </li>
                <li>
                  <Link href="/personal" className="hover:text-unika-yellow">
                    Personal Training
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Informazioni</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-unika-yellow">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/club" className="hover:text-unika-yellow">
                    Il Tuo Club
                  </Link>
                </li>
                <li>
                  <Link href="/trainers" className="hover:text-unika-yellow">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-unika-yellow">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legale</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy-policy" className="hover:text-unika-yellow">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-unika-yellow">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-unika-yellow">
                    Termini e Condizioni
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-unika-dark-lighter text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Unika Fitness Club. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
