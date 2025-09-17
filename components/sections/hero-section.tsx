"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  videoSrc?: string
  imageSrc?: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
}

export default function HeroSection({
  title,
  subtitle,
  videoSrc,
  imageSrc,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Autoplay del video quando è caricato
    const video = videoRef.current
    let playPromise: Promise<void> | undefined

    if (video) {
      // Wait for the video to be ready before attempting to play
      const handleCanPlay = () => {
        playPromise = video.play()
        playPromise?.catch((error) => {
          console.log("Autoplay not allowed or other error:", error)
        })
      }

      // Add event listener for canplay event
      video.addEventListener("canplay", handleCanPlay)

      // If video is already ready, try to play it
      if (video.readyState >= 3) {
        handleCanPlay()
      }

      // Cleanup function
      return () => {
        video.removeEventListener("canplay", handleCanPlay)

        // If there's a pending play promise, handle it properly
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (video.played && !video.paused) {
                video.pause()
              }
            })
            .catch(() => {
              // Ignore errors on cleanup
            })
        }
      }
    }
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("section[id]")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-unika-dark">
      {/* Video o immagine di sfondo */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          <span style={{ color: "white", backgroundColor: "rgba(0,0,0,0.8)", padding: "8px" }}>
            Il tuo browser non supporta il tag video.
          </span>
        </video>
      ) : (
        imageSrc && (
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>
        )
      )}

      {/* Overlay scuro rinforzato */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-unika-dark/60 to-unika-dark/90 z-20"></div>

      {/* Contenuto */}
      <div className="relative z-30 text-center px-4 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: "#ffffff" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: "#f3f4f6" }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href={primaryCTA.href}>
            <Button className="bg-unika-yellow hover:bg-unika-yellow-hover text-unika-dark px-8 py-6 rounded-full text-lg font-bold shadow-lg">
              {primaryCTA.text}
            </Button>
          </Link>

          <Link href={secondaryCTA.href}>
            <Button
              variant="outline"
              className="bg-unika-dark/90 backdrop-blur-sm border-2 border-unika-yellow text-unika-yellow hover:bg-unika-yellow hover:text-unika-dark px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              {secondaryCTA.text}
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Freccia scroll down */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-10 w-10 text-white drop-shadow-lg" />
      </motion.div>
    </section>
  )
}
