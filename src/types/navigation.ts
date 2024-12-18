import { ReactNode } from 'react';

export interface NavItem {
  to: string;
  icon: ReactNode;
  text: string;
}