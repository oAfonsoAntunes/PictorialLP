import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = "py-20", children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}