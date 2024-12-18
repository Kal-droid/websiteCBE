import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  BarChart2, 
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import Container from './common/Container';
import Grid from './common/Grid';
import Text from './common/Text';
import AnimatedIcon from './common/AnimatedIcon';
import Divider from './common/Divider';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Instagram, href: 'https://instagram.com' }
];

const quickLinks = [
  { text: 'Markets', to: '/markets' },
  { text: 'News', to: '/news' },
  { text: 'About Us', to: '/about' },
  { text: 'Contact', to: '/contact' }
];

const legalLinks = [
  { text: 'Privacy Policy', to: '/privacy' },
  { text: 'Terms of Service', to: '/terms' },
  { text: 'Disclaimer', to: '/disclaimer' }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white">
      <Container className="py-12">
        <Grid cols={4} gap={8}>
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <AnimatedIcon>
                <BarChart2 className="h-8 w-8 text-accent group-hover:text-accent-light transition-colors" />
              </AnimatedIcon>
              <Text variant="h3">CBE Capital</Text>
            </Link>
            <Text variant="body" className="text-gray-300">
              Pioneering Ethiopia's financial future through innovative investment solutions and strategic partnerships.
            </Text>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <Text variant="h4">Contact Us</Text>
            <div className="space-y-3">
              {[
                { icon: Mail, text: 'contact@cbecapital.com' },
                { icon: Phone, text: '+251 116 681 888' },
                { icon: MapPin, text: 'Ras Desta Damtew Street\nAddis Ababa, Ethiopia' }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center space-x-3">
                  <AnimatedIcon className="text-accent">
                    <Icon className="h-5 w-5" />
                  </AnimatedIcon>
                  <Text variant="body">{text}</Text>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Text variant="h4">Quick Links</Text>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="hover:text-accent transition-colors flex items-center space-x-2"
                  >
                    <AnimatedIcon>
                      <ExternalLink className="h-4 w-4" />
                    </AnimatedIcon>
                    <Text variant="body">{link.text}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Text variant="h4">Legal</Text>
              <ul className="space-y-2">
                {legalLinks.map(link => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className="text-gray-300 hover:text-accent transition-colors"
                    >
                      <Text variant="body">{link.text}</Text>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <Text variant="h4">Follow Us</Text>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    <AnimatedIcon>
                      <Icon className="h-6 w-6" />
                    </AnimatedIcon>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Grid>

        <Divider className="my-8 border-white/10" />

        <Text variant="small" className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} CBE Capital. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}