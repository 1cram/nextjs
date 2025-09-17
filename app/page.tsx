"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductShowcase from "@/components/animations/product-showcase"
import TextReveal from "@/components/animations/text-reveal"
import ScrollProgress from "@/components/animations/scroll-progress"
import MarqueeBanner from "@/components/animations/marquee-banner"
import MainNavbar from "@/components/navigation/main-navbar"
import HeroSection from "@/components/sections/hero-section"
import MapSection from "@/components/sections/map-section"
import SocialFollow from "@/components/sections/social-follow"
import AnimatedCounter from "@/components/sections/animated-counter"
import BlogSection from "@/components/sections/blog-section"
import FAQSection from "@/components/sections/faq-section"
import GallerySection from "@/components/sections/gallery-section"
import WhyChooseUs from "@/components/sections/why-choose-us"
import CourseCategories from "@/components/sections/course-categories"
import GoogleReviews from "@/components/sections/google-reviews"
import { ChevronRight } from "lucide-react"
import { useEffect, useState, useRef, useCallback, useMemo } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import {
  trainers,
  blogPosts,
  galleryImages,
  getAllTrainers,
  getAllCourses,
  getAllBlogPosts,
  getAllGalleryImages,
  type Trainer,
  type Course,
  type BlogPost as StaticBlogPost,
  type GalleryImage as StaticGalleryImage,
} from "@/lib/static-data"

// Dati statici per il fallback
import { counterItems, faqItems, whyChooseUsReasons } from "@/data/fallback-data"

// Definizione dell'interfaccia BlogPost per il componente
interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  imageSrc: string
}

// Definizione dell'interfaccia GalleryImage per la galleria
interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
}

