import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    company: "Madero",
    fleet: "+67 Caminhões",
    quote: "É com grande satisfação que vemos a comunicação presente em nossos caminhões, pois ela reforça os valores e a qualidade que o Madero leva a cada cliente.",
    image: "https://images.unsplash.com/photo-1565608087341-404b25492fee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "Impacto OOH",
    fleet: "Estatística Nacional",
    quote: "85% da população brasileira é impactada por publicidade em mídia exterior (OOH), tornando-a uma das formas mais efetivas de comunicação.",
    image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          O que nossos clientes dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.company}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.company}
                  </h3>
                  <p className="text-blue-600">{testimonial.fleet}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}