import { Share2, ShieldCheck, Database, Server, Smartphone, Globe, Activity, Headphones, Zap, Box, Brain, Code, Monitor, BarChart, Lock, MessageSquare } from 'lucide-react';

export interface ServiceItem {
    id: string;
    title: string;
    description?: string;
    icon: any;
    path: string;
    subServices?: ServiceItem[];
}

export const services: ServiceItem[] = [
    {
        id: 'ai-workspace',
        title: 'AI Workspace',
        description: 'Intelligent workspaces for modern teams.',
        icon: Brain,
        path: '/services/ai-workspace',
    },
    {
        id: 'it-infrastructure',
        title: 'IT Infrastructure Services',
        description: 'Robust infrastructure for your business.',
        icon: Server,
        path: '/it-infrastructure-services',
        subServices: [
            {
                id: 'infra-mgmt',
                title: 'IT Infrastructure Management Services',
                icon: Server,
                path: '/services/infrastructure/management'
            },
            {
                id: 'datacenter',
                title: 'Data Center Management',
                icon: Database,
                path: '/services/infrastructure/datacenter'
            },
            {
                id: 'hosting',
                title: 'Domain & Hosting Solutions',
                icon: Globe,
                path: '/services/infrastructure/hosting'
            },
            {
                id: 'modernization',
                title: 'Legacy System Modernization',
                icon: Box,
                path: '/services/infrastructure/modernization'
            }
        ]
    },
    {
        id: 'software-dev',
        title: 'Software Development Services',
        description: 'Custom software solutions.',
        icon: Code,
        path: '/software-development-services',
        subServices: [
            {
                id: 'web-dev',
                title: 'Web Development Services',
                icon: Globe,
                path: '/services/software/web-development'
            },
            {
                id: 'ui-ux',
                title: 'UI/UX Design Services',
                icon: Monitor,
                path: '/services/software/ui-ux'
            },
            {
                id: 'custom-soft',
                title: 'Custom Software Development',
                icon: Code,
                path: '/services/software/custom'
            },
            {
                id: 'opensource',
                title: 'Open Source Software Customization',
                icon: Share2,
                path: '/services/software/opensource'
            },
            {
                id: 'mobile-app',
                title: 'Mobile App Development',
                icon: Smartphone,
                path: '/services/software/mobile'
            },
            {
                id: 'qa',
                title: 'Software Testing and Quality Assurance',
                icon: ShieldCheck,
                path: '/services/software/qa'
            },
            {
                id: 'ecommerce',
                title: 'E-commerce Solutions',
                icon: Activity,
                path: '/services/software/ecommerce'
            }
        ]
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing and Analytics',
        description: 'Data-driven marketing strategies.',
        icon: BarChart,
        path: '/digital-marketing-analytics',
        subServices: [
            {
                id: 'ppc',
                title: 'Pay-Per-Click (PPC) Advertising',
                icon: Zap,
                path: '/services/marketing/ppc'
            },
            {
                id: 'digital-mkt',
                title: 'Digital Marketing Services',
                icon: Share2,
                path: '/services/marketing/digital'
            },
            {
                id: 'social-ads',
                title: 'Social Media Advertising',
                icon: Share2,
                path: '/services/marketing/social-ads'
            },
            {
                id: 'seo',
                title: 'Search Engine Optimization(SEO)',
                icon: Activity,
                path: '/services/marketing/seo'
            },
            {
                id: 'smo',
                title: 'Social Media Optimization (SMO)',
                icon: Share2,
                path: '/services/marketing/smo'
            },
            {
                id: 'analytics',
                title: 'Web & Social Analytics',
                icon: BarChart,
                path: '/services/marketing/analytics'
            }
        ]
    },
    {
        id: 'security',
        title: 'Security and Compliance Services',
        description: 'Protecting your digital assets.',
        icon: Lock,
        path: '/security-compliance-services',
        subServices: [
            {
                id: 'cybersecurity',
                title: 'Cybersecurity Services',
                icon: ShieldCheck,
                path: '/services/security/cybersecurity'
            },
            {
                id: 'backup-recovery',
                title: 'Data Backup and Recovery',
                icon: Database,
                path: '/services/security/backup-recovery'
            }
        ]
    },
    {
        id: 'communication',
        title: 'Communication and Collaboration',
        description: 'Empowering team collaboration.',
        icon: MessageSquare,
        path: '/services/communication',
        subServices: [
            {
                id: 'project-mgmt',
                title: 'IT Project Management',
                icon: Activity,
                path: '/services/communication/project-mgmt'
            },
            {
                id: 'cms-dev',
                title: 'Content Management Systems (CMS) Development',
                icon: Box,
                path: '/services/communication/cms-dev'
            },
            {
                id: 'devops-services',
                title: 'DevOps Services',
                icon: Server,
                path: '/services/communication/devops'
            }
        ]
    },
    {
        id: 'support-main',
        title: 'Support and Maintenance',
        description: 'Reliable support for your business.',
        icon: Headphones,
        path: '/services/support',
        subServices: [
            {
                id: 'helpdesk-support',
                title: 'IT Helpdesk and Support',
                icon: Headphones,
                path: '/services/support/helpdesk'
            }
        ]
    }
];
