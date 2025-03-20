import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ 
  children, 
  className = "", 
  hover = true 
}: CardProps) {
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow' : '';
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}