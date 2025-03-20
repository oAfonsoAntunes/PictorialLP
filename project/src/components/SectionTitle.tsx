import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  textColor?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  className = "mb-16",
  textColor = "text-gray-900"
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl ${textColor === 'text-gray-900' ? 'text-gray-600' : 'text-blue-100'} max-w-3xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}