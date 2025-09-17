interface WordPressContentProps {
  content: string
}

export default function WordPressContent({ content }: WordPressContentProps) {
  return <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
}
