# 🏋️ Unika Fitness Club - Guida ai File del Progetto

## 📁 Struttura del Progetto

### 🎯 **File Principali**

#### **`app/page.tsx`** - Homepage Principale
- **Cosa contiene**: Pagina principale del sito con tutte le sezioni
- **Quando modificare**: Per cambiare contenuti homepage, sezioni, layout generale
- **Sezioni incluse**: Hero, Chi Siamo, Corsi, Trainer, Galleria, Blog, FAQ, Contatti

#### **`app/layout.tsx`** - Layout Globale e SEO
- **Cosa contiene**: Metadata SEO, structured data, configurazione globale
- **Quando modificare**: Per aggiornare SEO, meta tags, favicon, analytics
- **Include**: Title, description, keywords, Open Graph, Twitter Cards, Schema.org

#### **`app/globals.css`** - Stili Globali
- **Cosa contiene**: CSS globale, variabili colore, utility classes
- **Quando modificare**: Per cambiare colori brand, font, stili base

---

### 📄 **Pagine del Sito**

#### **`app/corsi/page.tsx`** - Pagina Corsi
- **Cosa contiene**: Lista completa dei corsi con filtri per categoria
- **Quando modificare**: Per aggiornare layout corsi, filtri, descrizioni

#### **`app/corso/[id]/page.tsx`** - Pagina Singolo Corso
- **Cosa contiene**: Dettagli specifici di ogni corso (dinamica)
- **Quando modificare**: Per cambiare layout dettaglio corso

#### **`app/trainers/page.tsx`** - Pagina Team
- **Cosa contiene**: Griglia completa dei trainer
- **Quando modificare**: Per modificare layout team, presentazione trainer

#### **`app/trainer/[slug]/page.tsx`** - Pagina Singolo Trainer
- **Cosa contiene**: Profilo dettagliato di ogni trainer (dinamica)
- **Quando modificare**: Per cambiare layout profilo trainer

#### **`app/contatti/page.tsx`** - Pagina Contatti
- **Cosa contiene**: Form contatti, mappa, informazioni
- **Quando modificare**: Per aggiornare form, dati contatto, mappa

#### **`app/blog/page.tsx`** - Pagina Blog
- **Cosa contiene**: Lista articoli blog con paginazione
- **Quando modificare**: Per modificare layout blog, filtri articoli

#### **`app/search/page.tsx`** - Pagina Ricerca
- **Cosa contiene**: Risultati ricerca globale del sito
- **Quando modificare**: Per migliorare funzionalità ricerca

---

### 🧩 **Componenti Sezioni**

#### **`components/sections/hero-section.tsx`** - Sezione Hero
- **Cosa contiene**: Video/immagine principale, titoli, CTA buttons
- **Quando modificare**: Per cambiare hero video, testi principali, bottoni

#### **`components/sections/course-categories.tsx`** - Sezione Corsi
- **Cosa contiene**: Card corsi con categorie e filtri
- **Quando modificare**: Per aggiornare card corsi, categorie, stili

#### **`components/sections/gallery-section.tsx`** - Sezione Galleria
- **Cosa contiene**: Galleria immagini con filtri categoria
- **Quando modificare**: Per modificare layout galleria, filtri

#### **`components/sections/blog-section.tsx`** - Sezione Blog
- **Cosa contiene**: Anteprima articoli blog in homepage
- **Quando modificare**: Per cambiare layout anteprima blog

#### **`components/sections/map-section.tsx`** - Sezione Mappa
- **Cosa contiene**: Mappa Google, orari, contatti
- **Quando modificare**: Per aggiornare coordinate, orari, dati contatto

#### **`components/sections/faq-section.tsx`** - Sezione FAQ
- **Cosa contiene**: Domande frequenti con accordion
- **Quando modificare**: Per aggiungere/modificare FAQ

#### **`components/sections/google-reviews.tsx`** - Recensioni Google
- **Cosa contiene**: Widget recensioni Google
- **Quando modificare**: Per aggiornare recensioni, rating

#### **`components/sections/social-follow.tsx`** - Social Media
- **Cosa contiene**: Link e widget social media
- **Quando modificare**: Per aggiornare link social, username

---

### 🎨 **Componenti UI**

#### **`components/navigation/main-navbar.tsx`** - Navigazione Principale
- **Cosa contiene**: Menu principale, logo, ricerca
- **Quando modificare**: Per aggiornare menu, logo, link navigazione

#### **`components/ui/search.tsx`** - Componente Ricerca
- **Cosa contiene**: Barra ricerca intelligente
- **Quando modificare**: Per migliorare funzionalità ricerca

#### **`components/optimized-image.tsx`** - Immagini Ottimizzate
- **Cosa contiene**: Componente per lazy loading e ottimizzazione immagini
- **Quando modificare**: Per modificare comportamento caricamento immagini

#### **`components/lazy-image.tsx`** - Lazy Loading
- **Cosa contiene**: Caricamento progressivo immagini
- **Quando modificare**: Per ottimizzare performance immagini

---

### 📊 **Dati e Configurazione**

#### **`lib/static-data.tsx`** - Dati Trainer e Contenuti
- **Cosa contiene**: Database trainer, corsi, blog posts
- **Quando modificare**: Per aggiungere/modificare trainer, loro info, specializzazioni

