import React from 'react';
import { AlertCircle, TrendingDown, DollarSign, DivideIcon as LucideIcon } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Card from './Card';

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProblemsProps {
  title: string;
  problems: Array<{
    title: string;
    description: string;
    icon: 'alert' | 'trending' | 'dollar';
  }>;
}

const iconMap: Record<string, LucideIcon> = {
  alert: AlertCircle,
  trending: TrendingDown,
  dollar: DollarSign
};

export default function Problems({ title, problems }: ProblemsProps) {
  return (
    <Section className="py-20 bg-gray-50">
      <SectionTitle title={title} />
      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => {
          const Icon = iconMap[problem.icon];
          return (
            <Card key={index}>
              <div className="mb-6">
                <Icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}