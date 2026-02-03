import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { AiPrescriptionSaathiPage } from '@/pages/AiPrescriptionSaathiPage';
import { AiWorkspacePage } from '@/pages/AiWorkspacePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { AboutPage, BlogPage, PortfolioPage, CareerPage } from '@/pages/Placeholders';
import { ProcessAutomationPage } from '@/pages/ProcessAutomationPage';
import { SocialMediaServicesPage } from '@/pages/SocialMediaServicesPage';
import { SocialMediaManagementInfoPage } from '@/pages/SocialMediaManagementInfoPage';
import { SocialMediaPublishingInfoPage } from '@/pages/SocialMediaPublishingInfoPage';
import { SocialMediaContentCreationInfoPage } from '@/pages/SocialMediaContentCreationInfoPage';
import { AnalyticsReportingInfoPage } from '@/pages/AnalyticsReportingInfoPage';
import { AiInteractionInfoPage } from '@/pages/AiInteractionInfoPage';
import { MorePage } from '@/pages/MorePage';
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
        <Route path="/services/ai-workspace" element={<AiWorkspacePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/services/:category/:subCategory" element={<ServiceDetailPage />} />
        <Route path="/process-automation" element={<ProcessAutomationPage />} />
        <Route path="/process-automation/:subService" element={<ProcessAutomationPage />} />
        <Route path="/social-media-services" element={<SocialMediaServicesPage />} />
        <Route path="/more" element={<MorePage />} />

        {/* Social Media Details */}
        <Route path="/social-media-management-info" element={<SocialMediaManagementInfoPage />} />
        <Route path="/social-media-management" element={<SocialMediaManagementInfoPage />} />

        <Route path="/social-media-publishing-info" element={<SocialMediaPublishingInfoPage />} />
        <Route path="/social-media-publishing" element={<SocialMediaPublishingInfoPage />} />

        <Route path="/social-media-content-creation-description-info" element={<SocialMediaContentCreationInfoPage />} />
        <Route path="/social-media-content-creation" element={<SocialMediaContentCreationInfoPage />} />

        <Route path="/analytics-and-reporting-description-info" element={<AnalyticsReportingInfoPage />} />
        <Route path="/analytics-and-reporting" element={<AnalyticsReportingInfoPage />} />

        <Route path="/ai-driven-customer-interaction-description-info" element={<AiInteractionInfoPage />} />
        <Route path="/al-driven-customer-interaction" element={<AiInteractionInfoPage />} />
        <Route path="/ai-driven-customer-interaction" element={<AiInteractionInfoPage />} />

        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
