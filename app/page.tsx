import { Users, CreditCard, Settings, QrCode } from 'lucide-react';
import FeedbackCounter from '@/components/FeedbackCounter';

export default function Home() {
  return (
    <div className="flex xl:gap-12">
      <div className="flex-1 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Centro de Ayuda Loyalfly</h1>
        <p className="text-lg text-gray-600 mb-12">Guías para ayudarte a configurar y gestionar tu programa de lealtad digital.</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6" id="tareas-comunes">Tareas comunes</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          <a href="/help/como-configurar" className="group p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all bg-white">
            <Settings className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">Cómo Configurar</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Aprende a crear tu primera tarjeta y configurar tus recompensas en minutos.</p>
          </a>
          <a href="/help/flujos" className="group p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all bg-white">
            <Users className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">Flujos de Usuario</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Entiende cómo interactúan tus clientes y tu equipo con el programa.</p>
          </a>
          <a href="#" className="group p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all bg-white">
            <CreditCard className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">Diseño de Tarjeta</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Personaliza los colores, logo y apariencia de tu tarjeta digital.</p>
          </a>
          <a href="#" className="group p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all bg-white">
            <QrCode className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">Distribución</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Descubre cómo compartir tu programa mediante códigos QR y enlaces.</p>
          </a>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="necesitas-ayuda">¿Necesitas ayuda?</h2>
        <p className="text-gray-600 mb-8">
          ¿No encuentras lo que buscas? <a href="#" className="text-primary font-semibold hover:underline">Contacta a nuestro equipo de soporte.</a>
        </p>

        <div className="border-t border-gray-100 pt-8">
          <FeedbackCounter articleId="home" />
        </div>
      </div>

      {/* Right Sidebar (Table of Contents) */}
      <aside className="hidden xl:block w-64 shrink-0 py-2 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
        <h4 className="font-semibold text-sm text-gray-900 mb-4 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
          En esta página
        </h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#tareas-comunes" className="text-primary font-medium">Tareas comunes</a></li>
          <li><a href="#necesitas-ayuda" className="text-gray-500 hover:text-gray-900 transition-colors">¿Necesitas ayuda?</a></li>
        </ul>
      </aside>
    </div>
  );
}
