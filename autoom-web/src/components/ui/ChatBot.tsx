import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface ChatBotProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
    const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
        { text: "Hello! I'm the Autoom Studio assistant. How can I help you today?", isUser: false }
    ]);
    const [input, setInput] = useState("");

    const [sessionId] = useState(() => Math.random().toString(36).substring(7));

    const handleSend = async () => {
        if (!input.trim()) return;
        
        const userMessage = input;
        // Add user message
        setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
        setInput("");

        try {
            const response = await fetch("https://home.ausomemgr.com/webhook/Yaksha", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chatInput: userMessage,
                    message: userMessage,
                    sessionId: sessionId,
                }),
            });

            if (!response.ok) {
                console.error("Webhook error:", await response.text());
                setMessages(prev => [...prev, { 
                    text: "Sorry, I'm having trouble connecting right now. Please try again later.", 
                    isUser: false 
                }]);
                return;
            }

            const data = await response.json();
            let botText = "Sorry, I received an invalid response.";

            // If the response is an array, take the first item
            let responseObj = data;
            if (Array.isArray(data) && data.length > 0) {
                responseObj = data[0];
            }

            // Handle different possible response formats
            if (typeof responseObj === 'string') {
                botText = responseObj;
            } else if (responseObj && typeof responseObj === 'object') {
                if (responseObj.output) {
                    botText = responseObj.output;
                } else if (responseObj.text) {
                    botText = responseObj.text;
                } else if (responseObj.message) {
                    botText = responseObj.message;
                } else if (responseObj.response) {
                    botText = responseObj.response;
                } else {
                    botText = JSON.stringify(data); // Show full data if fields don't match
                }
            }

            setMessages(prev => [...prev, { 
                text: botText, 
                isUser: false 
            }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { 
                text: "Sorry, an error occurred communicating with the server.", 
                isUser: false 
            }]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
            {/* Header */}
            <div className="bg-[#8B5CF6] text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-semibold">Autoom Assistant</span>
                </div>
                <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full text-white transition-colors">
                    <X className="w-5 h-5" />
                </button>
            </div>
            
            {/* Messages Area */}
            <div className="h-80 md:h-96 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.isUser ? 'bg-[#8B5CF6] text-white self-end rounded-br-sm' : 'bg-white border border-gray-200 text-gray-800 self-start rounded-bl-sm shadow-sm'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..." 
                    className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                />
                <button onClick={handleSend} className="bg-[#8B5CF6] p-2 rounded-full text-white hover:bg-[#7e4ae8] transition-colors flex-shrink-0">
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
