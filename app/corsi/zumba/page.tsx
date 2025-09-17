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
  title: "Zumba | Unika Fitness Club",
  description:
    "Corso di Zumba per divertirsi ballando. Fitness dance che combina movimenti di danza latina con esercizi aerobici.",
  keywords: ["zumba", "fitness dance", "danza latina", "cardio", "divertimento", "Roma"],
}

export default function ZumbaPage() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Zumba</h1>
              </TextReveal>
              <TextReveal delay={0.1}>
                <div className="flex flex-wrap gap-4 my-6">
                  <div className="flex items-center bg-unika-yellow text-unika-dark px-3 py-1 rounded-full text-sm">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Livello: Tutti i livelli</span>
                  </div>
                  <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Durata: 50 minuti</span>
                  </div>
                  <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Max 25 partecipanti</span>
                  </div>
                  <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    <span>Calorie: 400-600 kcal</span>
                  </div>
                </div>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-lg text-gray-600 mb-8">
                  Zumba è un programma di fitness che combina movimenti di danza latina e internazionale con esercizi
                  aerobici. Divertiti ballando mentre bruci calorie e tonifichi il corpo!
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
                src="/placeholder.svg?height=800&width=800&text=Zumba Dance"
                alt="Zumba"
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
                  Zumba è molto più di un semplice allenamento: è una festa! Questo programma di fitness combina ritmi
                  latini e internazionali con movimenti facili da seguire per creare un sistema di allenamento dinamico,
                  eccitante ed efficace.
                </p>
                <p>
                  Le coreografie includono elementi di salsa, merengue, cumbia, reggaeton, soca, samba, hip hop, axé,
                  tango e molto altro. Non serve saper ballare: i movimenti sono semplici e l'istruttore ti guiderà
                  passo dopo passo.
                </p>
                <p>
                  Ogni lezione è strutturata come una festa danzante dove brucerai calorie, tonificherai il corpo e
                  migliorerai la coordinazione divertendoti. È perfetto per chi vuole allenarsi senza sentire la fatica!
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
                      <span className="text-lg">Brucia molte calorie</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.2}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Migliora la coordinazione</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.3}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Riduce lo stress</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.4}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Aumenta l'autostima</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.5}>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-unika-yellow mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-lg">Divertimento garantito</span>
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
                      <span className="text-lg">Martedì: 19:00 - 19:50</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.2}>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-unika-yellow mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg">Giovedì: 20:30 - 21:20</span>
                    </li>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={0.3}>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-unika-yellow mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg">Sabato: 16:00 - 16:50</span>
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
            <h2 className="text-4xl font-semibold mb-4">Pronto a ballare e divertirti?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Unisciti alla nostra festa Zumba e scopri quanto può essere divertente allenarsi!
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
