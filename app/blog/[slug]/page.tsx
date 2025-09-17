import type { Metadata } from "next"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/static-data"
import { decodeHtmlEntities } from "@/lib/api-helpers"
import { notFound } from "next/navigation"
import BlogPostClientPage from "./BlogPostClientPage"
import type { BlogPost } from "@/lib/static-data"

// Metadati dinamici per SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Utilizziamo await Promise.resolve() per risolvere l'errore di params
  const resolvedParams = await Promise.resolve(params)
  const post = await getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: "Articolo non trovato | Unika Fitness Club",
      description: "L'articolo che stai cercando non è disponibile.",
    }
  }

  const title = decodeHtmlEntities(post.title.rendered)
  const description = decodeHtmlEntities(post.excerpt.rendered)
    .substring(0, 160)
    .replace(/<[^>]*>/g, "")
  const canonicalUrl = `/blog/${post.slug}`

  return {
    title,
    description,
    keywords: post.category_names,
    authors: [{ name: post.author_name }],
    publishedTime: post.date,
    modifiedTime: post.modified,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author_name],
      tags: post.category_names,
      images: [
        {
          url: post.featured_image_url,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.featured_image_url],
    },
  }
}

// Genera i percorsi statici a build time
export async function generateStaticParams() {
  const { posts } = await getAllBlogPosts(100) // Recupera fino a 100 post per la generazione statica

  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Utilizziamo await Promise.resolve() per risolvere l'errore di params
  const resolvedParams = await Promise.resolve(params)
  const post = await getBlogPostBySlug(resolvedParams.slug)

  // Se il post non esiste, mostra la pagina 404
  if (!post) {
    notFound()
  }

  return <BlogPostClientPage post={post} />
}
