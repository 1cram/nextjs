import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/navigation/main-navbar"
import TextReveal from "@/components/animations/text-reveal"
import ScrollProgress from "@/components/animations/scroll-progress"
import FadeInSection from "@/components/animations/fade-in-section"
import { getCourseById } from "@/lib/course-data"
import { Clock, Users, Target, Dumbbell, ArrowLeft } from "lucide-react"

interface CoursePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourseById(params.id)

  if (!course) {
    return {
      title: "Corso non trovato | Unika Fitness Club",
    }
  }

  return {
    title: `${course.name} | Unika Fitness Club`,
    description: course.description,
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseById(params.id)

  if (!course) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
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

  const getCategoryName = (category: string) => {
    switch (category) {
      case "functional":
        return "FUNCTIONAL"
      case "muscle-tone":
        return "MUSCLE TONE"
      case "cardio":
        return "CARDIO"
      case "postural-balance":
        return "POSTURAL BALANCE"
      default:
        return category.toUpperCase()
    }
  }

  const getIntensityColor = (intensity: string) => {
    if (intensity.includes("Bassa")) return "text-green-600"
    if (intensity.includes("Media")) return "text-yellow-600"
    if (intensity.includes("Alta")) return "text-red-600"
    return "text-gray-600"
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <MainNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <Link href="/corsi" className="inline-flex items-center text-gray-600 hover:text-unika-yellow mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna ai corsi
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(course.category)}`}
                >
                  {getCategoryName(course.category)}
                </div>
              </TextReveal>

              <TextReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.name}</h1>
              </TextReveal>

              <TextReveal delay={0.2}>
                <p className="text-lg text-gray-600 mb-8">{course.description}</p>
              </TextReveal>

              <TextReveal delay={0.3}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-unika-yellow" />
                    <div>
                      <p className="text-sm text-gray-500">Durata</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-unika-yellow" />
                    <div>
                      <p className="text-sm text-gray-500">Max partecipanti</p>
                      <p className="font-semibold">{course.maxParticipants}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-unika-yellow" />
                    <div>
                      <p className="text-sm text-gray-500">Intensità</p>
                      <p className={`font-semibold ${getIntensityColor(course.intensity)}`}>{course.intensity}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="w-5 h-5 mr-3 text-unika-yellow" />
                    <div>
                      <p className="text-sm text-gray-500">Livello</p>
                      <p className="font-semibold">Tutti i livelli</p>
                    </div>
                  </div>
                </div>
              </TextReveal>
            </div>

            <div>
              <FadeInSection direction="right">
                <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <FadeInSection direction="up">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Benefici</h3>
                <ul className="space-y-3">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-unika-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            {/* Equipment */}
            <FadeInSection direction="up" delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Attrezzature</h3>
                <ul className="space-y-3">
                  {course.equipment.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-unika-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            {/* Schedule */}
            <FadeInSection direction="up" delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Orari</h3>
                <ul className="space-y-3">
                  {course.schedule.map((time, index) => (
                    <li key={index} className="flex items-center">
                      <Clock className="w-4 h-4 mr-3 text-unika-yellow" />
                      <span className="text-gray-700">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-4xl font-semibold mb-4">Pronto a iniziare?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Prenota una lezione di prova gratuita per {course.name} e scopri se è il corso giusto per te.
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
