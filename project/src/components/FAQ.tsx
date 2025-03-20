import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Qual o processo de envelopamento?",
    answer: "Nosso processo inclui: 1) Primeiro contato e avaliação das necessidades, 2) Desenvolvimento do design personalizado, 3) Aprovação do cliente, 4) Preparação do veículo, 5) Instalação profissional, 6) Inspeção final de qualidade."
  },
  {
    question: "Quanto tempo leva para instalar?",
    answer: "O tempo de instalação varia conforme o tamanho do veículo e a complexidade do design. Em média, um veículo comercial leva de 1 a 2 dias para instalação completa."
  },
  {
    question: "Posso personalizar o design para cada veículo?",
    answer: "Sim! Oferecemos total flexibilidade na personalização. Você pode ter designs únicos para diferentes veículos ou manter uma identidade visual consistente em toda a frota."
  },
  {
    question: "Qual a durabilidade do envelopamento?",
    answer: "Nossos materiais de alta qualidade garantem durabilidade de 5 a 7 anos, dependendo das condições de uso e exposição. Realizamos manutenção preventiva para garantir a melhor aparência."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}