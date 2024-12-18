import React from 'react';
import TransformationSection from '../components/transformation/TransformationSection';
import ValueProposition from '../components/home/ValueProposition';

export default function VisionPage() {
  return (
    <div className="min-h-screen">
      <TransformationSection />
      <ValueProposition />
    </div>
  );
}