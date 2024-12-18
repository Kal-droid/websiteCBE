import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import FinancialGridBackground from '../backgrounds/FinancialGridBackground';
import Container from '../common/Container';
import Text from '../common/Text';
import Button from '../common/Button';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-32">
      <FinancialGridBackground opacity={0.15} />
      
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl">
            <Text variant="h1" className="mb-6">
              CBE Capital: Pioneering Ethiopia's & Africa's Financial Future
            </Text>
            <Text variant="body" className="mb-8 text-accent-light">
              CBE Capital is committed to driving financial inclusion and empowerment across Ethiopia and the African continent.
            </Text>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                variant="primary"
                icon={<ArrowRight className="ml-2 h-5 w-5" />}
                iconPosition="right"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button variant="outline">
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}