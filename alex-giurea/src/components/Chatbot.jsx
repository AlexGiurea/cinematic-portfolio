import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, RefreshCw } from 'lucide-react';

const SYSTEM_PROMPT = `
You are the personal AI assistant for Alex Giurea, representing him on his website.
Use the following context to answer questions about Alex. Be concise, professional, and friendly.

Context:
Title: Alexandru (Alex) Giurea
Senior Business Analytics student, collegiate tennis athlete, aspiring tennis coach, and builder of AI powered apps and automations.

Quick summary:
Senior at Lincoln Memorial University in his last semester (Business Analytics), men’s tennis team member. Aspiring tennis coach and builds applications, websites, SaaS, AI agent workflows.

Experience:
- Tennis Professional (May - Aug 2025): Tarratine Club of Dark Harbor, Islesboro, Maine.
- Collegiate Athlete (Dec 2020 - current): LMU Men's Tennis.
- Tennis Coach (May 2021 - July 2023): Florin Mergea Tennis Academy.

Projects:
- DrawGen: Next.js web app for tennis tournament draws and scheduling. 
- protennisjobs-ai-scraper: AI scraper, fit scoring, auto emails for tennis pro jobs.

Interests: Music, tennis, beach volleyball, designing interfaces, AI building.

Answer in a helpful, conversational tone as an AI assistant.
`;

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        const saved = sessionStorage.getItem('alex_chatbot_history');
        return saved ? JSON.parse(saved) : [
            { role: 'assistant', content: "Hi! I'm Alex's AI assistant. Ask me anything about his background, projects, or tennis coaching." }
        ];
    });
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 384, height: 500 });
    const messagesEndRef = useRef(null);
    const isResizing = useRef(false);
    const startPos = useRef({ x: 0, y: 0, w: 0, h: 0 });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        sessionStorage.setItem('alex_chatbot_history', JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleNewChat = () => {
        const initialMessages = [{ role: 'assistant', content: "Hi! I'm Alex's AI assistant. Ask me anything about his background, projects, or tennis coaching." }];
        setMessages(initialMessages);
        sessionStorage.setItem('alex_chatbot_history', JSON.stringify(initialMessages));
    };

    const startResize = (e) => {
        isResizing.current = true;
        startPos.current = {
            x: e.clientX,
            y: e.clientY,
            w: dimensions.width,
            h: dimensions.height
        };
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    };

    const resize = (e) => {
        if (!isResizing.current) return;
        const dx = startPos.current.x - e.clientX;
        const dy = startPos.current.y - e.clientY;
        setDimensions({
            width: Math.max(300, startPos.current.w + dx),
            height: Math.max(400, startPos.current.h + dy)
        });
    };

    const stopResize = () => {
        isResizing.current = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = { role: 'user', content: input.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const apiMessages = [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages,
                userMsg
            ];

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-5.2',
                    reasoning_effort: 'low',
                    messages: apiMessages,
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("OpenAI error:", errorData);
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMsg = { role: 'assistant', content: data.choices[0].message.content };

            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Oops, something went wrong. Please check the API key in the .env file or try again later.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <div
                className={`mb-4 flex flex-col bg-deep-void/95 backdrop-blur-xl border border-graphite rounded-3xl shadow-2xl transition-all duration-300 transform origin-bottom-right relative overflow-hidden ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}
                style={{ width: isOpen ? dimensions.width : 0, height: isOpen ? dimensions.height : 0 }}
            >
                {/* Resize Handles */}
                <div
                    className="absolute top-0 left-0 w-full h-1 cursor-ns-resize hover:bg-plasma/50 z-20"
                    onMouseDown={startResize}
                />
                <div
                    className="absolute top-0 left-0 w-1 h-full cursor-ew-resize hover:bg-plasma/50 z-20"
                    onMouseDown={startResize}
                />
                <div
                    className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize hover:bg-plasma/50 z-30"
                    onMouseDown={startResize}
                />

                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-graphite/50 border-b border-graphite">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-plasma/20 flex items-center justify-center border border-plasma/50">
                            <MessageSquare className="w-4 h-4 text-plasma" />
                        </div>
                        <div>
                            <h3 className="font-sans font-semibold text-ghost text-sm">NetBot</h3>
                            <p className="font-mono text-xs text-ghost/50 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleNewChat}
                            title="Start New Chat"
                            className="text-ghost/50 hover:text-plasma transition-colors p-1"
                        >
                            <RefreshCw className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-ghost/50 hover:text-ghost transition-colors p-1"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-graphite scrollbar-track-transparent">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm font-sans ${msg.role === 'user'
                                ? 'bg-plasma text-ghost rounded-tr-sm'
                                : 'bg-graphite/80 border border-graphite text-ghost/90 rounded-tl-sm'
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-graphite/80 border border-graphite rounded-2xl rounded-tl-sm px-4 py-3">
                                <Loader2 className="w-4 h-4 text-plasma animate-spin" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-3 bg-graphite/30 border-t border-graphite flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about Alex..."
                        className="flex-1 bg-deep-void border border-graphite rounded-xl px-4 py-2 text-sm font-sans text-ghost placeholder:text-ghost/30 focus:outline-none focus:border-plasma/50 transition-colors"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="shrink-0 bg-plasma hover:bg-plasma/90 text-ghost p-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed magnetic-btn"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 bg-plasma text-ghost flex items-center justify-center rounded-full shadow-lg hover:shadow-plasma/20 transition-all magnetic-btn group ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            >
                {isOpen ? (
                    <X className="w-6 h-6 transition-transform" />
                ) : (
                    <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                )}
            </button>
        </div>
    );
}
