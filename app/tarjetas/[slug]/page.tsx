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
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl opacity-90">{data.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </section>
    </main>
  );
}
