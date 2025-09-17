"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const searchData = [
  // Pages
  { id: "home", title: "Home", type: "page", url: "/", description: "Pagina principale di Unika Fitness Club" },
  { id: "corsi", title: "Corsi", type: "page", url: "/corsi", description: "Tutti i nostri corsi fitness" },
  { id: "trainers", title: "Team", type: "page", url: "/trainers", description: "I nostri trainer qualificati" },
  { id: "contatti", title: "Contatti", type: "page", url: "/contatti", description: "Come raggiungerci e contattarci" },

  // Courses - Functional
  {
    id: "easy-training",
    title: "Easy Training",
    type: "corso",
    url: "/corso/easy-training",
    description: "Allenamento funzionale per principianti",
    category: "Functional",
    intensity: "Bassa",
  },
  {
    id: "fitness-funzionale",
    title: "Fitness Funzionale",
    type: "corso",
    url: "/corso/fitness-funzionale",
    description: "Movimenti della vita quotidiana",
    category: "Functional",
    intensity: "Media",
  },
  {
    id: "trx",
    title: "TRX",
    type: "corso",
    url: "/corso/trx",
    description: "Allenamento in sospensione",
    category: "Functional",
    intensity: "Media",
  },
  {
    id: "workout-funzionale",
    title: "Workout Funzionale",
    type: "corso",
    url: "/corso/workout-funzionale",
    description: "Allenamento funzionale intenso",
    category: "Functional",
    intensity: "Alta",
  },
  {
    id: "strength-conditioning",
    title: "Strength & Conditioning",
    type: "corso",
    url: "/corso/strength-conditioning",
    description: "Forza e condizionamento atletico",
    category: "Functional",
    intensity: "Alta",
  },
  {
    id: "hybrid-training",
    title: "Hybrid Training",
    type: "corso",
    url: "/corso/hybrid-training",
    description: "Combinazione di allenamenti",
    category: "Functional",
    intensity: "Alta",
  },

  // Courses - Muscle Tone
  {
    id: "pump",
    title: "Pump",
    type: "corso",
    url: "/corso/pump",
    description: "Allenamento con bilanciere",
    category: "Tono Muscolare",
    intensity: "Media-Alta",
  },
  {
    id: "total-body",
    title: "Total Body",
    type: "corso",
    url: "/corso/total-body",
    description: "Tonificazione completa",
    category: "Tono Muscolare",
    intensity: "Media",
  },

  // Courses - Cardio
  {
    id: "zumba",
    title: "Zumba",
    type: "corso",
    url: "/corso/zumba",
    description: "Danza fitness latina",
    category: "Cardio",
    intensity: "Media",
  },
  {
    id: "spinning",
    title: "Spinning",
    type: "corso",
    url: "/corso/spinning",
    description: "Allenamento su bike",
    category: "Cardio",
    intensity: "Media",
  },
  {
    id: "walking",
    title: "Walking",
    type: "corso",
    url: "/corso/walking",
    description: "Camminata veloce",
    category: "Cardio",
    intensity: "Bassa-Media",
  },
  {
    id: "strong",
    title: "Strong",
    type: "corso",
    url: "/corso/strong",
    description: "HIIT con musica sincronizzata",
    category: "Cardio",
    intensity: "Alta",
  },
  {
    id: "fit-boxe",
    title: "Fit-Boxe",
    type: "corso",
    url: "/corso/fit-boxe",
    description: "Boxe fitness",
    category: "Cardio",
    intensity: "Alta",
  },

  // Courses - Postural Balance
  {
    id: "pilates",
    title: "Pilates",
    type: "corso",
    url: "/corso/pilates",
    description: "Metodo Pilates classico",
    category: "Equilibrio Posturale",
    intensity: "Bassa-Media",
  },
  {
    id: "pilates-reformer",
    title: "Pilates Reformer",
    type: "corso",
    url: "/corso/pilates-reformer",
    description: "Pilates con macchina Reformer",
    category: "Equilibrio Posturale",
    intensity: "Media",
  },
  {
    id: "posturale",
    title: "Posturale",
    type: "corso",
    url: "/corso/posturale",
    description: "Ginnastica correttiva",
    category: "Equilibrio Posturale",
    intensity: "Bassa",
  },
  {
    id: "hiit-training",
    title: "HIIT Training",
    type: "corso",
    url: "/corso/hiit-training",
    description: "Allenamento ad intervalli",
    category: "Functional",
    intensity: "Molto Alta",
  },

  // Trainers
  {
    id: "cristina-chisena",
    title: "Dott.ssa Cristina Chisena",
    type: "trainer",
    url: "/trainer/cristina-chisena",
    description: "Personal Trainer, Zumba, Strong",
  },
  {
    id: "martino-salamina",
    title: "Martino Salamina",
    type: "trainer",
    url: "/trainer/martino-salamina",
    description: "Performance Trainer, Cycling",
  },
  {
    id: "vito-curlo",
    title: "Dott. Vito Curlo",
    type: "trainer",
    url: "/trainer/vito-curlo",
    description: "Personal Trainer, Body Recomposition",
  },
  {
    id: "stefano-turnone",
    title: "Dott. Stefano Turnone",
    type: "trainer",
    url: "/trainer/stefano-turnone",
    description: "Personal Trainer, Powerlifting",
  },
  {
    id: "grazia-sanarica",
    title: "Dott.ssa Grazia Sanarica",
    type: "trainer",
    url: "/trainer/grazia-sanarica",
    description: "Group Fitness, Functional Training",
  },
  {
    id: "oronzo-bagorda",
    title: "Dott. Oronzo Bagorda",
    type: "trainer",
    url: "/trainer/oronzo-bagorda",
    description: "Direttore, TRX, Les Mills",
  },
  {
    id: "antonello-di-giuseppe",
    title: "Dott. Antonello Di Giuseppe",
    type: "trainer",
    url: "/trainer/antonello-di-giuseppe",
    description: "Coach Pilates, Holistic Training",
  },
  {
    id: "michele-conserva",
    title: "Dott. Michele Conserva",
    type: "trainer",
    url: "/trainer/michele-conserva",
    description: "Bodybuilding, Athletic Preparation",
  },
  {
    id: "federica-gallo",
    title: "Dott.ssa Federica Gallo",
    type: "trainer",
    url: "/trainer/federica-gallo",
    description: "Kinesiologist, Anti-aging Training",
  },
  {
    id: "giuseppe-marangi",
    title: "Dott. Giuseppe Marangi",
    type: "trainer",
    url: "/trainer/giuseppe-marangi",
    description: "Posturologist, Preventive Activities",
  },
  {
    id: "sonja-sanarico",
    title: "Sonja Sanarico",
    type: "trainer",
    url: "/trainer/sonja-sanarico",
    description: "Pole Dance Specialist",
  },
  {
    id: "morena-lucarelli",
    title: "Morena Lucarelli",
    type: "trainer",
    url: "/trainer/morena-lucarelli",
    description: "Fitness Trainer",
  },
  {
    id: "marcello-massafra",
    title: "Marcello Massafra",
    type: "trainer",
    url: "/trainer/marcello-massafra",
    description: "Taekwondo Champion",
  },
  {
    id: "giovanna-perrini",
    title: "Giovanna Perrini",
    type: "trainer",
    url: "/trainer/giovanna-perrini",
    description: "Gymnastics Instructor",
  },
  {
    id: "samuela-dintrono",
    title: "Samuela Dintrono",
    type: "trainer",
    url: "/trainer/samuela-dintrono",
    description: "Pilates & Holistic Fitness",
  },
  {
    id: "fabrizio-baldassarre",
    title: "Fabrizio Baldassarre",
    type: "trainer",
    url: "/trainer/fabrizio-baldassarre",
    description: "Functional Training Coach",
  },
  {
    id: "michaela-guida",
    title: "Michaela Guida",
    type: "trainer",
    url: "/trainer/michaela-guida",
    description: "Powerlifting & Bodybuilding",
  },
]

