import React from 'react';
import { motion } from 'framer-motion';
import { FinancialService } from '../../types/services';
import { PiggyBank, BarChart2, Shield } from 'lucide-react';
import Card from '../common/Card';
import Text from '../common/Text';
import AnimatedIcon from '../common/AnimatedIcon';

const iconMap = {
  'piggy-bank': PiggyBank,
  'bar-chart': BarChart2,
  'shield': Shield
};

interface ServiceCardProps {
  service: FinancialService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Text variant="h3" className="mb-2 text-primary">{service.title}</Text>
            {Icon && (
              <AnimatedIcon>
                <Icon className="h-8 w-8 text-accent" />
              </AnimatedIcon>
            )}
          </div>
        </div>
        <Text variant="body" className="text-gray-600 mb-4">{service.description}</Text>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center text-sm text-gray-700">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}