#### **`lib/course-data.ts`** - Dati Corsi
- **Cosa contiene**: Database completo corsi con intensità, orari, descrizioni
- **Quando modificare**: Per aggiungere nuovi corsi, modificare intensità, orari

#### **`lib/image-paths.ts`** - Percorsi Immagini
- **Cosa contiene**: Mapping percorsi immagini per trainer, corsi, galleria
- **Quando modificare**: Dopo aver aggiunto nuove immagini nelle cartelle

#### **`data/fallback-data.ts`** - Dati di Fallback
- **Cosa contiene**: Dati statici per FAQ, contatori, testimonial
- **Quando modificare**: Per aggiornare FAQ, statistiche, testimonial

---

### 🖼️ **Sistema Immagini**

#### **`public/images/trainers/`** - Foto Trainer
- **Formato consigliato**: 400x400px, WebP
- **Naming**: `nome-cognome.webp` (es: `marco-rossi.webp`)

#### **`public/images/courses/`** - Immagini Corsi
- **Formato consigliato**: 800x600px, WebP
- **Naming**: `nome-corso.webp` (es: `pilates.webp`)

#### **`public/images/gallery/`** - Galleria Palestra
- **Formato consigliato**: 1200x800px, WebP
- **Naming**: `categoria-numero.webp` (es: `struttura-01.webp`)

#### **`public/images/blog/`** - Immagini Blog
- **Formato consigliato**: 1200x630px, WebP
- **Naming**: `titolo-articolo.webp`

#### **`public/images/logos/`** - Loghi e Branding
- **Formato consigliato**: SVG + PNG fallback
- **Include**: Logo principale, favicon, social icons

---

### ⚙️ **Configurazione**

#### **`next.config.mjs`** - Configurazione Next.js
- **Cosa contiene**: Ottimizzazioni immagini, domini esterni, redirects
- **Quando modificare**: Per aggiungere domini immagini, ottimizzazioni

#### **`tailwind.config.ts`** - Configurazione Tailwind
- **Cosa contiene**: Colori brand, font, breakpoints personalizzati
- **Quando modificare**: Per aggiornare colori brand, font, responsive

#### **`tsconfig.json`** - Configurazione TypeScript
- **Cosa contiene**: Configurazione compilatore TypeScript
- **Quando modificare**: Raramente, solo per configurazioni avanzate

---

### 🔧 **Utility e Hook**

#### **`hooks/use-image-loader.ts`** - Hook Caricamento Immagini
- **Cosa contiene**: Logica caricamento progressivo immagini
- **Quando modificare**: Per ottimizzare caricamento immagini

#### **`lib/image-utils.ts`** - Utility Immagini
- **Cosa contiene**: Funzioni helper per gestione immagini
- **Quando modificare**: Per aggiungere nuove funzionalità immagini

#### **`lib/utils.ts`** - Utility Generali
- **Cosa contiene**: Funzioni helper generali (cn, formatters, etc.)
- **Quando modificare**: Per aggiungere utility comuni

---

## 🚀 **Come Aggiornare Contenuti**

### ✏️ **Modificare Testi Homepage**
➡️ **File**: `app/page.tsx`
- Titoli sezioni, descrizioni, CTA buttons

### 👨‍💼 **Aggiungere/Modificare Trainer**
➡️ **File**: `lib/static-data.tsx`
- Aggiungere nuovo oggetto trainer nell'array
- Aggiungere foto in `public/images/trainers/`

### 🏃‍♂️ **Aggiungere/Modificare Corsi**
➡️ **File**: `lib/course-data.ts`
- Aggiungere nuovo corso con intensità, orari, descrizione
- Aggiungere immagine in `public/images/courses/`

### 📞 **Aggiornare Contatti/Orari**
➡️ **File**: `app/layout.tsx` (structured data) + `components/sections/map-section.tsx`
- Orari, telefono, email, indirizzo

### 🎨 **Cambiare Colori Brand**
➡️ **File**: `tailwind.config.ts` + `app/globals.css`
- Variabili colore, tema principale

### 📱 **Aggiornare Social Media**
➡️ **File**: `components/sections/social-follow.tsx`
- Link social, username, widget

### ❓ **Modificare FAQ**
➡️ **File**: `data/fallback-data.ts`
- Array faqItems con domande e risposte

### 🔍 **Migliorare SEO**
➡️ **File**: `app/layout.tsx`
- Metadata, keywords, structured data, Open Graph

---

## 📈 **Performance e Ottimizzazione**

- **Immagini**: Sistema automatico WebP + lazy loading
- **SEO**: Structured data completo + meta tags ottimizzati  
- **Ricerca**: Indicizzazione intelligente corsi + trainer
- **Mobile**: Design responsive con breakpoints ottimizzati
- **Loading**: Componenti lazy + progressive enhancement

---

## 🆘 **Risoluzione Problemi Comuni**

**❌ Immagine non si carica**
➡️ Controlla nome file in `lib/image-paths.ts` e presenza in cartella

**❌ Trainer non appare**
➡️ Verifica oggetto in `lib/static-data.tsx` e slug corretto

**❌ Corso non visibile**
➡️ Controlla `lib/course-data.ts` e categoria assegnata

**❌ SEO non aggiornato**
➡️ Modifica `app/layout.tsx` e ricompila progetto

**❌ Colori non cambiano**
➡️ Aggiorna `tailwind.config.ts` e riavvia dev server
