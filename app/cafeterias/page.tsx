import { Coffee, Smartphone, Palette, PieChart, TrendingUp, Star, ArrowRight, Wallet, Users, Gift } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programa de Lealtad para Cafeterías | Loyalfly',
  description: 'Transforma visitantes en clientes fieles. Crea tu programa de lealtad digital para tu cafetería sin tarjetas de cartón.',
};

export default function CafeteriasLanding() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Hero Section */}
      <section className="text-center py-10 sm:py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-wider mb-6 border border-orange-100">
          <Coffee className="w-4 h-4" />
          <span>Especial para Cafeterías</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
          Aroma a lealtad en <br className="hidden sm:block" />
          <span className="text-primary">cada taza.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transforma visitantes en clientes fieles. Loyalfly es la forma más simple y elegante de crear un programa de lealtad digital que tus clientes amarán. <strong className="text-gray-900 font-semibold">Sin tarjetas de cartón, sin complicaciones.</strong>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.loyalfly.com.mx/register" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 text-lg"
          >
            Regístrate Gratis <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#planes" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-center text-lg"
          >
            Ver planes
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 mb-16 bg-gray-50 rounded-3xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nuestra comunidad sigue creciendo gracias a todos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 px-6">
          <div className="text-center pt-4 sm:pt-0">
            <div className="flex justify-center mb-3"><Users className="w-6 h-6 text-gray-400" /></div>
            <div className="text-4xl font-black text-gray-900 mb-1">+400</div>
            <div className="text-sm font-medium text-gray-500">Negocios Confían en Nosotros</div>
          </div>
          <div className="text-center pt-4 sm:pt-0">
            <div className="flex justify-center mb-3"><Star className="w-6 h-6 text-yellow-400 fill-yellow-400" /></div>
            <div className="text-4xl font-black text-gray-900 mb-1">+4,000</div>
            <div className="text-sm font-medium text-gray-500">Momentos de Lealtad (Sellos)</div>
          </div>
          <div className="text-center pt-4 sm:pt-0">
            <div className="flex justify-center mb-3"><Gift className="w-6 h-6 text-primary" /></div>
            <div className="text-4xl font-black text-gray-900 mb-1">+320</div>
            <div className="text-sm font-medium text-gray-500">Recompensas Entregadas</div>
          </div>
        </div>
      </section>

      {/* Value Prop for Cafeterias */}
      <section className="py-12 mb-16">
        <div className="bg-primary-bg rounded-3xl p-8 sm:p-12 text-center border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
          <Coffee className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Premia a tus clientes frecuentes</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Regala un café gratis después de ciertas visitas y haz que cada compra cuente. Loyalfly es el ingrediente secreto para que vuelvan por más.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Todo lo que necesitas para crecer</h2>
          <p className="text-lg text-gray-600">Simple para ti, mágico para tus clientes.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Digital</h3>
            <p className="text-gray-600 leading-relaxed">Tus clientes solo necesitan su número de teléfono. Olvídate de las tarjetas físicas para siempre.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Palette className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fácil de Personalizar</h3>
            <p className="text-gray-600 leading-relaxed">Adapta el diseño de tu tarjeta de lealtad con tu marca, colores y recompensas en segundos.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PieChart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Análisis Sencillos</h3>
            <p className="text-gray-600 leading-relaxed">Visualiza quiénes son tus clientes más leales y entiende su comportamiento de compra.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Resultados Reales</h3>
            <p className="text-gray-600 leading-relaxed">Incrementa la frecuencia de visita y el gasto promedio de tus clientes más valiosos.</p>
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section className="py-12 mb-16 bg-gray-900 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <Wallet className="w-14 h-14 text-gray-400 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight">Tarjeta de lealtad digital en un smartphone</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="px-6 py-4 bg-black border border-gray-700 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              Add to Apple Wallet
            </div>
            <div className="px-6 py-4 bg-black border border-gray-700 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
              <svg viewBox="0 0 512 512" className="w-5 h-5 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Add to Google Wallet
            </div>
          </div>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            *Descarga a wallet solo disponible en plan Entrepreneur y PRO, consulta nuestros planes.
          </p>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-12 mb-16 border border-gray-200 rounded-3xl p-8 sm:p-12 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700 font-bold text-xs uppercase tracking-wider mb-5 border border-yellow-100">
              <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" /> Soporte VIP
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Lanza tu programa de lealtad con un experto</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              No lo hagas solo. Te ayudamos a configurar tu tarjeta digital y a diseñar la estrategia perfecta para que tus clientes vuelvan siempre.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all w-full sm:w-auto shadow-md hover:shadow-lg">
              Agendar asesoría gratuita
            </a>
          </div>
          <div className="w-full md:w-80 bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 relative">
            <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm transform rotate-12">
              Loyalfly Experts
            </div>
            <div className="w-28 h-28 bg-white rounded-full mx-auto mb-5 overflow-hidden border-4 border-white shadow-md">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hector&backgroundColor=e2e8f0" alt="Héctor León" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-gray-900 text-xl mb-1">Héctor León</h3>
            <p className="text-sm text-primary font-bold">Loyalty Associate Manager</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center bg-primary-bg rounded-3xl border border-primary/20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight max-w-2xl mx-auto leading-tight">
          ✨ ¡Regístrate GRATIS y comienza a fidelizar tus clientes hoy mismo! 🚀
        </h2>
        <a 
          href="https://www.loyalfly.com.mx/register" 
          className="inline-flex items-center justify-center px-12 py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 transition-all text-xl w-full sm:w-auto transform hover:-translate-y-1"
        >
          Comienza Hoy
        </a>
      </section>
    </div>
  );
}
