"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNavbar from "@/components/navigation/main-navbar"
import TextReveal from "@/components/animations/text-reveal"
import ScrollProgress from "@/components/animations/scroll-progress"
import FadeInSection from "@/components/animations/fade-in-section"
import { Calendar, Clock, Award, ArrowLeft } from "lucide-react"
import type { Trainer } from "@/lib/static-data"
import { getFormattedSchedule, textAreaToArray } from "@/lib/static-data"

interface TrainerDetailPageProps {
  trainer: Trainer
}

export default function TrainerDetailPage({ trainer }: TrainerDetailPageProps) {
  const schedule = getFormattedSchedule(trainer)
  const specialties = textAreaToArray(trainer.acf.specialties)
  const certifications = textAreaToArray(trainer.acf.certifications)

  // Funzione per estrarre il testo puro dall'HTML
  const stripHtml = (html: string): string => {
    if (!html) return ""

    if (typeof window !== "undefined") {
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent || ""
    }

    // Fallback semplice per il server
    return html.replace(/<[^>]*>?/gm, "")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra di progresso dello scroll */}
      <ScrollProgress />

      {/* Navigazione principale */}
      <MainNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/trainers"
              className="inline-flex items-center text-gray-600 hover:text-unika-yellow transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna ai Trainer
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={trainer.featured_image_url || "/placeholder.svg"}
                  alt={trainer.title.rendered}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div>
                <TextReveal>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{trainer.title.rendered}</h1>
                </TextReveal>
                <TextReveal delay={0.1}>
                  <p className="text-xl text-unika-yellow mb-6">{trainer.acf.role}</p>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                    <p>{stripHtml(trainer.content.rendered)}</p>
                  </div>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <Link href="/prenota">
                    <Button className="bg-unika-yellow text-unika-dark hover:bg-unika-yellow-hover rounded-full px-8 py-6 text-lg">
                      Prenota una Sessione
                    </Button>
                  </Link>
                </TextReveal>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Specializzazioni */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Specializzazioni</h2>
          </TextReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <FadeInSection key={index} direction="up" delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-unika-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-unika-dark" />
                    </div>
                    <h3 className="text-lg font-semibold">{specialty}</h3>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificazioni e Orari */}
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certificazioni */}
            <FadeInSection direction="left">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-unika-yellow mr-3" />
                    <h3 className="text-2xl font-bold">Certificazioni</h3>
                  </div>
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-unika-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>

            {/* Orari */}
            <FadeInSection direction="right">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-unika-yellow mr-3" />
                    <h3 className="text-2xl font-bold">Orari di Disponibilità</h3>
                  </div>
                  {schedule.length > 0 ? (
                    <div className="space-y-4">
                      {schedule.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0"
                        >
                          <span className="font-medium text-gray-700">{item.day}</span>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">Contattaci per conoscere gli orari di disponibilità.</p>
                  )}
                </CardContent>
              </Card>
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
              Prenota una sessione con {trainer.title.rendered} e inizia il tuo percorso verso il benessere.
            </p>
            <Link href="/prenota">
              <Button className="bg-unika-yellow text-unika-dark hover:bg-unika-yellow-hover rounded-full px-8 py-6 text-lg">
                Prenota Ora
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
                  <Link href="/blog" className="hover:text-unika-yellow">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-unika-yellow">
                    F.A.Q.
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
