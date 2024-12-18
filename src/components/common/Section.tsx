import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  containerClassName?: string;
}

export default function Section({
  children,
  className = '',
  containerSize = 'lg',
  containerClassName = ''
}: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}