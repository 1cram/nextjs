# 📸 Guida Completa per Caricare le Immagini

## 🚀 METODO RAPIDO (Raccomandato)

### 1. **Drag & Drop in v0**
- Trascina le immagini direttamente nell'editor v0
- v0 le ottimizza automaticamente
- Copia il percorso generato (es: `https://blob.v0.app/xyz.jpg`)

### 2. **Aggiorna i File di Configurazione**
Sostituisci i placeholder nei seguenti file:

## 📁 STRUTTURA CARTELLE CREATA

\`\`\`
public/images/
├── trainers/          # Foto trainer (400x400px)
├── courses/           # Immagini corsi (800x600px)  
├── gallery/           # Galleria palestra (1200x800px)
├── blog/              # Articoli blog (1200x630px)
├── logos/             # Loghi (SVG preferito)
├── equipment/         # Attrezzature (600x400px)
└── icons/             # Icone corsi (64x64px)
\`\`\`

## 🎯 PRIORITÀ DI SOSTITUZIONE

### **ALTA PRIORITÀ** (17 trainer + 17 corsi)
1. **Trainer Photos** → `lib/static-data.tsx`
   \`\`\`tsx
   // Cerca: image: "/placeholder.jpg"
   // Sostituisci con: image: "/images/trainers/nome-cognome.jpg"
   \`\`\`

2. **Course Images** → `lib/course-data.ts`
   \`\`\`tsx
   // Cerca: image: "/placeholder.jpg"
   // Sostituisci con: image: "/images/courses/nome-corso.jpg"
   \`\`\`

3. **Logo Principale** → `components/layout/header.tsx`
   \`\`\`tsx
   // Cerca: src="/placeholder-logo.svg"
   // Sostituisci con: src="/images/logos/unika-logo.svg"
   \`\`\`

### **MEDIA PRIORITÀ**
4. **Gallery Images** → `components/sections/gallery-section.tsx`
5. **Blog Images** → `app/blog/[slug]/page.tsx`
6. **Course Icons** → `lib/course-data.ts` (sezione icons)

## 📋 CHECKLIST STEP-BY-STEP

### **STEP 1: Prepara le Immagini**
- [ ] Ridimensiona secondo le specifiche sopra
- [ ] Converti in WebP per performance migliori
- [ ] Nomina i file: `nome-cognome.jpg` o `nome-corso.jpg`

### **STEP 2: Carica in v0**
- [ ] Trascina le immagini nell'editor
- [ ] Copia i link generati (blob.v0.app)

### **STEP 3: Aggiorna i File**

#### **Trainer Images** (17 da sostituire)
File: `lib/static-data.tsx`
\`\`\`tsx
// TROVA questi trainer e sostituisci l'image:
- Cristina Chisena
- Martino Salamina  
- Vito Curlo
- Stefano Turnone
- Grazia Sanarica
- Oronzo Bagorda
- Antonello Di Giuseppe
- Michele Conserva
- Federica Gallo
- Giuseppe Marangi
- Sonja Sanarico
- Morena Lucarelli
- Marcello Massafra
- Giovanna Perrini
- Samuela Dintrono
- Fabrizio Baldassarre
- Michaela Guida
\`\`\`

#### **Course Images** (17 da sostituire)
File: `lib/course-data.ts`
\`\`\`tsx
// TROVA questi corsi e sostituisci l'image:
- HIIT
- Pilates
- Functional Training
- Zumba
- Spinning
- Total Body
- Pump
- TRX
- Walking
- Workout Funzionale
- Easy Training
- Posturale
- Hybrid Training
- Heart Combat
- Strength & Conditioning
- Strong
- Fitness Funzionale
\`\`\`

#### **Icons Corsi** (4 da sostituire)
File: `lib/course-data.ts`
\`\`\`tsx
// Sostituisci nella sezione courseCategories:
- /images/icons/functional.png
- /images/icons/muscle-tone.png  
- /images/icons/cardio.png
- /images/icons/postural-balance.png
\`\`\`

### **STEP 4: Verifica**
- [ ] Controlla che non ci siano più errori 404
- [ ] Testa il caricamento su mobile
- [ ] Verifica la velocità di caricamento

## ⚡ FORMATI OTTIMALI

| Tipo | Dimensioni | Formato | Qualità |
|------|------------|---------|---------|
| Trainer | 400x400px | WebP/JPG | 85% |
| Corsi | 800x600px | WebP/JPG | 85% |
| Gallery | 1200x800px | WebP/JPG | 80% |
| Logo | Vettoriale | SVG | - |
| Icons | 64x64px | PNG/SVG | 100% |

## 🔧 RISOLUZIONE PROBLEMI

**Errore 404 su immagine:**
1. Verifica il percorso nel file
2. Controlla che l'immagine sia nella cartella corretta
3. Riavvia il server di sviluppo

**Immagine non si carica:**
1. Controlla la configurazione in `next.config.mjs`
2. Verifica che il formato sia supportato
3. Controlla la dimensione del file (max 10MB)

## 📞 SUPPORTO
Se hai problemi, controlla:
1. Console del browser per errori
2. File `next.config.mjs` per configurazione
3. Percorsi dei file in `lib/static-data.tsx` e `lib/course-data.ts`
