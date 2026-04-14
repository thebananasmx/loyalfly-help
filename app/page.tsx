export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-[#ffffff]">
      <div className="z-10 max-w-3xl w-full flex flex-col items-center justify-center text-center">
        <div className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary-bg text-primary font-semibold text-sm tracking-wide">
          Centro de Ayuda
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-text-main mb-6">
          Loyalfly Docs
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          Encuentra guías, tutoriales y respuestas a tus preguntas sobre cómo crear y gestionar tu programa de lealtad digital.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <a
            href="/tarjetas/restaurantes"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
          >
            Ver Guía de Restaurantes
          </a>
          <a
            href="/help/como-configurar"
            className="px-8 py-4 bg-white text-text-main font-semibold rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-all duration-200 shadow-sm"
          >
            Cómo Configurar
          </a>
        </div>
      </div>
    </main>
  );
}
