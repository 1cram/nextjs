import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, Award, Calendar } from "lucide-react"
import MainNavbar from "@/components/navigation/main-navbar"
import TextReveal from "@/components/animations/text-reveal"
import ScrollProgress from "@/components/animations/scroll-progress"
import FadeInSection from "@/components/animations/fade-in-section"

export const metadata: Metadata = {
  title: "Spinning | Unika Fitness Club",
  description:
    "Corso di Spinning per un allenamento cardio intenso. Pedalata indoor con musica coinvolgente per bruciare calorie e migliorare la resistenza.",
  keywords: ["spinning", "indoor cycling", "cardio", "resistenza", "bike", "Roma"],
}

export default function SpinningPage() {
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Spinning</h1>
              </TextReveal>
              <TextReveal delay={0.1}>
                <div className="flex flex-wrap gap-4 my-6">
                  <div className="flex items-center bg-unika-yellow text-unika-dark px-3 py-1 rounded-full text-sm">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Livello: Intermedio/Avanzato</span>
                  </div>
                  <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Durata: 45 minuti</span>
                  </div>
                  <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Max 20 partecipanti</span>
                  </div>
                  <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <span>Calorie: 500-700 kcal</span>
                  </div>
                </div>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-lg text-gray-600 mb-8">
                  Spinning è un allenamento cardio ad alta intensità su bike stazionarie. Pedala a ritmo di musica
                  attraverso percorsi virtuali che simulano salite, discese e sprint per un workout completo.
                </p>
              </TextReveal>
              <TextReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/prenota">
                    <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6 py-2">
                      Prenota una lezione
                    </Button>
                  </Link>
                  <Link href="/contatti">
                    <Button variant="outline" className="rounded-full px-6 py-2 bg-transparent">
                      Contattaci
                    </Button>
                  </Link>
                </div>
              </TextReveal>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800&text=Spinning Bike"
                alt="Spinning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione dettagliata */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <TextReveal>
                <h2 className="text-3xl font-bold mb-8">Descrizione del Corso</h2>
              </TextReveal>
              <div className="prose prose-lg max-w-none">
                <p>
                  Lo Spinning è un programma di allenamento cardiovascolare che si svolge su bike stazionarie
                  appositamente progettate. Le lezioni sono guidate da un istruttore che ti accompagna attraverso un
                  viaggio virtuale fatto di salite, discese, sprint e recuperi.
                </p>
                <p>
                  Durante la lezione, la resistenza della bike viene regolata per simulare diversi terreni e intensità.
                  La musica energizzante ti motiva a dare il massimo, mentre l'istruttore ti guida attraverso tecniche
                  di pedalata specifiche.
                </p>
                <p>
                  È un allenamento ad alta intensità che migliora significativamente la capacità cardiovascolare, brucia
                  molte calorie e tonifica principalmente gambe e glutei. Ogni partecipante può regolare l'intensità
                  secondo le proprie capacità.
                </p>
              </div>
            </div>
            <div>
              {/* Benefici */}
              <TextReveal>
                <h2 className="text-3xl font-bold mb-8">Benefici</h2>
              </TextReveal>
              <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
                <ul className="space-y-4">
                  <FadeInSection direction="right" delay={0.1}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Migliora il sistema cardiovascolare</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.2}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Brucia molte calorie</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.3}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Tonifica gambe e glutei</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.4}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Aumenta la resistenza</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.5}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Basso impatto sulle articolazioni</span>
                    </li>
                  </FadeInSection>
                </ul>
              </div>

              {/* Orario */}
              <TextReveal>
                <h2 className="text-3xl font-bold mb-8">Orario</h2>
              </TextReveal>
              <div className="bg-[#f5f5f7] rounded-2xl p-8">
                <ul className="space-y-4">
                  <FadeInSection direction="right" delay={0.1}>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-unika-yellow mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg">Lunedì: 18:30 - 19:15</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.2}>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-unika-yellow mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg">Mercoledì: 19:30 - 20:15</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.3}>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-unika-yellow mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg">Venerdì: 18:00 - 18:45</span>
                    </li>
                  </FadeInSection>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-4xl font-semibold mb-4">Pronto per la sfida?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Sali in sella e scopri l'adrenalina dello Spinning. Un allenamento intenso che ti farà sentire più forte.
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
