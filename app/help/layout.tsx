export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="max-w-3xl prose prose-lg prose-headings:font-bold prose-headings:text-text-main prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary-hover prose-p:text-gray-600 prose-li:text-gray-600">
      {children}
    </article>
  );
}
