// Static data for the fitness website
// This replaces all WordPress API calls with local data

export interface Trainer {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  featured_image_url: string
  acf: {
    role: string
    specialties: string
    certifications: string
    schedule_monday?: string
    schedule_tuesday?: string
    schedule_wednesday?: string
    schedule_thursday?: string
    schedule_friday?: string
    schedule_saturday?: string
    schedule_sunday?: string
    instagram_url?: string
    facebook_url?: string
  }
}

export interface Course {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_image_url: string
  acf: {
    level: string
    duration: string
    max_participants: number
    schedule: string
    benefits: string
    requirements: string
    calories: string
  }
}

export interface BlogPost {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  modified: string
  author: number
  author_name: string
  featured_image_url: string
  categories: number[]
  category_names: string[]
}

export interface GalleryImage {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  featured_image_url: string
  acf: {
    category: string
  }
}

export interface BlogCategory {
  id: number
  name: string
  slug: string
  count: number
}

// Static data
export const trainers: Trainer[] = [
  {
    id: 1,
    slug: "cristina-chisena",
    title: {
      rendered: "Dott.ssa Cristina Chisena",
    },
    content: {
      rendered:
        "<p>Dott.ssa Cristina Chisena, nata il 30/03/1992 a Martina Franca (TA). Inizia la sua esperienza sportiva all'età di 8 anni nell'ambito della danza e della ginnastica. Consegue la laurea in Scienze delle Attività Motorie e Sportive il 02/03/2015 presso l'Università degli Studi G. D'annunzio Chieti-Pescara.</p><p>Integra la sua formazione nel settore fitness e wellness frequentando corsi con diverse federazioni. Assume la carica di Personal Trainer, Istruttore di Fitness Musicale e Funzionale. Specializza i suoi studi in ambito Posturale (Lombalgie, Cervicalgie, Discopatie, Scoliosi, Mézieres, Back School, Miofasciale, Rehab Ginocchio).</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Cristina+Chisena",
    acf: {
      role: "Personal Trainer, Posturale, Zumba, Strong by Zumba",
      specialties: "Ginnastica Posturale\nZumba\nStrong by Zumba\nFitness Musicale\nRecupero Funzionale",
      certifications:
        "Laurea in Scienze delle Attività Motorie e Sportive\nPersonal Trainer\nIstruttore Fitness Musicale e Funzionale\nSpecializzazione Posturale",
      schedule_monday: "9:00 - 18:00",
      schedule_wednesday: "9:00 - 18:00",
      schedule_friday: "9:00 - 18:00",
    },
  },
  {
    id: 2,
    slug: "martino-salamina",
    title: {
      rendered: "Martino Salamina",
    },
    content: {
      rendered:
        "<p>Martina Franca (TA). Si qualifica istruttore il 09/03/1992 presso la FIACF (Federazione Italiana Amatori Cultura Fisica). Inizia a svolgere l'attività di istruttore Fitness presso la palestra Arnold'S Club di Alberobello (BA) (1992-2001).</p><p>Esperto in preparazione atletica al ciclismo e al podismo, svolge l'attività agonistica nel ciclismo dal 1996 al 2007. Consegue il titolo di campione regionale strada e campione regionale montagna nel 2000 e campione regionale strada nel 2001. Nel 2014 inizia la pratica dell'attività agonistica nel podismo specializzandosi nelle prove di mezza maratona e maratona.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Martino+Salamina",
    acf: {
      role: "Trainer e Personal Trainer Performance",
      specialties:
        "Preparazione Atletica Ciclismo\nPreparazione Atletica Podismo\nAllenamento Performance\nMezza Maratona\nMaratona",
      certifications: "Qualifica Istruttore FIACF\nEsperto Preparazione Atletica\nCampione Regionale Ciclismo",
      schedule_tuesday: "14:00 - 20:00",
      schedule_thursday: "14:00 - 20:00",
      schedule_saturday: "9:00 - 14:00",
    },
  },
  {
    id: 3,
    slug: "vito-curlo",
    title: {
      rendered: "Dott. Vito Curlo",
    },
    content: {
      rendered:
        "<p>Fasano (BR), 1984. Nel 2014 consegue la Laurea in Scienze delle Attività Motorie e Sportive presso l'Università degli Studi di Bari, Facoltà di Medicina e Chirurgia. Contemporaneamente al percorso accademico ottiene la qualifica di Istruttore di Scuola Calcio (CONI – FIGC), Allenatore di Pesistica e Cultura Fisica (I Livello regionale FIPE), Istruttore/Personal Trainer (II Livello nazionale FIPE).</p><p>Dal 2016, sempre con ELAV, inizia il suo percorso di specializzazione frequentando il Master in Metabolic Disorders Recovery Specialist per l'area Medical e i Master in Personal Trainer Specialist, Hypertrophy Trainer Specialist, Functional Fitness Trainer Specialist, Slimming Trainer Specialist e Evolutionary Trainer Specialist per l'area Fitness.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Vito+Curlo",
    acf: {
      role: "Dottore in Scienze Motorie, Personal Trainer",
      specialties:
        "Ricomposizione Corporea\nDimagrimento\nPersonal Training\nAllenamento Funzionale\nSpecialista Metabolico",
      certifications:
        "Laurea in Scienze delle Attività Motorie e Sportive\nPersonal Trainer II Livello FIPE\nMaster ELAV Metabolic Disorders Recovery\nHypertrophy Trainer Specialist",
      schedule_monday: "10:00 - 19:00",
      schedule_wednesday: "10:00 - 19:00",
      schedule_friday: "10:00 - 19:00",
    },
  },
  {
    id: 4,
    slug: "stefano-turnone",
    title: {
      rendered: "Dott. Stefano Turnone",
    },
    content: {
      rendered:
        "<p>Martina Franca (TA), 1990. Appassionato di sport fin da bambino, praticando pallacanestro dall'età di 5 anni. Insegue il sogno di fare della propria passione un lavoro, frequentando gli studi universitari presso l'Università Gabriele D'Annunzio Chieti Pescara dove consegue la Laurea.</p><p>Durante il percorso di studi lavora come preparatore atletico di pallacanestro e istruttore di sala fitness presso varie sedi. Oltre gli studi universitari, prosegue la propria formazione con il conseguimento di diversi attestati tra cui attestato di personal trainer conseguito con la Non solo fitness. Diventa Preparatore Fisico di base di pallacanestro. Ottiene l'attestato istruttore Raw Training e Cross Training, partecipa a vari master sulle alzate del Powerlifting e Weightlifting.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Stefano+Turnone",
    acf: {
      role: "Dottore in Scienze Motorie, Personal Trainer",
      specialties: "Preparazioni Fisiche Sportive\nPowerlifting\nCross Training\nPallacanestro\nRaw Training",
      certifications:
        "Laurea in Scienze Motorie\nPersonal Trainer\nPreparatore Fisico Pallacanestro\nIstruttore Raw Training e Cross Training\nAtleta Powerlifting",
      schedule_tuesday: "15:00 - 21:00",
      schedule_thursday: "15:00 - 21:00",
      schedule_saturday: "10:00 - 16:00",
    },
  },
  {
    id: 5,
    slug: "grazia-sanarica",
    title: {
      rendered: "Dott.ssa Grazia Sanarica",
    },
    content: {
      rendered:
        "<p>La Dott.ssa Grazia Sanarica è una professionista del fitness con oltre 20 anni di esperienza nel settore. Inizia la sua carriera come Trainer Fitness nel 2002 e si specializza in discipline di fitness di gruppo, mantenendo una formazione costante per offrire il meglio ai suoi clienti.</p><p>Ha acquisito un ampio portfolio di qualifiche, tra cui Istruttrice di Aerobica e Step, Spinning e Walking, Breathe Kombat Master Trainer Internazionale, Super Jump, Allenamento Funzionale (Certificazione IKFF). Nel 2017 diventa Master Trainer Internazionale e formatrice per istruttori Breathe Kombat. Nel 2018 ottiene la Certificazione Internazionale di Allenamento Funzionale a Corpo Libero IKFF. Laurea in Scienze Motorie nel 2024.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Grazia+Sanarica",
    acf: {
      role: "Personal Trainer, Fitness Trainer",
      specialties: "Allenamento Funzionale\nLes Mills Trainer\nGroup Fitness\nBreath Kombat\nSpinning\nWalking",
      certifications:
        "Laurea in Scienze Motorie\nMaster Trainer Internazionale Breathe Kombat\nCertificazione IKFF Allenamento Funzionale\nPersonal Trainer Posturale FBI",
      schedule_monday: "17:00 - 21:00",
      schedule_wednesday: "17:00 - 21:00",
      schedule_friday: "17:00 - 21:00",
    },
  },
  {
    id: 6,
    slug: "oronzo-bagorda",
    title: {
      rendered: "Dott. Oronzo Bagorda",
    },
    content: {
      rendered:
        "<p>Il Dott. Oronzo Bagorda è il direttore dell'Unika Fitness Club di Martina Franca. Con una profonda passione per il fitness e il benessere, è ideatore e redattore del magazine Unika inForma e co-ideatore del progetto #iorestoacasa Ma Mi Alleno. La sua missione è promuovere uno stile di vita sano attraverso l'attività fisica e l'educazione motoria.</p><p>Specialist Trainer ELAV con master in Personal Training Morfologico, Personal Training Evoluzionistico, Postural Dynamic, Fitness Instructor. Istruttore Certificato TRX, Istruttore Certificato Les Mills, Allenatore Federazione Italiana Pallacanestro. Partecipa regolarmente a seminari e corsi di aggiornamento in Allenamento Funzionale e altre discipline innovative nel campo del fitness.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Oronzo+Bagorda",
    acf: {
      role: "Direttore Tecnico, Coach",
      specialties:
        "Personal Training Personalizzato\nAllenamento Funzionale\nPostural Training\nElettrostimolazione (WB EMS)\nTRX\nLes Mills",
      certifications:
        "Laurea in Scienze Motorie\nSpecialist Trainer ELAV\nIstruttore Certificato TRX\nIstruttore Certificato Les Mills\nAllenatore Pallacanestro",
      schedule_monday: "8:00 - 20:00",
      schedule_tuesday: "8:00 - 20:00",
      schedule_wednesday: "8:00 - 20:00",
      schedule_thursday: "8:00 - 20:00",
      schedule_friday: "8:00 - 20:00",
    },
  },
  {
    id: 7,
    slug: "antonello-di-giuseppe",
    title: {
      rendered: "Dott. Antonello Di Giuseppe",
    },
    content: {
      rendered:
        "<p>Dott. Di Giuseppe Antonello, Classe 1997, consegue la laurea triennale in Scienze Motorie presso l'Università di Perugia. Dopo un tirocinio presso l'ASD Fortebraccio Perugia in ginnastica attrezzistica decide di iniziare la sua formazione verso l'allenamento per il fitness.</p><p>Per approfondire i suoi studi universitari, con MSP consegue la qualifica di Istruttore e Personal Trainer di 1° e 2° livello. Si forma inoltre per diventare Istruttore Pilates e istruttore di Allenamento Olistico di 1° e 2° livello con CSAIn e diventa Operatore Massaggio Svedese con CSEN. Partecipa a diversi seminari formativi come: Canali Postural Method, alla Project Convention, riabilitazione ortopedica della spalla con Francesco Inglese. Inoltre si avvicina al mondo del Natural Body Building con Nicola Frisoni.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Antonello+Di+Giuseppe",
    acf: {
      role: "Coach",
      specialties: "Pilates\nAllenamento Olistico\nMassaggio Svedese\nNatural Body Building\nRiabilitazione Ortopedica",
      certifications:
        "Laurea in Scienze Motorie\nPersonal Trainer 1° e 2° livello MSP\nIstruttore Pilates\nIstruttore Allenamento Olistico CSAIn\nOperatore Massaggio Svedese CSEN",
      schedule_tuesday: "16:00 - 20:00",
      schedule_thursday: "16:00 - 20:00",
      schedule_saturday: "9:00 - 13:00",
    },
  },
  {
    id: 8,
    slug: "michele-conserva",
    title: {
      rendered: "Dott. Michele Conserva",
    },
    content: {
      rendered:
        "<p>Michele Conserva, classe 1992, è un Coach, Personal Trainer e Preparatore Atletico, con un solido background accademico e sportivo. Specializzato nell'allenamento con sovraccarichi e nella preparazione atletica per atleti e amatori. Laureato in Scienze Motorie (L-22) con tesi sulla Preparazione Atletica nel Pugilato (2019).</p><p>Formazione avanzata con la Federazione Italiana Fitness (FIF) su Fitness e Bodybuilding, Educazione Alimentare, Programmazione dell'Allenamento, Special Training, TRX e allenamento in sospensione. Dal 2024 è Preparatore Atletico per i giovani tennisti dello Sporting Club Martina Franca. Ha 13 anni di calcio agonistico, esperienza negli sport da combattimento e atleta di Bodybuilding con partecipazioni alle competizioni NBFI e WABBA nella categoria Men's Physique.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Michele+Conserva",
    acf: {
      role: "Coach, Personal Trainer",
      specialties:
        "Bodybuilding\nPreparazione Atletica\nProgrammazione Allenamento\nRecupero Funzionale\nTRX\nEducazione Alimentare",
      certifications:
        "Laurea in Scienze Motorie\nFormazione FIF Bodybuilding\nPreparatore Atletico Tennis\nAtleta Bodybuilding NBFI e WABBA",
      schedule_monday: "15:00 - 21:00",
      schedule_wednesday: "15:00 - 21:00",
      schedule_friday: "15:00 - 21:00",
    },
  },
  {
    id: 9,
    slug: "federica-gallo",
    title: {
      rendered: "Dott.ssa Federica Gallo",
    },
    content: {
      rendered:
        "<p>Federica Gallo, classe 1996, è una chinesiologa laureata in Scienze Motorie con un forte background accademico e sportivo. Laureata in Scienze Motorie (L-22) con tesi sulla Rieducazione Motoria della Meniscectomia Artroscopica (2019) e Laurea Magistrale in Scienze e Tecniche dello Sport (L-68) con tesi sull'Approccio Chinesiologico delle Asimmetrie Muscolari (2021).</p><p>Master Universitario in Posturologia con tesi sulle Disfunzioni Posturali e Approccio Chinesiologico (2019). Specializzata in Ginnastica Posturale e Allenamento in Gravidanza con ATS, Pilates e Tecniche di Allenamento per il Benessere. Ha giocato 5 stagioni in Serie A di calcio a 5 femminile, 1 stagione in Serie A2 ed è vincitrice della Coppa Italia Nazionale di Serie A.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Federica+Gallo",
    acf: {
      role: "Coach, Personal Trainer",
      specialties:
        "Ginnastica Posturale\nAllenamento Anti-Aging\nDimagrimento al Femminile\nPilates\nAllenamento in Gravidanza",
      certifications:
        "Laurea Magistrale in Scienze e Tecniche dello Sport\nMaster Universitario in Posturologia\nSpecialista Ginnastica Posturale\nVincitrice Coppa Italia Serie A",
      schedule_tuesday: "9:00 - 17:00",
      schedule_thursday: "9:00 - 17:00",
      schedule_saturday: "9:00 - 15:00",
    },
  },
  {
    id: 10,
    slug: "giuseppe-marangi",
    title: {
      rendered: "Dott. Giuseppe Marangi",
    },
    content: {
      rendered:
        "<p>Il Dott. Giuseppe Marangi è un professionista specializzato in Scienze delle Attività Motorie Preventive e Adattate, con un master in Posturologia e Biomeccanica. Presso l'Unika Fitness Club, si dedica ad aiutare persone di tutte le età a migliorare la loro forma fisica, correggere la postura e recuperare dopo infortuni attraverso programmi di allenamento personalizzati.</p><p>I protocolli di allenamento del Dott. Marangi sono strutturati in tre fasi: Fase di Riscaldamento (esercizi di respirazione, rilascio miofasciale, mobilità articolare, attivazione generale), Parte Centrale (esercizi mirati in base agli obiettivi e alle esigenze del cliente), Fase Finale (stretching e allungamento per migliorare la flessibilità e favorire il recupero).</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Giuseppe+Marangi",
    acf: {
      role: "Chinesiologo, Posturologo e Personal Trainer",
      specialties:
        "Attività Motorie Preventive\nPosturologia\nBiomeccanica\nRieducazione Motoria\nValutazione Posturale",
      certifications:
        "Laurea Magistrale in Scienze delle Attività Motorie Preventive e Adattate\nMaster Universitario in Posturologia e Biomeccanica\nChinesiologo qualificato\nPosturologo qualificato",
      schedule_monday: "14:00 - 20:00",
      schedule_wednesday: "14:00 - 20:00",
      schedule_friday: "14:00 - 20:00",
    },
  },
  {
    id: 11,
    slug: "sonja-sanarico",
    title: {
      rendered: "Sonja Sanarico",
    },
    content: {
      rendered:
        "<p>Nata a Putignano nel 1984. Dall'età di 4 anni pratica la ginnastica ritmica e cresce amando la danza in tutte le sue sfumature. Si trasferisce a Modena dal 2004 iscritta al corso universitario di Scienze Infermieristiche. Qui frequenta un corso di danza classica e contemporanea con il maestro Luca Quercioli della compagnia di danza. Partecipa ad un concorso nazionale di danza contemporanea con il suo gruppo al Teatro Coccia di Novara.</p><p>Scopre la pole dance alla Female Art Studio di Modena e se ne innamora subito. Capisce di voler far conciliare il suo lavoro principale di infermiera con la sua passione. Intraprende il percorso di formazione per diventare istruttrice, avvalendosi di maestri di fama internazionale nel panorama sportivo della pole dance.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Sonja+Sanarico",
    acf: {
      role: "Istruttrice Pole Dance, Infermiera",
      specialties: "Pole Dance\nDanza Classica\nDanza Contemporanea\nGinnastica Ritmica",
      certifications:
        "Laurea in Scienze Infermieristiche\nIstruttrice Pole Dance\nFormazione Danza Classica e Contemporanea",
      schedule_tuesday: "18:00 - 21:00",
      schedule_thursday: "18:00 - 21:00",
      schedule_saturday: "15:00 - 18:00",
    },
  },
  {
    id: 12,
    slug: "morena-lucarelli",
    title: {
      rendered: "Morena Lucarelli",
    },
    content: {
      rendered:
        "<p>Morena Lucarelli è una trainer esperta presso Unika Fitness Club. Con anni di esperienza nel settore del fitness, si dedica ad aiutare i clienti a raggiungere i loro obiettivi di benessere attraverso programmi di allenamento personalizzati e motivanti.</p><p>La sua passione per il movimento e il benessere la porta a mantenersi costantemente aggiornata sulle ultime tendenze del fitness per offrire sempre il meglio ai suoi clienti.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Morena+Lucarelli",
    acf: {
      role: "Fitness Trainer",
      specialties: "Fitness Generale\nAllenamento Personalizzato\nMotivazione\nBenessere",
      certifications: "Trainer Qualificato\nFormazione Continua nel Fitness",
      schedule_monday: "16:00 - 20:00",
      schedule_wednesday: "16:00 - 20:00",
      schedule_friday: "16:00 - 20:00",
    },
  },
  {
    id: 13,
    slug: "marcello-massafra",
    title: {
      rendered: "Marcello Massafra",
    },
    content: {
      rendered:
        "<p>Marcello Massafra, nato a Martina Franca nel 1992 è un atleta agonista Nazionale di Taekwondo. Dal 2019 è Trainer presso Unika Fitness Club.</p><p>Tra i suoi titoli vanta: Allenatore Taekwondo dall'anno sportivo 2013-14. Per 6 volte consecutive è Campione Pugliese (imbattuto in Puglia dal 2011). Si laurea Campione interregionale in Marche, Calabria e Lazio.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Marcello+Massafra",
    acf: {
      role: "Trainer, Atleta Nazionale Taekwondo",
      specialties: "Taekwondo\nArti Marziali\nPreparazione Atletica\nAllenamento Funzionale\nDifesa Personale",
      certifications:
        "Allenatore Taekwondo\nAtleta Nazionale Taekwondo\nCampione Pugliese (6 volte)\nCampione Interregionale",
      schedule_tuesday: "17:00 - 21:00",
      schedule_thursday: "17:00 - 21:00",
      schedule_saturday: "10:00 - 14:00",
    },
  },
  {
    id: 14,
    slug: "giovanna-perrini",
    title: {
      rendered: "Giovanna Perrini",
    },
    content: {
      rendered:
        "<p>Locorotondo, 1956. Inizio la mia esperienza sportiva intorno ai 15 anni, prima al liceo, giocando a calcio tra studenti e poi praticando ginnastica presso la 'Polisportiva Martina' nel 1975. La passione è cresciuta così tanto che dopo diversi anni di pratica, ho iniziato ad assistere il Prof. Baccaro nelle sue lezioni. Qualche anno dopo ho conseguito la qualifica di Istruttrice Ginnastica a Corpo Libero del Coni e ho avuto i miei primi gruppi sia nella Polisportiva Martina che in altre palestre della zona. Successivamente mi sono anche specializzata nel Pilates presso il Coni di Roma.</p><p>Il mio lavoro mi porta ad avere contatti con persone di varie fasce d'età e con diversi problemi da risolvere. Dopo 20 anni di ascolto e di esperienza, sono sempre più convinta che sia una cosa molto gratificante.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Giovanna+Perrini",
    acf: {
      role: "Istruttrice Ginnastica, Pilates",
      specialties: "Ginnastica a Corpo Libero\nPilates\nGinnastica per Anziani\nRieducazione Motoria\nGinnastica Dolce",
      certifications:
        "Istruttrice Ginnastica a Corpo Libero CONI\nSpecializzazione Pilates CONI Roma\n20+ anni di esperienza",
      schedule_monday: "9:00 - 13:00",
      schedule_wednesday: "9:00 - 13:00",
      schedule_friday: "9:00 - 13:00",
    },
  },
  {
    id: 15,
    slug: "samuela-dintrono",
    title: {
      rendered: "Samuela Dintrono",
    },
    content: {
      rendered:
        "<p>Nata il 28 maggio 1988 a Melfi (PZ), Samuela Dintrono è una professionista appassionata del movimento e del benessere, con oltre 15 anni di esperienza nel mondo del fitness e delle discipline olistiche. Il suo percorso sportivo inizia all'età di 10 anni, ispirata dal padre Franco, allenatore di calcio ed ex arbitro federale. Samuela si forma inizialmente nella danza, nella ginnastica e nella corsa campestre, disciplina in cui si distingue a livello regionale. A 16 anni diventa arbitro di calcio a 11, raggiungendo il livello di eccellenza lucana.</p><p>Frequenta una prestigiosa scuola di fitness a Milano dove si specializza come istruttrice di fitness musicale, insegnando con successo lezioni di step, aerobica, GAG, allenamenti funzionali e dimagranti. Con il tempo, si avvicina al mondo del benessere mente-corpo e si innamora della filosofia del Pilates, trovando in questa disciplina la sintesi perfetta tra controllo, concentrazione, fluidità e forza. Nel 2023 completa la sua formazione in Pilates Reformer, entrando nel mondo dei grandi macchinari.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Samuela+Dintrono",
    acf: {
      role: "Istruttrice Pilates e Fitness Olistico",
      specialties:
        "Pilates Matwork\nPilates Reformer\nFitness Musicale\nStep\nAerobica\nGAG\nFitness in Volo\nAttività Motoria Bambini",
      certifications:
        "Istruttrice Fitness Musicale\nInsegnante Pilates Matwork\nPilates Reformer\nPersonal Trainer\nCertificata Fitness in Volo\n6 stagioni villaggi turistici",
      schedule_tuesday: "10:00 - 18:00",
      schedule_thursday: "10:00 - 18:00",
      schedule_saturday: "9:00 - 15:00",
    },
  },
  {
    id: 16,
    slug: "fabrizio-baldassarre",
    title: {
      rendered: "Fabrizio Baldassarre",
    },
    content: {
      rendered:
        "<p>Fabrizio Baldassarre, classe '85. Sin da piccolo nel mondo dello sport, da giocatore e allenatore di calcio e futsal. Decide di formarsi nell'ambito del fitness e specializzarsi come Coach e Personal Trainer nell'allenamento funzionale e sulla preparazione fisica sportiva.</p><p>La sua esperienza nel calcio e futsal gli ha fornito una solida base per comprendere le esigenze degli atleti e sviluppare programmi di allenamento efficaci per migliorare le performance sportive.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Fabrizio+Baldassarre",
    acf: {
      role: "Coach, Personal Trainer",
      specialties: "Allenamento Funzionale\nPreparazione Fisica Sportiva\nCalcio\nFutsal\nCondizionamento Atletico",
      certifications:
        "Coach Qualificato\nPersonal Trainer\nAllenatore Calcio e Futsal\nSpecialista Allenamento Funzionale",
      schedule_monday: "15:00 - 19:00",
      schedule_wednesday: "15:00 - 19:00",
      schedule_friday: "15:00 - 19:00",
    },
  },
  {
    id: 17,
    slug: "michaela-guida",
    title: {
      rendered: "Coach Michaela Guida",
    },
    content: {
      rendered:
        "<p>Mi chiamo Michaela e sono un'istruttrice certificata specializzata in Powerlifting, Fitness e Bodybuilding. Amo aiutare le persone a scoprire il loro potenziale, trasformando il semplice allenamento in un percorso di crescita e benessere. Sto concludendo la laurea in Management dello Sport e delle Attività Motorie, che mi permette di unire metodo, conoscenza e pratica per offrirti un servizio completo e personalizzato.</p><p>La mia filosofia è 'La tua forza, il mio obiettivo'. Credo fermamente che ogni persona abbia un potenziale unico da scoprire e sviluppare attraverso l'allenamento mirato e la dedizione.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Michaela+Guida",
    acf: {
      role: "Coach, Istruttrice Powerlifting & Bodybuilding",
      specialties: "Powerlifting\nBodybuilding\nFitness\nForza\nCondizionamento\nAllenamento con Sovraccarichi",
      certifications:
        "Istruttrice Certificata Powerlifting\nLaurenda in Management dello Sport\nSpecialista Bodybuilding\nCoach Qualificata",
      schedule_tuesday: "14:00 - 20:00",
      schedule_thursday: "14:00 - 20:00",
      schedule_saturday: "10:00 - 16:00",
    },
  },
]

export const courses: Course[] = [
  {
    id: 1,
    slug: "pilates-reformer",
    title: {
      rendered: "Pilates Reformer",
    },
    content: {
      rendered:
        "<p>Il Pilates Reformer è un allenamento completo che utilizza una macchina speciale per aggiungere resistenza agli esercizi di Pilates. Questo corso ti aiuterà a migliorare la forza, la flessibilità e la postura.</p><p>Durante le lezioni, lavorerai su tutti i gruppi muscolari con particolare attenzione al core. Gli esercizi sono adattabili a tutti i livelli di fitness e possono essere modificati per affrontare esigenze specifiche o limitazioni.</p>",
    },
    excerpt: {
      rendered:
        "<p>Un allenamento completo che utilizza il Reformer per migliorare forza, flessibilità e postura con particolare attenzione al core.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Pilates+Reformer",
    acf: {
      level: "Tutti i livelli",
      duration: "50 minuti",
      max_participants: 8,
      schedule: "Lunedì: 10:00, 17:00\nMercoledì: 10:00, 17:00\nVenerdì: 10:00, 17:00",
      benefits:
        "Migliora la postura\nRafforza il core\nAumenta la flessibilità\nRiduce il dolore alla schiena\nMigliora l'equilibrio",
      requirements: "Abbigliamento comodo\nCalzini antiscivolo\nAsciugamano personale",
      calories: "350-450",
    },
  },
  {
    id: 2,
    slug: "hiit-training",
    title: {
      rendered: "HIIT Training",
    },
    content: {
      rendered:
        "<p>L'HIIT (High Intensity Interval Training) è un metodo di allenamento che alterna brevi periodi di esercizio intenso a periodi di recupero. Questo tipo di allenamento è estremamente efficace per bruciare calorie, migliorare la resistenza cardiovascolare e tonificare i muscoli.</p><p>Le nostre sessioni HIIT combinano esercizi di forza e cardio per un allenamento completo che continua a bruciare calorie anche dopo la fine della sessione.</p>",
    },
    excerpt: {
      rendered:
        "<p>Allenamento ad alta intensità che alterna esercizi intensi a periodi di recupero per massimizzare la combustione di calorie.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=HIIT+Training",
    acf: {
      level: "Intermedio-Avanzato",
      duration: "30 minuti",
      max_participants: 10,
      schedule: "Martedì: 7:00, 18:00\nGiovedì: 7:00, 18:00\nSabato: 9:00",
      benefits:
        "Brucia molte calorie\nMigliora la resistenza\nTonifica i muscoli\nEffetto afterburn\nMigliora il metabolismo",
      requirements: "Buona forma fisica di base\nScarpe da ginnastica\nAbbigliamento sportivo\nAsciugamano",
      calories: "400-600",
    },
  },
  {
    id: 3,
    slug: "functional-training",
    title: {
      rendered: "Functional Training",
    },
    content: {
      rendered:
        "<p>Il Functional Training è un tipo di allenamento che prepara il corpo per le attività quotidiane. Gli esercizi simulano movimenti comuni che potresti fare a casa, al lavoro o nello sport, aiutandoti a migliorare l'equilibrio, la coordinazione e la forza.</p><p>Le lezioni includono una varietà di esercizi utilizzando il peso corporeo, kettlebell, palle mediche, TRX e altri attrezzi. Questo tipo di allenamento è eccellente per migliorare la tua forma fisica generale e prevenire infortuni.</p>",
    },
    excerpt: {
      rendered:
        "<p>Un allenamento che prepara il corpo per le attività quotidiane, migliorando equilibrio, coordinazione e forza attraverso movimenti funzionali.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Functional+Training",
    acf: {
      level: "Tutti i livelli",
      duration: "45 minuti",
      max_participants: 12,
      schedule: "Lunedì: 18:30\nMercoledì: 18:30\nVenerdì: 18:30",
      benefits:
        "Migliora la forza funzionale\nAumenta la mobilità\nMigliora la coordinazione\nRafforza il core\nPreviene gli infortuni",
      requirements: "Scarpe da ginnastica\nAbbigliamento comodo\nAsciugamano\nBottiglia d'acqua",
      calories: "400-600",
    },
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "benefici-pilates-reformer",
    title: {
      rendered: "I 5 principali benefici del Pilates Reformer",
    },
    content: {
      rendered:
        "<p>Il Pilates Reformer è una forma di esercizio che utilizza una macchina speciale per aggiungere resistenza agli esercizi di Pilates tradizionali. Ecco i 5 principali benefici di questa pratica:</p><h3>1. Migliora la postura</h3><p>Il Pilates Reformer lavora sui muscoli profondi che supportano la colonna vertebrale, aiutando a correggere squilibri muscolari e migliorare l'allineamento del corpo.</p><h3>2. Aumenta la forza del core</h3><p>Gli esercizi di Pilates Reformer si concentrano sul rafforzamento dei muscoli addominali, lombari e pelvici, creando un core forte che è fondamentale per tutte le attività quotidiane.</p><h3>3. Migliora la flessibilità</h3><p>Il Reformer permette di eseguire movimenti in un range completo, aumentando gradualmente la flessibilità senza stress eccessivo sulle articolazioni.</p><h3>4. Riduce il dolore alla schiena</h3><p>Rafforzando i muscoli di supporto e migliorando la postura, il Pilates Reformer può aiutare a ridurre il dolore cronico alla schiena e prevenire futuri problemi.</p><h3>5. Offre un allenamento completo</h3><p>Nonostante sia a basso impatto, il Pilates Reformer offre un allenamento completo che tonifica i muscoli, migliora la resistenza e può anche contribuire alla perdita di peso quando combinato con una dieta equilibrata.</p>",
    },
    excerpt: {
      rendered:
        "<p>Scopri i cinque principali benefici del Pilates Reformer e come questa pratica può migliorare la tua postura, forza e benessere generale.</p>",
    },
    date: "2023-05-15T10:00:00",
    modified: "2023-05-15T10:00:00",
    author: 1,
    author_name: "Laura Bianchi",
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Pilates+Reformer",
    categories: [1, 3],
    category_names: ["Pilates", "Benessere"],
  },
  {
    id: 2,
    slug: "guida-hiit-training",
    title: {
      rendered: "Guida completa all'HIIT Training: massimizza i tuoi risultati",
    },
    content: {
      rendered:
        "<p>L'HIIT (High Intensity Interval Training) è una metodologia di allenamento che sta rivoluzionando il mondo del fitness. Ecco tutto quello che devi sapere:</p><h3>Cos'è l'HIIT Training?</h3><p>L'HIIT Training alterna brevi periodi di esercizio ad alta intensità (85-95% della frequenza cardiaca massima) a periodi di recupero attivo o completo. Questa metodologia permette di ottenere risultati straordinari in tempi ridotti.</p><h3>Come funziona una sessione?</h3><p>Una tipica sessione HIIT dura 15-30 minuti e include:</p><ul><li>Riscaldamento (5 minuti)</li><li>Intervalli ad alta intensità (20-60 secondi)</li><li>Periodi di recupero (10-60 secondi)</li><li>Defaticamento (5 minuti)</li></ul><h3>Quali sono i benefici?</h3><p>- Brucia più calorie in meno tempo<br>- Effetto afterburn: continui a bruciare calorie per ore dopo l'allenamento<br>- Migliora la resistenza cardiovascolare<br>- Tonifica i muscoli<br>- Accelera il metabolismo</p><h3>È adatto a tutti?</h3><p>L'HIIT può essere adattato a diversi livelli di fitness, ma è importante iniziare gradualmente. È consigliabile avere una buona base di fitness prima di iniziare un programma HIIT intenso.</p><h3>Quanto spesso dovrei allenarmi?</h3><p>Per risultati ottimali, si consiglia di fare 2-3 sessioni di HIIT alla settimana, alternandole con giorni di recupero o allenamenti a bassa intensità.</p>",
    },
    excerpt: {
      rendered:
        "<p>Scopri cos'è l'HIIT Training, come funziona, quali sono i suoi benefici e come integrarlo nella tua routine di allenamento.</p>",
    },
    date: "2023-06-20T14:30:00",
    modified: "2023-06-20T14:30:00",
    author: 2,
    author_name: "Alessandro Verdi",
    featured_image_url: "/placeholder.svg?height=600&width=600&text=HIIT+Training",
    categories: [2, 4],
    category_names: ["Fitness", "Allenamento"],
  },
  {
    id: 3,
    slug: "alimentazione-pre-post-allenamento",
    title: {
      rendered: "Alimentazione pre e post allenamento: cosa mangiare per massimizzare i risultati",
    },
    content: {
      rendered:
        "<p>L'alimentazione gioca un ruolo fondamentale nel determinare i risultati del tuo allenamento. Ecco una guida su cosa mangiare prima e dopo l'esercizio fisico:</p><h3>Alimentazione pre-allenamento</h3><p>L'obiettivo principale dell'alimentazione pre-allenamento è fornire energia per la sessione di allenamento imminente. Idealmente, dovresti mangiare 1-3 ore prima dell'allenamento.</p><p><strong>Cosa mangiare:</strong></p><ul><li>Carboidrati a digestione lenta: avena, pane integrale, riso integrale</li><li>Proteine magre: yogurt greco, uova, petto di pollo</li><li>Grassi sani in piccole quantità: avocado, noci, semi</li></ul><p><strong>Esempi di spuntini pre-allenamento:</strong></p><ul><li>Yogurt greco con frutta e miele</li><li>Toast integrale con uova strapazzate</li><li>Banana con burro di mandorle</li></ul><h3>Alimentazione post-allenamento</h3><p>Dopo l'allenamento, il tuo corpo ha bisogno di nutrienti per riparare i muscoli e ricostituire le riserve di glicogeno. Idealmente, dovresti mangiare entro 30-60 minuti dopo l'allenamento.</p><p><strong>Cosa mangiare:</strong></p><ul><li>Proteine di alta qualità: pollo, pesce, tofu, whey protein</li><li>Carboidrati a rapido assorbimento: frutta, riso bianco, patate dolci</li><li>Antiossidanti: frutta e verdura colorata</li></ul><p><strong>Esempi di pasti post-allenamento:</strong></p><ul><li>Frullato proteico con banana e spinaci</li><li>Petto di pollo con riso e verdure</li><li>Salmone con patate dolci e broccoli</li></ul><h3>Idratazione</h3><p>Non dimenticare l'importanza dell'idratazione! Bevi acqua prima, durante e dopo l'allenamento per mantenere le prestazioni ottimali e favorire il recupero.</p>",
    },
    excerpt: {
      rendered:
        "<p>Scopri cosa mangiare prima e dopo l'allenamento per massimizzare i tuoi risultati e migliorare il recupero muscolare.</p>",
    },
    date: "2023-07-10T09:15:00",
    modified: "2023-07-10T09:15:00",
    author: 3,
    author_name: "Marco Rossi",
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Alimentazione+Sportiva",
    categories: [5, 6],
    category_names: ["Nutrizione", "Fitness"],
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    slug: "sala-pilates",
    title: {
      rendered: "Sala Pilates",
    },
    content: {
      rendered:
        "<p>La nostra sala Pilates completamente attrezzata con Reformer, Cadillac e altri attrezzi professionali.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Sala+Pilates",
    acf: {
      category: "struttura",
    },
  },
  {
    id: 2,
    slug: "area-functional-training",
    title: {
      rendered: "Area Functional Training",
    },
    content: {
      rendered: "<p>Area dedicata all'allenamento funzionale con TRX, kettlebell, palle mediche e altro.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Functional+Training",
    acf: {
      category: "struttura",
    },
  },
  {
    id: 3,
    slug: "sala-hiit",
    title: {
      rendered: "Sala HIIT Training",
    },
    content: {
      rendered: "<p>La nostra sala dedicata all'HIIT Training con attrezzature all'avanguardia.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=HIIT+Training",
    acf: {
      category: "struttura",
    },
  },
  {
    id: 4,
    slug: "lezione-pilates-gruppo",
    title: {
      rendered: "Lezione di Pilates di Gruppo",
    },
    content: {
      rendered: "<p>Una delle nostre popolari lezioni di Pilates di gruppo.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Lezione+Pilates",
    acf: {
      category: "lezioni",
    },
  },
  {
    id: 5,
    slug: "personal-training",
    title: {
      rendered: "Sessione di Personal Training",
    },
    content: {
      rendered: "<p>Un trainer che segue un cliente durante una sessione personalizzata.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Personal+Training",
    acf: {
      category: "lezioni",
    },
  },
  {
    id: 6,
    slug: "area-relax",
    title: {
      rendered: "Area Relax",
    },
    content: {
      rendered: "<p>La nostra area relax dove i clienti possono riposarsi dopo l'allenamento.</p>",
    },
    featured_image_url: "/placeholder.svg?height=600&width=600&text=Area+Relax",
    acf: {
      category: "struttura",
    },
  },
]

export const blogCategories: BlogCategory[] = [
  { id: 1, name: "Pilates", slug: "pilates", count: 1 },
  { id: 2, name: "Fitness", slug: "fitness", count: 2 },
  { id: 3, name: "Benessere", slug: "benessere", count: 1 },
  { id: 4, name: "Allenamento", slug: "allenamento", count: 1 },
  { id: 5, name: "Nutrizione", slug: "nutrizione", count: 1 },
]

// Helper functions to replace WordPress API calls
export const getAllTrainers = async (): Promise<Trainer[]> => {
  return trainers
}

export const getTrainerBySlug = async (slug: string): Promise<Trainer | null> => {
  return trainers.find((trainer) => trainer.slug === slug) || null
}

export const getAllCourses = async (): Promise<Course[]> => {
  return courses
}

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
  return courses.find((course) => course.slug === slug) || null
}

export const getAllBlogPosts = async (
  perPage = 10,
  page = 1,
): Promise<{ posts: BlogPost[]; total: number; totalPages: number }> => {
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage
  const paginatedPosts = blogPosts.slice(startIndex, endIndex)

  return {
    posts: paginatedPosts,
    total: blogPosts.length,
    totalPages: Math.ceil(blogPosts.length / perPage),
  }
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  return blogPosts.find((post) => post.slug === slug) || null
}

export const getAllGalleryImages = async (): Promise<GalleryImage[]> => {
  return galleryImages
}

export const getBlogCategories = async (): Promise<BlogCategory[]> => {
  return blogCategories
}

// Helper functions for formatting data
export const getFormattedSchedule = (trainer: Trainer): { day: string; time: string }[] => {
  const schedule: { day: string; time: string }[] = []

  if (trainer.acf.schedule_monday) {
    schedule.push({ day: "Lunedì", time: trainer.acf.schedule_monday })
  }
  if (trainer.acf.schedule_tuesday) {
    schedule.push({ day: "Martedì", time: trainer.acf.schedule_tuesday })
  }
  if (trainer.acf.schedule_wednesday) {
    schedule.push({ day: "Mercoledì", time: trainer.acf.schedule_wednesday })
  }
  if (trainer.acf.schedule_thursday) {
    schedule.push({ day: "Giovedì", time: trainer.acf.schedule_thursday })
  }
  if (trainer.acf.schedule_friday) {
    schedule.push({ day: "Venerdì", time: trainer.acf.schedule_friday })
  }
  if (trainer.acf.schedule_saturday) {
    schedule.push({ day: "Sabato", time: trainer.acf.schedule_saturday })
  }
  if (trainer.acf.schedule_sunday) {
    schedule.push({ day: "Domenica", time: trainer.acf.schedule_sunday })
  }

  return schedule
}

export const getFormattedSocials = (trainer: Trainer): { platform: string; url: string }[] => {
  const socials: { platform: string; url: string }[] = []

  if (trainer.acf.instagram_url) {
    socials.push({ platform: "Instagram", url: trainer.acf.instagram_url })
  }
  if (trainer.acf.facebook_url) {
    socials.push({ platform: "Facebook", url: trainer.acf.facebook_url })
  }

  return socials
}

export const textAreaToArray = (textArea: string | null | undefined): string[] => {
  if (!textArea) return []
  return textArea
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
}
