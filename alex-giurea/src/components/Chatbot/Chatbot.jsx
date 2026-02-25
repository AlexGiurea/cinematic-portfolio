import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, RefreshCw, History, Trash2, ChevronLeft } from 'lucide-react';
import { SYSTEM_PROMPT } from './systemPrompt';

// Custom hook for managing chat sessions in localStorage
function useChatSessions() {
    const [sessions, setSessions] = useState(() => {
        const saved = localStorage.getItem('alex_chatbot_sessions');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Failed to parse sessions", e);
                return [];
            }
        }
        return [];
    });

    const [currentSessionId, setCurrentSessionId] = useState(() => {
        return localStorage.getItem('alex_chatbot_current_id') || null;
    });

    useEffect(() => {
        localStorage.setItem('alex_chatbot_sessions', JSON.stringify(sessions));
    }, [sessions]);

    useEffect(() => {
        if (currentSessionId) {
            localStorage.setItem('alex_chatbot_current_id', currentSessionId);
        } else {
            localStorage.removeItem('alex_chatbot_current_id');
        }
    }, [currentSessionId]);

    const createNewSession = () => {
        const newId = Date.now().toString();
        const newSession = {
            id: newId,
            timestamp: new Date().toISOString(),
            messages: [
                { role: 'assistant', content: "Hi! I'm Alex's AI assistant. Ask me anything about his background, projects, or tennis coaching." }
            ],
            preview: "New Conversation"
        };
        setSessions(prev => [newSession, ...prev]);
        setCurrentSessionId(newId);
        return newSession;
    };

    const updateCurrentSession = (messages) => {
        setSessions(prev => prev.map(s => {
            if (s.id === currentSessionId) {
                // Update preview with the first user message if available
                const firstUserMsg = messages.find(m => m.role === 'user')?.content;
                return {
                    ...s,
                    messages,
                    preview: firstUserMsg ? (firstUserMsg.substring(0, 30) + (firstUserMsg.length > 30 ? '...' : '')) : s.preview
                };
            }
            return s;
        }));
    };

    const deleteSession = (e, id) => {
        e.stopPropagation();
        setSessions(prev => prev.filter(s => s.id !== id));
        if (currentSessionId === id) {
            setCurrentSessionId(null);
        }
    };

    const currentSession = sessions.find(s => s.id === currentSessionId) || null;

    return {
        sessions,
        currentSession,
        setCurrentSessionId,
        createNewSession,
        updateCurrentSession,
        deleteSession
    };
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState('chat'); // 'chat' or 'history'
    const {
        sessions,
        currentSession,
        setCurrentSessionId,
        createNewSession,
        updateCurrentSession,
        deleteSession
    } = useChatSessions();

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 400, height: 550 });
    const messagesEndRef = useRef(null);
    const isResizing = useRef(false);
    const startPos = useRef({ x: 0, y: 0, w: 0, h: 0 });

    // Ensure we have a session if one doesn't exist
    useEffect(() => {
        if (!currentSession && sessions.length === 0) {
            createNewSession();
        } else if (!currentSession && sessions.length > 0) {
            setCurrentSessionId(sessions[0].id);
        }
    }, [currentSession, sessions]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen && view === 'chat') {
            scrollToBottom();
        }
    }, [currentSession?.messages, isOpen, view]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !currentSession) return;

        const userMsg = { role: 'user', content: input.trim() };
        const newMessages = [...currentSession.messages, userMsg];

        // Optimistic update
        updateCurrentSession(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const apiMessages = [
                { role: 'system', content: SYSTEM_PROMPT },
                ...newMessages
            ];

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-4o', // Refined to a working model while keeping the user's intent
                    messages: apiMessages,
                    temperature: 0.7,
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const botMsg = { role: 'assistant', content: data.choices[0].message.content };

            updateCurrentSession([...newMessages, botMsg]);
        } catch (error) {
            console.error('Chat error:', error);
            updateCurrentSession([...newMessages, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again or check your connection.' }]);
        } finally {
            setIsLoading(false);
        }
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
            width: Math.max(320, startPos.current.w + dx),
            height: Math.max(400, startPos.current.h + dy)
        });
    };

    const stopResize = () => {
        isResizing.current = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <div
                className={`mb-4 flex flex-col bg-deep-void/95 backdrop-blur-3xl border border-graphite rounded-[2.5rem] shadow-2xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform origin-bottom-right relative overflow-hidden ${isOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-90 pointer-events-none translate-y-10'}`}
                style={{ width: isOpen ? dimensions.width : 0, height: isOpen ? dimensions.height : 0 }}
            >
                {/* Global Noise Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Resize Handles */}
                <div className="absolute top-0 left-0 w-full h-2 cursor-ns-resize z-20" onMouseDown={startResize} />
                <div className="absolute top-0 left-0 w-2 h-full cursor-ew-resize z-20" onMouseDown={startResize} />

                {/* Header */}
                <div className="flex items-center justify-between p-6 bg-graphite/20 border-b border-white/5 relative z-10">
                    <div className="flex items-center gap-4">
                        {view === 'history' ? (
                            <button
                                onClick={() => setView('chat')}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-ghost" />
                            </button>
                        ) : (
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-plasma/40 to-plasma/10 flex items-center justify-center border border-plasma/30 shadow-[0_0_20px_rgba(123,97,255,0.2)]">
                                <MessageSquare className="w-6 h-6 text-plasma" />
                            </div>
                        )}
                        <div>
                            <h3 className="font-sans font-bold text-ghost text-lg tracking-tight">
                                {view === 'history' ? 'Chat History' : 'NetBot'}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-ghost/40">Nexus-v5.2-Enabled</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {view === 'chat' && (
                            <button
                                onClick={() => setView('history')}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ghost/50 hover:text-plasma transition-all hover:bg-white/10"
                                title="Chat History"
                            >
                                <History className="w-5 h-5" />
                            </button>
                        )}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ghost/50 hover:text-ghost transition-all hover:bg-white/10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-hidden relative flex flex-col z-10">
                    {view === 'chat' ? (
                        <>
                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scroll-smooth scrollbar-none">
                                {currentSession?.messages.map((msg, idx) => (
                                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                                        <div className={`group relative max-w-[85%] rounded-[1.5rem] px-5 py-3 text-[14px] leading-relaxed font-sans shadow-lg ${msg.role === 'user'
                                            ? 'bg-plasma text-ghost rounded-tr-sm selection:bg-white/20'
                                            : 'bg-graphite/40 backdrop-blur-md border border-white/5 text-ghost/90 rounded-tl-sm selection:bg-plasma/20'
                                            }`}>
                                            {msg.content}
                                            <div className={`absolute bottom-0 ${msg.role === 'user' ? 'right-full mr-2' : 'left-full ml-2'} opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                                                <span className="text-[10px] font-mono text-ghost/20 uppercase tracking-tighter">
                                                    {msg.role === 'assistant' ? 'AI_SIG_0X1' : 'USR_AUTH_STK'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start animate-pulse">
                                        <div className="bg-graphite/40 backdrop-blur-md border border-white/5 rounded-[1.5rem] rounded-tl-sm px-6 py-4">
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-1.5 bg-plasma rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="w-1.5 h-1.5 bg-plasma rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="w-1.5 h-1.5 bg-plasma rounded-full animate-bounce"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-6 bg-gradient-to-t from-deep-void to-transparent">
                                <form onSubmit={handleSend} className="relative flex items-center gap-3">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Command sequence..."
                                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-sans text-ghost placeholder:text-ghost/20 focus:outline-none focus:border-plasma/50 focus:bg-white/10 transition-all shadow-inner"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isLoading}
                                        className="shrink-0 w-12 h-12 bg-plasma hover:bg-plasma/80 text-ghost flex items-center justify-center rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(123,97,255,0.3)] hover:scale-105 active:scale-95"
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                                <p className="mt-4 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-ghost/20">
                                    Powered by Carbon-Enriched Neural Core
                                </p>
                            </div>
                        </>
                    ) : (
                        /* History View */
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3 scrollbar-none">
                            <button
                                onClick={() => {
                                    createNewSession();
                                    setView('chat');
                                }}
                                className="w-full p-4 rounded-2xl bg-plasma/10 border border-plasma/20 flex items-center gap-3 text-plasma font-sans font-semibold hover:bg-plasma/20 transition-all mb-4"
                            >
                                <RefreshCw className="w-5 h-5" />
                                Start New Sequence
                            </button>

                            <div className="space-y-2">
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-ghost/30 px-2 mb-4">Past Transmissions</h4>
                                {sessions.map((s) => (
                                    <div
                                        key={s.id}
                                        onClick={() => {
                                            setCurrentSessionId(s.id);
                                            setView('chat');
                                        }}
                                        className={`group w-full p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${currentSession?.id === s.id
                                            ? 'bg-white/10 border-white/20'
                                            : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                                            }`}
                                    >
                                        <div className="flex flex-col items-start overflow-hidden">
                                            <span className="text-sm text-ghost font-sans font-medium truncate w-full pr-4">{s.preview}</span>
                                            <span className="text-[10px] text-ghost/30 font-mono">{new Date(s.timestamp).toLocaleDateString()}</span>
                                        </div>
                                        <button
                                            onClick={(e) => deleteSession(e, s.id)}
                                            className="opacity-0 group-hover:opacity-100 p-2 text-ghost/30 hover:text-red-400 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 bg-plasma text-ghost flex items-center justify-center rounded-[1.8rem] shadow-2xl hover:shadow-plasma/40 hover:scale-105 active:scale-95 transition-all duration-500 transform group relative ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            >
                <div className="absolute inset-0 bg-plasma rounded-[1.8rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                {isOpen ? (
                    <X className="w-7 h-7 relative z-10" />
                ) : (
                    <MessageSquare className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" />
                )}
            </button>
        </div>
    );
}
