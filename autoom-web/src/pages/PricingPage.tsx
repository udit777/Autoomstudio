import { Section } from '@/components/ui/Section';
import { Check } from 'lucide-react';

export function PricingPage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7] pt-[57px] font-sans">
            {/* Header */}
            <div className="bg-[#0e5863] py-8 text-center">
                <h1 className="text-4xl font-bold text-white tracking-wide">Pricing</h1>
            </div>

            <Section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-gray-600 mb-2">Choose the perfect plan for your business needs</p>
                        <h2 className="text-2xl font-bold text-[#0e5863]">Monthly Plans & Pricing</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
                        {/* Starter */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-400">
                            <h3 className="text-2xl font-bold text-[#0e5863] mb-2">Starter</h3>
                            <p className="text-xs text-gray-500 italic mb-4">Small businesses, new ventures, solo entrepreneurs</p>
                            <div className="text-xl font-bold text-orange-500 mb-6">₹15,000 – ₹25,000 <span className="text-sm font-normal text-orange-400">/ month</span></div>
                            <hr className="border-gray-200 mb-6" />
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Basic Social Media Content Creation + Posting (8-12 posts/month across 1-2 platforms)</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Basic Analytics & Reporting</li>
                            </ul>
                        </div>

                        {/* Growth */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-400">
                            <h3 className="text-2xl font-bold text-[#0e5863] mb-2">Growth</h3>
                            <p className="text-xs text-gray-500 italic mb-4">Small to mid-size businesses wanting consistent presence & engagement</p>
                            <div className="text-xl font-bold text-orange-500 mb-6">₹30,000 – ₹50,000 <span className="text-sm font-normal text-orange-400">/ month</span></div>
                            <hr className="border-gray-200 mb-6" />
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Social Media Management (posting + engagement + posting scheduling)</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Content Creation (graphics + simple visuals)</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Analytics & Reporting</li>
                            </ul>
                        </div>

                        {/* Business */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-400 md:col-span-2 lg:col-span-1">
                            <h3 className="text-2xl font-bold text-[#0e5863] mb-2">Business</h3>
                            <p className="text-xs text-gray-500 italic mb-4">Growing brands / SMEs seeking full social media + digital marketing + partial automation</p>
                            <div className="text-xl font-bold text-orange-500 mb-6">₹60,000 – ₹1,00,000 <span className="text-sm font-normal text-orange-400">/ month</span></div>
                            <hr className="border-gray-200 mb-6" />
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Everything in Growth</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Social Media Advertising / PPC (basic campaigns)</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> SMO / SEO (basic)</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> AI-driven customer interaction (chatbots)</li>
                            </ul>
                        </div>

                        {/* Enterprise / Premium */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-400 md:col-span-2 lg:col-span-1">
                            <h3 className="text-2xl font-bold text-[#0e5863] mb-2">Enterprise / Premium</h3>
                            <p className="text-xs text-gray-500 italic mb-4">Large businesses, e-commerce / high demand brands, agencies needing full services</p>
                            <div className="text-xl font-bold text-orange-500 mb-6">₹1,50,000 – ₹3,00,000+ <span className="text-sm font-normal text-orange-400">/ month</span></div>
                            <hr className="border-gray-200 mb-6" />
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Full Social Media + Content + Ads + Automation</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Advanced Analytics</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Dedicated Account Manager</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> 24/7 Support</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Custom Bot / Automation / Integrations</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Digital Marketing</li>
                                <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" /> Web Maintenance / Hosting as needed</li>
                            </ul>
                        </div>
                    </div>

                    {/* AI Workspace Services */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[#0e5863] mb-2">AI Workspace Services (AuSoMeMgr)</h2>
                        <p className="text-sm text-gray-500">Intelligent AI agents designed to streamline and supercharge your professional tasks</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
                        {/* AI Social Media Agent */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-[#0e5863] mb-4">AI Social Media Agent</h3>
                            <p className="text-xs text-gray-600 mb-4 leading-relaxed">Advanced automation solution for managing your online presence, integrating AI with social media strategies to enhance engagement and streamline operations.</p>
                            <ul className="space-y-2 mb-6 text-sm text-gray-700">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> AI-Driven Customer Interaction</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Smart Scheduling</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Content Creation Support</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Comprehensive Analytics and Reporting</li>
                            </ul>
                            <div className="text-orange-500 font-bold">Starting from ₹9,999</div>
                        </div>

                        {/* AI Email Assistant Agent */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-[#0e5863] mb-4">AI Email Assistant Agent</h3>
                            <p className="text-xs text-gray-600 mb-4 leading-relaxed">Intelligent email management agent that handles communication, prioritization, and automated responses to optimize your email workflow.</p>
                            <ul className="space-y-2 mb-6 text-sm text-gray-700">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Automated Email Responses</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Smart Email Prioritization</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Email Organization & Management</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Integration with CRM Systems</li>
                            </ul>
                            <div className="text-orange-500 font-bold">Starting from ₹9,999</div>
                        </div>

                        {/* AI Enable CRM Agent */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-[#0e5863] mb-4">AI Enable CRM Agent</h3>
                            <p className="text-xs text-gray-600 mb-4 leading-relaxed">Powerful CRM automation agent that manages contacts, tracks interactions, and provides intelligent insights for better customer relationship management.</p>
                            <ul className="space-y-2 mb-6 text-sm text-gray-700">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Contact Management & Organization</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Interaction Tracking & Analytics</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Automated Follow-ups</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Customer Insights & Reporting</li>
                            </ul>
                            <div className="text-orange-500 font-bold">Starting from ₹9,999</div>
                        </div>

                        {/* AI Research Assistant */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-[#0e5863] mb-4">AI Research Assistant</h3>
                            <p className="text-xs text-gray-600 mb-4 leading-relaxed">Intelligent research agent that conducts web research, analyzes data, and provides comprehensive insights to support your decision-making process.</p>
                            <ul className="space-y-2 mb-6 text-sm text-gray-700">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Web Research & Data Collection</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Data Analysis & Insights</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Document Creation & Organization</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Automated Report Generation</li>
                            </ul>
                            <div className="text-orange-500 font-bold">Starting from ₹9,999</div>
                        </div>
                    </div>

                    {/* One-time / Project-based Services */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[#0e5863] mb-2">One-time / Project-based Services</h2>
                        <p className="text-sm text-gray-500">For services that are less ongoing and more project-based</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                        {/* Small Projects */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-[#0e5863] mb-6">Small Projects</h3>
                            <ul className="space-y-2 mb-6 text-xs text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Custom Software / Mobile App / Web Development</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> IT Infrastructure Setup / Hosting</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Domain / Hosting Setup</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> One-time PPC / Ad Campaign launch</li>
                            </ul>
                            <div className="text-lg font-bold text-orange-500">₹50,000 – ₹1,50,000</div>
                        </div>

                        {/* Medium Projects */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-[#0e5863] mb-6">Medium Projects</h3>
                            <ul className="space-y-2 mb-6 text-xs text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Legacy System Modernization</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Custom Bot development</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Process Automation</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Automation Tool Development</li>
                            </ul>
                            <div className="text-lg font-bold text-orange-500">₹2,00,000 – ₹5,00,000</div>
                        </div>

                        {/* Large / Enterprise Projects */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-[#0e5863] mb-6">Large / Enterprise Projects</h3>
                            <ul className="space-y-2 mb-6 text-xs text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Enterprise-grade Custom Software</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Data center migration</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Infrastructure overhaul</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Complex Automation Solutions</li>
                            </ul>
                            <div className="text-lg font-bold text-orange-500">₹5,00,000 – ₹15,00,000+</div>
                            <p className="text-xs text-gray-400 mt-1">(depending on complexity)</p>
                        </div>
                    </div>

                    {/* Add-ons & Flexible Options */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[#0e5863] mb-8">Add-ons & Flexible Options</h2>
                        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-left space-y-8">
                            <div>
                                <h4 className="font-bold text-[#0e5863] text-sm">Extra Social Posts</h4>
                                <p className="text-xs text-gray-500">Additional posts beyond plan quota</p>
                                <p className="text-sm font-bold text-orange-500">₹1,200 – ₹2,000 per additional post</p>
                                <hr className="border-gray-100 mt-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0e5863] text-sm">Rush / Emergency Services</h4>
                                <p className="text-xs text-gray-500">Rush content creation or campaign launch</p>
                                <p className="text-sm font-bold text-orange-500">25-50% premium surcharge over base rate</p>
                                <hr className="border-gray-100 mt-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0e5863] text-sm">Dedicated Support / Maintenance Retainer</h4>
                                <p className="text-xs text-gray-500">For clients needing after-hours, 24/7 support</p>
                                <p className="text-sm font-bold text-orange-500">₹10,000 – ₹30,000 per month (depending on severity)</p>
                                <hr className="border-gray-100 mt-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0e5863] text-sm">Bundle Pricing Discount</h4>
                                <p className="text-xs text-gray-500">When combining multiple service categories (Social Media + Digital Marketing + Automation)</p>
                                <p className="text-sm font-bold text-orange-500">10-20% discount on combined services</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
