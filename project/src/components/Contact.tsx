import React from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Card from './Card';
import Calendly from './Calendly';

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4" />,
    title: "Agende Online",
    description: "Escolha o melhor horário para você",
    href: "#calendly"
  },
  {
    icon: <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />,
    title: "Ligue Agora",
    description: "(11) 9999-9999",
    href: "tel:+551199999999"
  },
  {
    icon: <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />,
    title: "Email",
    description: "contato@pictorial.com",
    href: "mailto:contato@pictorial.com"
  }
];

export default function Contact() {
  return (
    <Section id="contact" className="py-20 bg-blue-900">
      <SectionTitle 
        title="Transforme Sua Frota em Mídia de Alto Impacto"
        subtitle="Agende uma consulta gratuita com nossos especialistas e descubra como podemos potencializar sua marca."
        textColor="text-white"
      />
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {contactMethods.map((method, index) => (
          <a 
            key={index}
            href={method.href}
            className="block"
          >
            <Card className="text-center hover:transform hover:scale-105 transition-transform">
              {method.icon}
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </Card>
          </a>
        ))}
      </div>

      <div id="calendly" className="bg-white rounded-xl p-8 shadow-lg">
        <Calendly 
          url="https://calendly.com/afonso-pictorial"
          className="mx-auto"
        />
      </div>
    </Section>
  );
}