"use client";

import { useState, useEffect } from 'react';
import { X, Book, PlayCircle, Star } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="lg:hidden p-2 -mr-2 text-gray-900 hover:text-primary transition-colors"
        aria-label="Abrir menú"
      >
        <div className="flex flex-col justify-center items-center w-5 h-5 space-y-1.5">
          <span className="block w-5 h-[2px] bg-current rounded-full"></span>
          <span className="block w-5 h-[2px] bg-current rounded-full"></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm lg:hidden transition-opacity" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Sidebar (Off-canvas from right) */}
      <div className={`fixed inset-y-0 right-0 z-[110] w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b border-gray-100 shrink-0">
          <img src="https://raw.githubusercontent.com/thebananasmx/loyalfly-3-5/refs/heads/main/assets/logo_desk.svg" alt="Loyalfly" className="h-7 w-auto" />
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 -mr-2 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="p-6 space-y-8 overflow-y-auto flex-1 text-left">
          <div>
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 bg-primary-bg text-primary rounded-lg font-medium text-sm">
              <Book className="h-4 w-4" />
              Documentación
            </a>
          </div>
          
          <div>
            <h3 className="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <PlayCircle className="h-4 w-4" /> Primeros Pasos
            </h3>
            <ul className="space-y-1">
              <li><a href="/help/como-configurar" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors">Cómo Configurar</a></li>
              <li><a href="/help/flujos" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors">Flujos de Usuario</a></li>
            </ul>
          </div>

          <div>
            <h3 className="px-3 text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Star className="h-4 w-4" /> Programas
            </h3>
            <ul className="space-y-1">
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors">Programa de Sellos</a></li>
              <li><a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors">Recompensas</a></li>
            </ul>
          </div>
        </nav>

        <div className="p-6 border-t border-gray-100 shrink-0">
          <a href="#" className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
            Ir al Panel
          </a>
        </div>
      </div>
    </>
  );
}
