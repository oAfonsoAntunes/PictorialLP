import React from 'react';
import { Truck } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Truck className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Pictorial</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Início</a>
            <a href="#solution" className="text-gray-600 hover:text-blue-600">Soluções</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Cases</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
          </nav>
          
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </header>
  );
}