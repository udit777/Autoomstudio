export interface ProductItem {
    id: string;
    title: string;
    path: string;
    description?: string;
}

export const products: ProductItem[] = [
    {
        id: 'ai-prescription-saathi',
        title: 'AI Prescription Saathi',
        path: '/products/ai-prescription-saathi',
        description: 'AI-powered prescription management.'
    },
    {
        id: 'analyzax',
        title: 'Analyzax',
        path: '/products/analyzax',
        description: 'Advanced data analytics platform.'
    },
    {
        id: 'mailify',
        title: 'Mailify',
        path: '/products/mailify',
        description: 'Email automation and marketing.'
    },
    {
        id: 'email-validator',
        title: 'Email Validator',
        path: '/products/email-validator',
        description: 'Ensure email list hygiene.'
    },
    {
        id: 'ai-hr-saathi',
        title: 'AI Hr Saathi',
        path: '/products/ai-hr-saathi',
        description: 'AI-driven HR management.'
    }
];
