import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import "./globals.css";
import { Search, Book, PlayCircle, Star } from 'lucide-react';
import MobileNavigation from "@/components/MobileNavigation";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Loyalfly Help Center",
  description: "Centro de ayuda y documentación para Loyalfly",
  icons: {
    icon: "https://res.cloudinary.com/dg4wbuppq/image/upload/f_auto,q_auto,w_32/v1773168526/favicon_izlhv3.png",
    apple: "https://res.cloudinary.com/dg4wbuppq/image/upload/f_auto,q_auto,w_180/v1767634073/apple-touch-icon_o7gyu5.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen bg-white flex flex-col text-text-main`}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8 w-1/3">
            <a href="/" className="flex items-center">
              <img src="https://raw.githubusercontent.com/thebananasmx/loyalfly-3-5/refs/heads/main/assets/logo_desk.svg" alt="Loyalfly" className="hidden sm:block h-7 w-auto" />
              <img src="https://raw.githubusercontent.com/thebananasmx/loyalfly-3-5/refs/heads/main/assets/logo_mob.svg" alt="Loyalfly" className="block sm:hidden h-7 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div className="flex items-center justify-end gap-4 sm:gap-6 w-1/3">
            <a href="#" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-primary">Estado del sistema</a>
            <a href="#" className="hidden sm:block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
              Ir al Panel
            </a>
            <MobileNavigation />
          </div>
        </header>

        <div className="flex flex-1 max-w-[1400px] mx-auto w-full">
          {/* Left Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-100 py-8 px-4 overflow-y-auto h-[calc(100vh-4rem)] sticky top-16">
            <nav className="space-y-8">
              <div>
                <a href="/" className="flex items-center gap-3 px-3 py-2 bg-primary-bg text-primary rounded-lg font-medium text-sm">
                  <Book className="h-4 w-4" />
                  Documentación
                </a>
              </div>
              
              <div>
                <h3 className="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" /> Primeros Pasos
                </h3>
                <ul className="space-y-1">
                  <li><a href="/help/como-configurar" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">Cómo Configurar</a></li>
                  <li><a href="/help/flujos" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">Flujos de Usuario</a></li>
                </ul>
              </div>

              <div>
                <h3 className="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4" /> Programas
                </h3>
                <ul className="space-y-1">
                  <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">Programa de Sellos</a></li>
                  <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">Recompensas</a></li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
            {children}
          </main>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-white py-12 mt-auto">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-8">
            <div className="mb-8 md:mb-0">
              <img src="https://raw.githubusercontent.com/thebananasmx/loyalfly-3-5/refs/heads/main/assets/logo_desk.svg" alt="Loyalfly" className="h-8 w-auto mb-6" />
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm">Características</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-primary transition-colors">Puntos</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Sellos</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Integraciones</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm">Recursos</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="/tarjetas/restaurantes" className="hover:text-primary transition-colors">Guía de Restaurantes</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-sm">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 flex justify-between items-center">
            <p>Powered by Loyalfly</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
