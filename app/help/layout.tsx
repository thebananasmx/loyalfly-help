export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 py-6 px-6 sm:px-12 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-primary tracking-tight">
            Loyalfly Docs
          </a>
          <nav>
            <a href="/tarjetas/restaurantes" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
              Volver al inicio
            </a>
          </nav>
        </div>
      </header>
      <main className="py-16 px-6 sm:px-12">
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-text-main prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary-hover prose-p:text-gray-600 prose-li:text-gray-600">
          {children}
        </article>
      </main>
    </div>
  );
}
