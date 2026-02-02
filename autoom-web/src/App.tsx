import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';

import { ProductsPage } from '@/pages/ProductsPage';
import { AiPrescriptionSaathiPage } from '@/pages/AiPrescriptionSaathiPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { AboutPage, ContactPage, BlogPage, PortfolioPage } from '@/pages/Placeholders';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/ai-prescription-saathi" element={<AiPrescriptionSaathiPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
