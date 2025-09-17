// Static course data with detailed information for each course
export interface CourseData {
  id: string
  name: string
  category: string
  description: string
  duration: string
  intensity: string
  maxParticipants: number
  benefits: string[]
  equipment: string[]
  schedule: string[]
  image: string
}

export const COURSE_DATA: Record<string, CourseData> = {
  // Functional Training Courses
  "easy-training": {
    id: "easy-training",
    name: "Easy Training",
    category: "functional",
    description:
      "Un allenamento funzionale adatto a principianti che introduce gradualmente ai movimenti base del fitness funzionale.",
    duration: "45 minuti",
    intensity: "Bassa",
    maxParticipants: 12,
    benefits: [
      "Migliora la mobilità",
      "Rinforza i muscoli stabilizzatori",
      "Aumenta la coordinazione",
      "Riduce il rischio di infortuni",
    ],
    equipment: ["Peso corporeo", "Elastici", "Palle mediche leggere"],
    schedule: ["Lunedì 14:30", "Mercoledì 14:30", "Venerdì 20:00"],
    image: "/placeholder.svg?height=400&width=600&text=Easy+Training",
  },
  "fitness-funzionale": {
    id: "fitness-funzionale",
    name: "Fitness Funzionale",
    category: "functional",
    description:
      "Allenamento che simula i movimenti della vita quotidiana per migliorare la forza funzionale e la coordinazione.",
    duration: "50 minuti",
    intensity: "Media",
    maxParticipants: 10,
    benefits: ["Migliora la forza funzionale", "Aumenta l'equilibrio", "Potenzia il core", "Migliora la postura"],
    equipment: ["Kettlebell", "TRX", "Palle mediche", "Coni"],
    schedule: ["Martedì 8:30", "Giovedì 8:30", "Venerdì 8:30"],
    image: "/placeholder.svg?height=400&width=600&text=Fitness+Funzionale",
  },
  trx: {
    id: "trx",
    name: "TRX",
    category: "functional",
    description:
      "Allenamento in sospensione che utilizza il peso corporeo per sviluppare forza, equilibrio e flessibilità.",
    duration: "45 minuti",
    intensity: "Media",
    maxParticipants: 8,
    benefits: [
      "Rinforza tutto il corpo",
      "Migliora l'equilibrio",
      "Aumenta la stabilità del core",
      "Versatile per tutti i livelli",
    ],
    equipment: ["TRX Suspension Trainer"],
    schedule: ["Venerdì 10:00", "Sabato 20:00"],
    image: "/placeholder.svg?height=400&width=600&text=TRX+Training",
  },
  "workout-funzionale": {
    id: "workout-funzionale",
    name: "Workout Funzionale",
    category: "functional",
    description: "Allenamento intenso che combina esercizi funzionali per migliorare forza, resistenza e agilità.",
    duration: "50 minuti",
    intensity: "Alta",
    maxParticipants: 12,
    benefits: [
      "Brucia molte calorie",
      "Migliora la resistenza",
      "Sviluppa la forza esplosiva",
      "Tonifica tutto il corpo",
    ],
    equipment: ["Kettlebell", "Battle ropes", "Box", "Palle mediche"],
    schedule: ["Lunedì 17:00", "Mercoledì 13:30", "Giovedì 13:30"],
    image: "/placeholder.svg?height=400&width=600&text=Workout+Funzionale",
  },
  "strength-conditioning": {
    id: "strength-conditioning",
    name: "Strength & Conditioning",
    category: "functional",
    description: "Programma di allenamento per sviluppare forza massimale e condizionamento atletico.",
    duration: "60 minuti",
    intensity: "Alta",
    maxParticipants: 8,
    benefits: [
      "Aumenta la forza massimale",
      "Migliora la potenza",
      "Sviluppa la resistenza muscolare",
      "Ottimizza le prestazioni atletiche",
    ],
    equipment: ["Bilancieri", "Manubri", "Kettlebell", "Piastre"],
    schedule: ["Giovedì 19:00", "Venerdì 19:00"],
    image: "/placeholder.svg?height=400&width=600&text=Strength+Conditioning",
  },
  "hybrid-training": {
    id: "hybrid-training",
    name: "Hybrid Training",
    category: "functional",
    description: "Combinazione di allenamento funzionale, cardio e forza per un workout completo e variato.",
    duration: "55 minuti",
    intensity: "Alta",
    maxParticipants: 10,
    benefits: ["Allenamento completo", "Migliora tutte le capacità fisiche", "Previene la noia", "Risultati rapidi"],
    equipment: ["Vari attrezzi funzionali", "Cardio equipment", "Pesi liberi"],
    schedule: ["Lunedì 7:30", "Giovedì 7:30", "Venerdì 7:30"],
    image: "/placeholder.svg?height=400&width=600&text=Hybrid+Training",
  },

  // Muscle Tone Courses
  pump: {
    id: "pump",
    name: "Pump",
    category: "muscle-tone",
    description: "Allenamento con bilanciere e pesi per tonificare e scolpire tutti i gruppi muscolari.",
    duration: "45 minuti",
    intensity: "Media-Alta",
    maxParticipants: 15,
    benefits: ["Tonifica i muscoli", "Aumenta la resistenza muscolare", "Migliora la definizione", "Brucia grassi"],
    equipment: ["Bilancieri", "Piastre", "Step"],
    schedule: ["Lunedì 18:00", "Mercoledì 19:00", "Venerdì 18:30"],
    image: "/placeholder.svg?height=400&width=600&text=Pump+Training",
  },
  "total-body": {
    id: "total-body",
    name: "Total Body",
    category: "muscle-tone",
    description: "Allenamento completo che coinvolge tutti i gruppi muscolari per una tonificazione generale.",
    duration: "50 minuti",
    intensity: "Media",
    maxParticipants: 12,
    benefits: [
      "Tonifica tutto il corpo",
      "Migliora la resistenza",
      "Aumenta il metabolismo",
      "Corregge gli squilibri muscolari",
    ],
    equipment: ["Manubri", "Elastici", "Step", "Palle mediche"],
    schedule: ["Martedì 18:30", "Giovedì 17:30", "Sabato 10:30"],
    image: "/placeholder.svg?height=400&width=600&text=Total+Body",
  },

  // Cardio Courses
  zumba: {
    id: "zumba",
    name: "Zumba",
    category: "cardio",
    description:
      "Danza fitness che combina movimenti di danza latina con esercizi aerobici per un allenamento divertente.",
    duration: "50 minuti",
    intensity: "Media",
    maxParticipants: 20,
    benefits: ["Brucia molte calorie", "Migliora la coordinazione", "Riduce lo stress", "Diverte mentre ti alleni"],
    equipment: ["Musica latina", "Spazio per ballare"],
    schedule: ["Lunedì 9:00", "Mercoledì 9:00"],
    image: "/placeholder.svg?height=400&width=600&text=Zumba+Fitness",
  },
  spinning: {
    id: "spinning",
    name: "Spinning",
    category: "cardio",
    description: "Allenamento cardiovascolare intenso su bike stazionarie con musica motivante.",
    duration: "45 minuti",
    intensity: "Media",
    maxParticipants: 16,
    benefits: [
      "Migliora la resistenza cardiovascolare",
      "Brucia molte calorie",
      "Tonifica le gambe",
      "Basso impatto sulle articolazioni",
    ],
    equipment: ["Spin bike", "Cardiofrequenzimetro"],
    schedule: ["Martedì 9:00", "Giovedì 14:30", "Venerdì 16:00"],
    image: "/placeholder.svg?height=400&width=600&text=Spinning+Class",
  },
  walking: {
    id: "walking",
    name: "Walking",
    category: "cardio",
    description: "Camminata veloce su tapis roulant con variazioni di intensità e inclinazione.",
    duration: "40 minuti",
    intensity: "Bassa-Media",
    maxParticipants: 8,
    benefits: ["Migliora la salute cardiovascolare", "Adatto a tutti", "Basso impatto", "Brucia grassi"],
    equipment: ["Tapis roulant", "Cardiofrequenzimetro"],
    schedule: ["Lunedì 10:00", "Mercoledì 15:00", "Venerdì 10:30"],
    image: "/placeholder.svg?height=400&width=600&text=Walking+Fitness",
  },
  strong: {
    id: "strong",
    name: "Strong",
    category: "cardio",
    description: "Allenamento ad alta intensità che combina cardio e forza con musica sincronizzata.",
    duration: "30 minuti",
    intensity: "Alta",
    maxParticipants: 12,
    benefits: ["Brucia molte calorie", "Tonifica i muscoli", "Migliora la resistenza", "Allenamento efficiente"],
    equipment: ["Peso corporeo", "Musica sincronizzata"],
    schedule: ["Martedì 12:30", "Giovedì 12:30", "Sabato 11:30"],
    image: "/placeholder.svg?height=400&width=600&text=Strong+Training",
  },
  "fit-boxe": {
    id: "fit-boxe",
    name: "Fit-Boxe",
    category: "cardio",
    description: "Allenamento che combina tecniche di boxe con esercizi fitness per un workout completo.",
    duration: "50 minuti",
    intensity: "Alta",
    maxParticipants: 15,
    benefits: ["Migliora la coordinazione", "Riduce lo stress", "Tonifica braccia e core", "Brucia molte calorie"],
    equipment: ["Guantoni", "Sacchi da boxe", "Pao"],
    schedule: ["Lunedì 20:30", "Mercoledì 20:30", "Venerdì 20:00"],
    image: "/placeholder.svg?height=400&width=600&text=Fit+Boxe",
  },

  // Postural Balance Courses
  pilates: {
    id: "pilates",
    name: "Pilates",
    category: "postural-balance",
    description: "Metodo di allenamento che migliora la postura, la flessibilità e la forza del core.",
    duration: "50 minuti",
    intensity: "Bassa-Media",
    maxParticipants: 12,
    benefits: ["Migliora la postura", "Rafforza il core", "Aumenta la flessibilità", "Riduce il mal di schiena"],
    equipment: ["Tappetini", "Piccoli attrezzi Pilates"],
    schedule: ["Lunedì 17:00", "Mercoledì 17:00", "Venerdì 17:00"],
    image: "/placeholder.svg?height=400&width=600&text=Pilates+Class",
  },
  posturale: {
    id: "posturale",
    name: "Posturale",
    category: "postural-balance",
    description: "Ginnastica correttiva per migliorare la postura e alleviare tensioni muscolari.",
    duration: "45 minuti",
    intensity: "Bassa",
    maxParticipants: 10,
    benefits: ["Corregge la postura", "Allevia le tensioni", "Migliora la mobilità articolare", "Previene i dolori"],
    equipment: ["Tappetini", "Elastici", "Piccoli attrezzi"],
    schedule: ["Martedì 16:00", "Giovedì 16:00", "Sabato 15:00"],
    image: "/placeholder.svg?height=400&width=600&text=Ginnastica+Posturale",
  },

  // Existing courses
  "pilates-reformer": {
    id: "pilates-reformer",
    name: "Pilates Reformer",
    category: "postural-balance",
    description: "Pilates con l'utilizzo del Reformer per un allenamento più intenso e preciso.",
    duration: "50 minuti",
    intensity: "Media",
    maxParticipants: 6,
    benefits: ["Migliora la postura", "Rafforza il core", "Aumenta la flessibilità", "Tonifica tutto il corpo"],
    equipment: ["Reformer Pilates"],
    schedule: ["Lunedì 10:00", "Mercoledì 10:00", "Venerdì 10:00"],
    image: "/placeholder.svg?height=400&width=600&text=Pilates+Reformer",
  },
  "hiit-training": {
    id: "hiit-training",
    name: "HIIT Training",
    category: "functional",
    description: "Allenamento ad intervalli ad alta intensità per massimizzare la combustione di calorie.",
    duration: "30 minuti",
    intensity: "Molto Alta",
    maxParticipants: 10,
    benefits: ["Brucia molte calorie", "Migliora la resistenza", "Effetto afterburn", "Allenamento efficiente"],
    equipment: ["Peso corporeo", "Kettlebell", "Battle ropes"],
    schedule: ["Martedì 7:00", "Giovedì 7:00", "Sabato 9:00"],
    image: "/placeholder.svg?height=400&width=600&text=HIIT+Training",
  },
}

export function getCourseById(id: string): CourseData | null {
  return COURSE_DATA[id] || null
}

export function getCoursesByCategory(category: string): CourseData[] {
  return Object.values(COURSE_DATA).filter((course) => course.category === category)
}

export function getAllCourses(): CourseData[] {
  return Object.values(COURSE_DATA)
}
