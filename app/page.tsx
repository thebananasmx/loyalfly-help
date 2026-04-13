export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Loyalfly Help Center
        </h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          Bienvenido a la plataforma de soporte y documentación.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/tarjetas/restaurantes"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ver Tarjetas para Restaurantes
          </a>
        </div>
      </div>
    </main>
  );
}
