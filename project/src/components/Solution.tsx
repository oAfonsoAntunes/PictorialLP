import React from 'react';
import { Truck, Palette, Clock, Target } from 'lucide-react';

const benefits = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Instalação Profissional",
    description: "Equipe especializada com anos de experiência em envelopamento de frotas."
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-600" />,
    title: "Design Personalizado",
    description: "Criação de arte exclusiva que reflete a identidade da sua marca."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Rápida Execução",
    description: "Processo otimizado para minimizar o tempo de veículo parado."
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Alto Impacto",
    description: "Alcance milhares de visualizações diárias em diferentes localidades."
  }
];

export default function Solution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa Solução em Fleet Graphics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua frota em uma poderosa ferramenta de marketing com nossa solução completa de envelopamento veicular.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}