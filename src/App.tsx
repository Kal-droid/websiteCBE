import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VisionPage from './pages/VisionPage';
import ServicesPage from './pages/ServicesPage';
import ExpertisePage from './pages/ExpertisePage';
import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="expertise" element={<ExpertisePage />} />
          <Route path="partnerships" element={<PartnershipsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}