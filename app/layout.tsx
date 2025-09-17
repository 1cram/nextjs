import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import ClientCookieProvider from "@/providers/client-cookie-provider"
import ImageDebugger from "@/components/image-debugger"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Unika Fitness Club - Trasforma il tuo corpo, migliora la tua vita",
    template: "%s | Unika Fitness Club",
  },
  description:
    "Unika Fitness Club offre corsi di gruppo specializzati: Pilates, Functional Training, Cardio, Tono Muscolare e Equilibrio Posturale. Scopri il nostro planning settimanale con oltre 15 discipline diverse.",
  keywords: [
    "fitness",
    "palestra",
    "pilates",
    "functional training",
    "zumba",
    "spinning",
    "TRX",
    "pump",
    "total body",
    "posturale",
    "HIIT",
    "strong",
    "fit-boxe",
    "walking",
    "hybrid training",
    "strength conditioning",
    "easy training",
    "workout funzionale",
    "corsi fitness",
    "personal trainer",
    "allenamento funzionale",
    "tono muscolare",
    "cardio",
    "equilibrio posturale",
    "Roma",
    "benessere",
    "salute",
    "intensità bassa",
    "intensità media",
    "intensità alta",
    "planning settimanale",
    "corsi di gruppo",
  ],
  authors: [{ name: "Unika Fitness Club" }],
  creator: "Unika Fitness Club",
  publisher: "Unika Fitness Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.unikafitnessclub.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    title: "Unika Fitness Club - Centro Fitness Specializzato a Martina Franca",
    description:
      "Scopri i nostri corsi specializzati: Functional Training, Cardio, Tono Muscolare, Equilibrio Posturale. Planning settimanale con intensità personalizzate per ogni livello.",
    siteName: "Unika Fitness Club",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unika Fitness Club - Planning settimanale corsi fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unika Fitness Club - Centro Fitness Specializzato",
    description:
      "Corsi di gruppo con planning settimanale: Functional, Cardio, Tono Muscolare, Equilibrio Posturale. Intensità per ogni livello.",
    images: ["/og-image.jpg"],
    creator: "@unikafitness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f0ff00" />
        <meta name="msapplication-TileColor" content="#f0ff00" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.unikafitnessclub.it/#organization",
              name: "Unika Fitness Club",
              alternateName: "Unika Fitness",
              url: "https://www.unikafitnessclub.it",
              logo: "https://www.unikafitnessclub.it/logo.png",
              description:
                "Centro fitness a Martina Franca specializzato in corsi di gruppo con planning settimanale: Functional Training, Cardio, Tono Muscolare, Equilibrio Posturale. Corsi con intensità personalizzate per ogni livello.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "VIALE STAZIONE I PARALLELA 26",
                addressLocality: "Martina Franca",
                postalCode: "74015",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.9028",
                longitude: "12.4964",
              },
              telephone: ["+39 080 430 4517",
              "+39 331 913 8064"],
              email: "unikafitnessclub@gmail.com",
              openingHours: [
                "Mo 07:00-22:00",
                "Tu 07:30-22:00",
                "We 07:00-22:00",
                "Th 07:30-22:00",
                "Fr 07:00-22:00",
                "Sa 08:30-18:30",
              ],
              priceRange: "€€",
              paymentAccepted: "Cash, Credit Card",
              currenciesAccepted: "EUR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servizi Fitness",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Functional Training",
                      description:
                        "Easy Training, Fitness Funzionale, TRX, Workout Funzionale, Strength & Conditioning, Hybrid Training",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tono Muscolare",
                      description: "Pump e Total Body per tonificare e scolpire il corpo",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cardio",
                      description: "Zumba, Spinning, Walking, Strong, Fit-Boxe per il benessere cardiovascolare",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Equilibrio Posturale",
                      description: "Pilates e Posturale per migliorare postura e benessere",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Personal Training",
                      description: "Allenamento personalizzato con trainer qualificati",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://www.facebook.com/unikafitness",
                "https://www.instagram.com/unikafitness",
                "https://www.youtube.com/unikafitness",
              ],
            }),
          }}
        />

        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Unika Fitness Club" />
        <meta name="twitter:site" content="@unikafitness" />
        <meta name="application-name" content="Unika Fitness Club" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://unikafitness.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientCookieProvider>
            {children}
            <Toaster />
            <ImageDebugger />
          </ClientCookieProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
