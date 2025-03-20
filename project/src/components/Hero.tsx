import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  onCtaClick
}: HeroProps) {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl">
          {subtitle}
        </p>
        <Button 
          size="lg"
          onClick={onCtaClick}
          className="transform transition-transform hover:scale-105"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}