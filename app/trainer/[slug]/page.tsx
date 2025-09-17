import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTrainerBySlug, getAllTrainers } from "@/lib/static-data"
import TrainerDetailPage from "./TrainerDetailPage"

interface TrainerPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const trainers = await getAllTrainers()
  return trainers.map((trainer) => ({
    slug: trainer.slug,
  }))
}

export async function generateMetadata({ params }: TrainerPageProps): Promise<Metadata> {
  const trainer = await getTrainerBySlug(params.slug)

  if (!trainer) {
    return {
      title: "Trainer non trovato",
    }
  }

  return {
    title: `${trainer.title.rendered} | Unika Fitness Club`,
    description: `Scopri di più su ${trainer.title.rendered}, ${trainer.acf.role} presso Unika Fitness Club.`,
  }
}

export default async function TrainerPage({ params }: TrainerPageProps) {
  const trainer = await getTrainerBySlug(params.slug)

  if (!trainer) {
    notFound()
  }

  return <TrainerDetailPage trainer={trainer} />
}
