import { Metadata } from 'next';
import { getRubroData, getAllRubros } from '@/lib/firebase';

// This is required for static export (output: 'export')
export async function generateStaticParams() {
  // In a real app, you would fetch all possible slugs from Firestore here
  // const rubros = await getAllRubros();
  // return rubros.map((rubro) => ({ slug: rubro.slug }));
  
  // For the preview, we'll return a static list
  return [
    { slug: 'restaurantes' },
    { slug: 'cafeterias' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getRubroData(slug);

  if (!data) {
    return {
      title: 'Rubro no encontrado | Loyalfly',
    };
  }

  return {
    title: `${data.title} | Loyalfly`,
    description: data.description,
    openGraph: {
      title: `${data.title} | Loyalfly`,
      description: data.description,
    },
  };
}

export default async function TarjetaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getRubroData(slug);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">Rubro no encontrado</h1>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.title,
    description: data.description,
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className="bg-white border-b border-gray-100 py-6 px-6 sm:px-12 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-primary tracking-tight">
            Loyalfly
          </a>
          <nav>
            <a href="/help/como-configurar" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
              Centro de Ayuda
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary-bg py-24 px-6 sm:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main mb-6 tracking-tight">{data.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-text-main prose-a:text-primary hover:prose-a:text-primary-hover prose-p:text-gray-600 prose-li:text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </section>
    </main>
  );
}
