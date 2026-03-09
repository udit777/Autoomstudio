import React, { useState } from 'react';

interface ServicePopupFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const serviceCategories = [
    {
        title: "1.Social Media Services",
        items: [
            "Social Media Management",
            "Social Media Publishing",
            "Social Media Content Creation",
            "Analytics and Reporting",
            "AI-Driven Customer Interaction"
        ]
    },
    {
        title: "2.Process Automation Services",
        items: [
            "Automation tool Development",
            "Repetitive Task Automation",
            "Sales Process Automation",
            "Custom Bot development"
        ]
    },
    {
        title: "3.IT Infrastructure Services",
        items: [
            "IT Infrastructure Management Services",
            "Data Center Management",
            "Domain & Hosting Solutions",
            "Legacy System Modernization"
        ]
    },
    {
        title: "4.Software Development Services",
        items: [
            "Web Development Services",
            "UI/UX Design Services",
            "Custom Software Development",
            "Open Source Software Customization",
            "Mobile App Development",
            "Software Testing and Quality Assurance",
            "E-commerce Solutions"
        ]
    },
    {
        title: "5.Digital Marketing and Analytics",
        items: [
            "Pay-Per-Click (PPC) Advertising",
            "Digital Marketing Services",
            "Social Media Advertising",
            "Search Engine Optimization(SEO)",
            "Social Media Optimization (SMO)",
            "Web & Social Analytics"
        ]
    },
    {
        title: "6.Security and Compliances Services",
        items: [
            "Cybersecurity Services",
            "Data Backup and Recovery"
        ]
    },
    {
        title: "7.Communication and Collaboration",
        items: [
            "IT Project Management",
            "Content Management Systems (CMS) Development",
            "DevOps Services"
        ]
    },
    {
        title: "8.Support and Maintenance",
        items: [
            "IT Helpdesk and Support"
        ]
    }
];

export function ServicePopupForm({ isOpen, onClose }: ServicePopupFormProps) {
    const [sent, setSent] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => {
            setSent(false);
            onClose();
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-4xl max-h-full overflow-y-auto rounded-xl shadow-2xl bg-gradient-to-br from-[#8afdfd] via-[#d08bff] to-[#f44cd0] p-6 sm:p-8 text-black my-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black hover:bg-black/10 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition-colors"
                    aria-label="Close"
                >
                    &times;
                </button>

                {sent ? (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                        <div className="text-6xl mb-4">✅</div>
                        <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-gray-800 font-medium">We'll get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-2">
                        {/* Top Fields */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[15px] font-bold mb-1.5">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d08bff] focus:ring-1 focus:ring-[#d08bff]"
                                />
                            </div>

                            <div>
                                <label className="block text-[15px] font-bold mb-1.5">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d08bff] focus:ring-1 focus:ring-[#d08bff]"
                                />
                            </div>

                            <div>
                                <label className="block text-[15px] font-bold mb-1.5">
                                    Phone number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d08bff] focus:ring-1 focus:ring-[#d08bff]"
                                />
                            </div>

                            <div>
                                <label className="block text-[15px] font-bold mb-1.5">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Message"
                                    required
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d08bff] focus:ring-1 focus:ring-[#d08bff] resize-y"
                                />
                            </div>
                        </div>

                        {/* Checkboxes Section */}
                        <div className="pt-2">
                            <h3 className="text-lg font-extrabold mb-4">Choose your Service(s):</h3>

                            <div className="columns-1 md:columns-2 gap-8 space-y-8">
                                {serviceCategories.map((category, idx) => (
                                    <div key={idx} className="break-inside-avoid shadow-none">
                                        <h4 className="font-bold text-[15px] mb-3">{category.title}</h4>
                                        <div className="space-y-2">
                                            {category.items.map((item, itemIdx) => (
                                                <label key={itemIdx} className="flex items-start gap-2.5 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        className="mt-1 w-4 h-4 rounded border-gray-400 text-[#e48325] focus:ring-[#e48325] cursor-pointer"
                                                    />
                                                    <span className="text-[14px] font-medium leading-snug">{item}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 pb-2">
                            <button
                                type="submit"
                                className="w-full bg-[#e48325] hover:bg-[#d0731a] text-white font-medium py-3 rounded-lg transition-colors text-lg tracking-wide"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