export default function Home() {
  const [loadedCourses, setLoadedCourses] = useState<Course[]>([])
  const [loadedTrainers, setLoadedTrainers] = useState<Trainer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dataFetched, setDataFetched] = useState(false)

  // Aggiungi uno stato per le immagini della galleria
  const [loadedGalleryImages, setLoadedGalleryImages] = useState<GalleryImage[]>([])
  const [galleryError, setGalleryError] = useState(false)

  // Riferimento per tenere traccia se la sezione blog è stata visualizzata
  const blogSectionRef = useRef<HTMLElement>(null)

  // Ottieni il pathname corrente per rilevare i cambiamenti di navigazione
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const fetchData = useCallback(async () => {
    if (dataFetched) return

    try {
      setIsLoading(true)

      // Carica i corsi da dati statici
      const coursesData = await getAllCourses()
      setLoadedCourses(coursesData)

      // Carica i trainer da dati statici
      const trainersData = await getAllTrainers()
      setLoadedTrainers(trainersData)

      // Carica le immagini della galleria da dati statici
      try {
        const galleryData = await getAllGalleryImages()

        if (Array.isArray(galleryData) && galleryData.length > 0) {
          // Trasforma i dati nel formato richiesto da GallerySection
          const formattedGalleryImages = galleryData.map((image: StaticGalleryImage) => ({
            id: image.slug || String(image.id),
            src: image.featured_image_url || "/placeholder.svg?height=600&width=600&text=Galleria",
            alt: image.title?.rendered || "Immagine galleria",
            category: image.acf?.category || "Struttura",
          }))

          setLoadedGalleryImages(formattedGalleryImages)
          setGalleryError(false)
        } else {
          console.log("No gallery images found, using fallback")
          setLoadedGalleryImages([])
          setGalleryError(true)
        }
      } catch (galleryError) {
        console.error("Errore nel caricamento delle immagini della galleria:", galleryError)
        setLoadedGalleryImages([])
        setGalleryError(true)
      }

      setDataFetched(true)
    } catch (error) {
      console.error("Errore nel caricamento dei dati:", error)
    } finally {
      setIsLoading(false)
    }
  }, [dataFetched])

  // Carica i post del blog
  const [loadedBlogPosts, setLoadedBlogPosts] = useState<BlogPost[]>([])
  const [blogLoading, setBlogLoading] = useState(true)
  const [blogError, setBlogError] = useState(false)

  // Carica i dati all'avvio e quando cambia il pathname
  useEffect(() => {
    fetchData()

    // Controlla se c'è un hash nell'URL e se corrisponde alla sezione blog
    if (window.location.hash === "#blog") {
      // Scorri alla sezione blog
      setTimeout(() => {
        const blogSection = document.getElementById("blog")
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname, searchParams, fetchData])

  // Aggiungi un observer per rilevare quando la sezione blog diventa visibile
  useEffect(() => {
    if (!blogSectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !dataFetched) {
            // La sezione blog è visibile, ricarica i dati solo se non sono già stati caricati
            fetchData()
          }
        })
      },
      { threshold: 0.1 }, // Attiva quando almeno il 10% della sezione è visibile
    )

    observer.observe(blogSectionRef.current)

    return () => {
      if (blogSectionRef.current) {
        observer.unobserve(blogSectionRef.current)
      }
    }
  }, [fetchData, dataFetched])

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setBlogLoading(true)
        const data = await getAllBlogPosts(1, 3)

        if (data && data.posts && Array.isArray(data.posts)) {
          const formattedPosts = data.posts.map((post: StaticBlogPost) => ({
            id: post.slug,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
            date: new Date(post.date).toLocaleDateString("it-IT"),
            author: post.author_name || "Staff",
            category: post.category_names?.[0] || "Blog",
            imageSrc: post.featured_image_url || "/placeholder.svg?height=400&width=600&text=Blog",
          }))
          setLoadedBlogPosts(formattedPosts)
          setBlogError(false)
        } else {
          console.error("Formato dati blog non valido:", data)
          setBlogError(true)
        }
      } catch (error) {
        console.error("Errore nel caricamento dei post del blog:", error)
        setBlogError(true)
      } finally {
        setBlogLoading(false)
      }
    }

    fetchBlogPosts()

    // Aggiungiamo un listener per il cambio di route
    const handleRouteChange = () => {
      // Ricarica i post del blog quando l'utente torna alla home
      fetchBlogPosts()
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const trainerItems = loadedTrainers.map((trainer) => {
    return {
      image: trainer.featured_image_url || `/placeholder.svg?height=200&width=200&text=${trainer.title.rendered}`,
      alt: `${trainer.title.rendered} - ${trainer.acf.role || "Trainer"}`,
      width: 200,
      height: 200,
      link: `/trainers/${trainer.slug}`,
    }
  })

  const formattedCourses = loadedCourses.map((course) => {
    const benefits = course.acf.benefits ? course.acf.benefits.split("\n").filter((b) => b.trim()) : []

    return {
      title: course.title.rendered,
      description: course.excerpt.rendered.replace(/<[^>]*>/g, ""),
      imageSrc: course.featured_image_url || "/placeholder.svg?height=400&width=300&text=Corso",
      link: `/corsi/${course.slug}`,
      level: course.acf.level,
      benefits: benefits,
    }
  })

  // Estrai le categorie uniche dalle immagini della galleria
  const galleryCategories = useMemo(() => {
    const categories = new Set<string>()
    categories.add("Tutti")

    loadedGalleryImages.forEach((image) => {
      if (image.category) {
        categories.add(image.category)
      }
    })

    return Array.from(categories)
  }, [loadedGalleryImages])

  const fallbackTrainerItems = trainers.map((trainer) => ({
    image: trainer.featured_image_url,
    alt: `${trainer.title.rendered} - ${trainer.acf.role}`,
    width: 200,
    height: 200,
    link: `/trainers/${trainer.slug}`,
  }))

  const fallbackBlogPosts = blogPosts.slice(0, 3).map((post) => ({
    id: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
    date: new Date(post.date).toLocaleDateString("it-IT"),
    author: post.author_name,
    category: post.category_names[0] || "Blog",
    imageSrc: post.featured_image_url,
  }))

  const fallbackGalleryImages = galleryImages.map((image) => ({
    id: image.slug,
    src: image.featured_image_url,
    alt: image.title.rendered,
    category: image.acf.category,
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Barra di progresso dello scroll */}
      <ScrollProgress color="#f0ff00" />

      {/* Navigazione principale */}
      <MainNavbar />

      {/* Hero Section con video/immagine a schermo intero */}
      <HeroSection
        title="Benvenuto in UNIKA – Allenati al massimo"
        subtitle="Trasforma il tuo corpo, migliora la tua vita con i nostri programmi di allenamento personalizzati"
        videoSrc="/placeholder.svg" // Sostituire con un video reale
        imageSrc="/placeholder.svg?height=1080&width=1920&text=Fitness"
        primaryCTA={{ text: "Prova gratis", href: "#prenota" }}
        secondaryCTA={{ text: "Scopri i corsi", href: "#corsi" }}
      />

      {/* Sezione Perché Sceglierci */}
      <WhyChooseUs
        title="Perché Scegliere Unika"
        subtitle="Scopri cosa rende Unika Fitness Club la scelta migliore per il tuo benessere"
        reasons={whyChooseUsReasons}
      />

      {/* Sezione Chi Siamo */}
      <section id="chi-siamo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-unika-dark">Chi Siamo</h2>
          </TextReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal>
                <p className="text-lg text-unika-dark-lighter mb-6">
                  Unika Fitness Club è un centro fitness all'avanguardia, progettato per offrirti un'esperienza di
                  allenamento unica e personalizzata. Il nostro team di professionisti qualificati è pronto ad
                  accompagnarti nel tuo percorso verso il benessere.
                </p>
                <p className="text-lg text-unika-dark-lighter mb-6">
                  Offriamo una vasta gamma di servizi, dal Pilates Reformer all'HIIT Training, dai corsi di gruppo al
                  personal training, per soddisfare le esigenze di tutti i nostri clienti.
                </p>
                <p className="text-lg text-unika-dark-lighter">
                  La nostra missione è aiutarti a raggiungere i tuoi obiettivi di fitness in un ambiente accogliente e
                  motivante, con attrezzature di ultima generazione e programmi personalizzati.
                </p>
              </TextReveal>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=800&text=Unika Team"
                alt="Unika Fitness Club Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contatore animato */}
      <AnimatedCounter
        title="I Nostri Numeri"
        subtitle="Scopri perché siamo il club fitness preferito nella tua zona"
        items={counterItems}
      />

      {/* Sezione Google Reviews */}
      <GoogleReviews />

      {/* Banner scorrevole dei trainer */}
      <section className="py-12 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4">
          <TextReveal>
            <h2 className="text-2xl font-semibold text-center mb-8 text-unika-dark">I Nostri Trainer</h2>
          </TextReveal>
          <p className="text-center text-unika-dark-lighter max-w-2xl mx-auto mb-8">
            Scopri il nostro team di professionisti qualificati, pronti ad accompagnarti nel tuo percorso fitness.
            Clicca sulle immagini per conoscere meglio i nostri trainer.
          </p>
          <MarqueeBanner
            items={isLoading || trainerItems.length === 0 ? fallbackTrainerItems : trainerItems}
            speed={30}
            direction="left"
            className="py-4"
          />

          <div className="text-center mt-8">
            <Link
              href="/trainers"
              className="inline-flex items-center text-unika-yellow font-medium hover:text-unika-yellow-hover transition-colors"
            >
              Scopri tutto il team
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Griglia di corsi con card girevoli */}
      <section id="corsi">
        <CourseCategories
          title="I Nostri Corsi"
          subtitle="Scegli la categoria di allenamento più adatta ai tuoi obiettivi e scopri tutti i corsi disponibili"
          backgroundColor="white"
          textColor="#333333"
        />
      </section>

      {/* Showcase del prodotto - Pilates */}
      <ProductShowcase
        title="Pilates Reformer"
        description="Il Pilates Reformer è un metodo di allenamento che utilizza una macchina speciale per migliorare la forza, la flessibilità e la postura."
        features={[
          "Lezioni adatte a tutti i livelli",
          "Istruttori certificati e qualificati",
          "Attrezzature di ultima generazione",
          "Risultati visibili in poche settimane",
        ]}
        imageSrc="/placeholder.svg?height=800&width=800&text=Pilates"
        imageAlt="Pilates Reformer"
        backgroundColor="#ffffff"
        textColor="#333333"
        imagePosition="right"
      />

      <ProductShowcase
        title="HIIT Training"
        description="L'HIIT Training alterna brevi periodi di esercizio ad alta intensità a periodi di recupero. Ottieni risultati straordinari in tempi ridotti."
        features={[
          "Sessioni di 30 minuti ad alta intensità",
          "Allenamento completo del corpo",
          "Adatto a livelli intermedio-avanzato",
          "Effetto afterburn per ore dopo l'allenamento",
        ]}
        imageSrc="/placeholder.svg?height=800&width=800&text=HIIT"
        imageAlt="HIIT Training"
        backgroundColor="#f5f5f5"
        textColor="#333333"
        imagePosition="left"
      />

      {/* Sezione Galleria */}
      <GallerySection
        title="La Nostra Galleria"
        subtitle="Scopri i nostri spazi, le nostre attrezzature e le nostre attività"
        images={loadedGalleryImages.length > 0 ? loadedGalleryImages : fallbackGalleryImages}
        categories={galleryCategories}
      />

      {/* Sezione Blog */}
      <section id="blog" ref={blogSectionRef}>
        <BlogSection
          title="Il Nostro Blog"
          subtitle="Articoli, consigli e novità dal mondo del fitness e del benessere"
          posts={loadedBlogPosts.length > 0 ? loadedBlogPosts : fallbackBlogPosts}
          isLoading={blogLoading}
          hasError={blogError}
        />
      </section>

      {/* Sezione FAQ */}
      <FAQSection
        title="Domande Frequenti"
        subtitle="Trova le risposte alle domande più comuni sul nostro club e i nostri servizi"
        faqs={faqItems}
      />

      {/* Sezione Prenota */}
      <section id="prenota" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-unika-dark">Pronto a Iniziare?</h2>
            <p className="text-lg text-unika-dark-lighter mb-8 max-w-3xl mx-auto">
              Prenota una prova gratuita oggi stesso e inizia il tuo percorso verso un corpo più sano e una vita
              migliore. Compila il modulo sottostante e ti contatteremo al più presto.
            </p>
          </TextReveal>

          <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl mx-auto border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-unika-dark mb-1 text-left">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-unika-yellow focus:border-unika-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-unika-dark mb-1 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-unika-yellow focus:border-unika-yellow"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-unika-dark mb-1 text-left">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-unika-yellow focus:border-unika-yellow"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-unika-dark mb-1 text-left">
                  Servizio di interesse
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-unika-yellow focus:border-unika-yellow"
                  required
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="pilates">Pilates Reformer</option>
                  <option value="hiit">HIIT Training</option>
                  <option value="group">Corsi di Gruppo</option>
                  <option value="personal">Personal Training</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-unika-dark mb-1 text-left">
                  Messaggio (opzionale)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-unika-yellow focus:border-unika-yellow"
                ></textarea>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-unika-yellow hover:bg-unika-yellow-hover text-unika-dark py-3 rounded-lg font-bold"
                >
                  Prenota una Prova Gratuita
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Sezione Mappa e Contatti */}
      <MapSection
        title="Dove Trovarci"
        address="Via Example 123, 00100 Roma, Italia"
        phone="+39 331 913 8064"
        email="unikafitnessclub@gmail.com"
        hours={["Lunedì - Venerdì: 7:00 - 22:00", "Sabato: 9:00 - 18:00", "Domenica: 9:00 - 13:00"]}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371422!2d12.4922309!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzEwLjAiTiAxMsKwMjknMzIuMCJF!5e0!3m2!1sit!2sit!4v1650000000000!5m2!1sit!2sit"
      />

      {/* Sezione Social Follow */}
      <SocialFollow
        title="Seguici sui Social"
        subtitle="Resta aggiornato sulle nostre attività, promozioni e consigli di fitness seguendoci sui social media"
        socials={[
          { platform: "facebook", url: "https://facebook.com/unikafitness", username: "unikafitness" },
          { platform: "instagram", url: "https://instagram.com/unikafitness", username: "unikafitness" },
          { platform: "youtube", url: "https://youtube.com/unikafitness", username: "UnikaFitness" },
        ]}
      />

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
                  <Link href="/hiit" className="hover:text-unika-yellow">
                    HIIT Training
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
                  <Link href="#chi-siamo" className="hover:text-unika-yellow">
                    Chi Siamo
                  </Link>
                </li>
                <li>
                  <Link href="#orari" className="hover:text-unika-yellow">
                    Orari
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-unika-yellow">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-unika-yellow">
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
