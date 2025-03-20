import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const problems = [
    {
      icon: 'alert',
      title: 'Falta de visibilidade',
      description: 'Seu negócio não se destaca em um mercado competitivo.'
    },
    {
      icon: 'trending',
      title: 'Oportunidade desperdiçada',
      description: 'A frota circula todos os dias, mas não gera reconhecimento de marca.'
    },
    {
      icon: 'dollar',
      title: 'Baixo retorno em publicidade',
      description: 'O custo é alto e o impacto é limitado na publicidade convencional.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero 
        title="Transforme cada quilômetro em um outdoor para a sua marca"
        subtitle="Material de Frotas Pictorial: aumente o alcance da sua empresa e gere impacto a cada curva."
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Solicite seu Orçamento Agora"
        onCtaClick={scrollToContact}
      />
      <Problems 
        title="Você está perdendo oportunidades de divulgar a sua marca?"
        problems={problems}
      />
      <Solution />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;