function searchItems(query: string) {
  if (!query.trim()) return []

  const normalizedQuery = query.toLowerCase().trim()
  const queryWords = normalizedQuery.split(/\s+/)

  return searchData
    .map((item) => {
      let score = 0
      const normalizedTitle = item.title.toLowerCase()
      const normalizedDescription = item.description.toLowerCase()
      const normalizedCategory = item.category?.toLowerCase() || ""
      const normalizedIntensity = item.intensity?.toLowerCase() || ""

      // Exact title match (highest priority)
      if (normalizedTitle === normalizedQuery) score += 100

      // Title starts with query
      if (normalizedTitle.startsWith(normalizedQuery)) score += 80

      // Title contains query
      if (normalizedTitle.includes(normalizedQuery)) score += 60

      // Category match
      if (normalizedCategory.includes(normalizedQuery)) score += 50

      // Intensity match
      if (normalizedIntensity.includes(normalizedQuery)) score += 40

      // Description contains query
      if (normalizedDescription.includes(normalizedQuery)) score += 30

      // Word-by-word matching
      queryWords.forEach((word) => {
        if (normalizedTitle.includes(word)) score += 20
        if (normalizedDescription.includes(word)) score += 10
        if (normalizedCategory.includes(word)) score += 15
      })

      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
}

export function SearchComponent() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        const searchResults = searchItems(query)
        setResults(searchResults)
        setIsOpen(true)
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setResults([])
      setIsOpen(false)
      setIsLoading(false)
    }
  }, [query])

  const handleClear = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "corso":
        return "bg-green-100 text-green-800"
      case "trainer":
        return "bg-blue-100 text-blue-800"
      case "page":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getIntensityColor = (intensity?: string) => {
    if (!intensity) return ""
    if (intensity.includes("Bassa")) return "bg-green-100 text-green-700"
    if (intensity.includes("Media")) return "bg-yellow-100 text-yellow-700"
    if (intensity.includes("Alta")) return "bg-red-100 text-red-700"
    return "bg-gray-100 text-gray-700"
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Cerca corsi, trainer..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
          onFocus={() => query.trim() && setIsOpen(true)}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />
        )}
      </div>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {results.length > 0 ? (
              <div className="py-2">
                {results.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate">{item.title}</h4>
                          <Badge variant="secondary" className={`text-xs ${getTypeColor(item.type)}`}>
                            {item.type === "corso" ? "Corso" : item.type === "trainer" ? "Trainer" : "Pagina"}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                        <div className="flex gap-1 mt-1">
                          {item.category && (
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                          )}
                          {item.intensity && (
                            <Badge variant="outline" className={`text-xs ${getIntensityColor(item.intensity)}`}>
                              {item.intensity}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center text-sm text-gray-500">
                <Search className="mx-auto h-8 w-8 text-gray-300 mb-2" />
                <p>Nessun risultato trovato per "{query}"</p>
                <p className="text-xs mt-1">Prova con "pilates", "zumba", "functional" o il nome di un trainer</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
