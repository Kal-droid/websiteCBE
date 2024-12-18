import React from 'react';
import ServiceSection from '../components/services/ServiceSection';
import MarketInsights from '../components/sections/MarketInsights';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceSection />
      <MarketInsights />
    </div>
  );
}