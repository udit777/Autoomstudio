/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F97316', // Brand Orange
                    dark: '#1A1A1A', // Dark Charcoal
                    light: '#FFFFFF', // Professional White
                },
                secondary: {
                    DEFAULT: '#3B82F6', // Blue as secondary
                    success: '#10B981',
                    warning: '#F97316',
                    error: '#EF4444',
                    gray: '#6B7280',
                },
                service: {
                    social: '#E91E63',
                    automation: '#00D9FF',
                    infrastructure: '#0066FF',
                    datacenter: '#8B5CF6',
                    hosting: '#EC4899',
                    modernization: '#F59E0B',
                    software: '#6366F1',
                    marketing: '#14B8A6',
                    security: '#EF4444',
                    devops: '#10B981',
                    support: '#3B82F6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
            }
        },
    },
    plugins: [],
}
