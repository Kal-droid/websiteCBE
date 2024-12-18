import React from 'react';
import { financialServices } from '../../data/services';
import ServiceCard from './ServiceCard';
import Section from '../common/Section';
import Text from '../common/Text';
import Grid from '../common/Grid';

export default function ServiceSection() {
  return (
    <Section className="bg-white">
      <Text 
        variant="h2" 
        className="text-center mb-12"
      >
        Comprehensive Financial Services
      </Text>
      <Grid cols={3} gap={8}>
        {financialServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Grid>
    </Section>
  );
}