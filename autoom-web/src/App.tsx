import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { AiPrescriptionSaathiPage } from '@/pages/AiPrescriptionSaathiPage';
import { AiWorkspacePage } from '@/pages/AiWorkspacePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { AboutPage } from '@/pages/AboutPage';
import { CareerPage } from '@/pages/CareerPage';
import { PortfolioPage } from '@/pages/Placeholders';
import { BlogPage } from '@/pages/BlogPage';
import { AISocialMediaManagerBlogPage } from '@/pages/AISocialMediaManagerBlogPage';
import { AIEnableCRMAgentBlogPage } from '@/pages/AIEnableCRMAgentBlogPage';
import { AILeadGenerationAgentBlogPage } from '@/pages/AILeadGenerationAgentBlogPage';
import { AIEmailAssistantBlogPage } from '@/pages/AIEmailAssistantBlogPage';
import { AIResearchAssistantBlogPage } from '@/pages/AIResearchAssistantBlogPage';
import { AIVoiceCallingAgentBlogPage } from '@/pages/AIVoiceCallingAgentBlogPage';
import { DataAnalystAIAgentBlogPage } from '@/pages/DataAnalystAIAgentBlogPage';
import { CustomerSupportAIAgentBlogPage } from '@/pages/CustomerSupportAIAgentBlogPage';
import { Industry40BlogPage } from '@/pages/Industry40BlogPage';
import { Industry40RevolutionBlogPage } from '@/pages/Industry40RevolutionBlogPage';
import { Industry40OverviewBlogPage } from '@/pages/Industry40OverviewBlogPage';
import { ProcessAutomationPage } from '@/pages/ProcessAutomationPage';
import { SocialMediaServicesPage } from '@/pages/SocialMediaServicesPage';
import { SocialMediaManagementInfoPage } from '@/pages/SocialMediaManagementInfoPage';
import { SocialMediaPublishingInfoPage } from '@/pages/SocialMediaPublishingInfoPage';
import { SocialMediaContentCreationInfoPage } from '@/pages/SocialMediaContentCreationInfoPage';
import { AnalyticsReportingInfoPage } from '@/pages/AnalyticsReportingInfoPage';
import { AiInteractionInfoPage } from '@/pages/AiInteractionInfoPage';
import { ITInfrastructurePage } from '@/pages/ITInfrastructurePage';
import { ITInfrastructureManagementInfoPage } from '@/pages/ITInfrastructureManagementInfoPage';
import { SoftwareDevelopmentPage } from '@/pages/SoftwareDevelopmentPage';
import { DigitalMarketingPage } from '@/pages/DigitalMarketingPage';
import { SecurityCompliancePage } from '@/pages/SecurityCompliancePage';
import { CommunicationCollaborationPage } from '@/pages/CommunicationCollaborationPage';
import { SupportMaintenancePage } from '@/pages/SupportMaintenancePage';
import { PricingPage } from '@/pages/PricingPage';
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
        <Route path="/it-infrastructure-services" element={<ITInfrastructurePage />} />
        <Route path="/it-infrastructure-management" element={<ITInfrastructureManagementInfoPage />} />
        <Route path="/it-infrastructure-management-info" element={<ITInfrastructureManagementInfoPage />} />
        <Route path="/software-development-services" element={<SoftwareDevelopmentPage />} />
        <Route path="/digital-marketing-analytics" element={<DigitalMarketingPage />} />
        <Route path="/security-compliance-services" element={<SecurityCompliancePage />} />
        <Route path="/communication-collaboration" element={<CommunicationCollaborationPage />} />
        <Route path="/support-and-maintenance" element={<SupportMaintenancePage />} />
        <Route path="/pricing" element={<PricingPage />} />
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
        <Route path="/blog/ai-social-media-manager" element={<AISocialMediaManagerBlogPage />} />
        <Route path="/blog/ai-enable-crm-agent" element={<AIEnableCRMAgentBlogPage />} />
        <Route path="/blog/ai-lead-generation-agent" element={<AILeadGenerationAgentBlogPage />} />
        <Route path="/blog/ai-email-assistant" element={<AIEmailAssistantBlogPage />} />
        <Route path="/blog/ai-research-assistant" element={<AIResearchAssistantBlogPage />} />
        <Route path="/blog/ai-voice-calling-agent" element={<AIVoiceCallingAgentBlogPage />} />
        <Route path="/blog/data-analyst-ai-agent" element={<DataAnalystAIAgentBlogPage />} />
        <Route path="/blog/customer-support-ai-agent" element={<CustomerSupportAIAgentBlogPage />} />
        <Route path="/blog/industry-4-0-transforming" element={<Industry40BlogPage />} />
        <Route path="/blog/industry-4-0-revolution" element={<Industry40RevolutionBlogPage />} />
        <Route path="/blog/industry-4-0" element={<Industry40OverviewBlogPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
