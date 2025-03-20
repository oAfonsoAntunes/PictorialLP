import React, { useEffect } from 'react';

interface CalendlyProps {
  url: string;
  height?: number;
  className?: string;
}

export default function Calendly({ url, height = 700, className = '' }: CalendlyProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: 320, height }}
    />
  );
}