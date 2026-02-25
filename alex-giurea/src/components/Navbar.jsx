import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Mail, Github, X, Facebook } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
    const navRef = useRef(null);
    const overlayRef = useRef(null);
    const [navState, setNavState] = useState('top');
    const [isConnectOpen, setIsConnectOpen] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -100',
                end: 99999,
                onUpdate: (self) => {
                    if (self.direction === 1 && self.progress > 0) {
                        setNavState('scrolled');
                    } else if (self.direction === -1 && self.progress > 0) {
                        setNavState('scrolled');
                    } else {
                        setNavState('top');
                    }
                }
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (isConnectOpen && overlayRef.current) {
            gsap.fromTo(overlayRef.current,
                { y: -20, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
            );
        }
    }, [isConnectOpen]);

    return (
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4" ref={navRef}>
            <nav
                className={`transition-all duration-500 ease-in-out px-6 py-3 rounded-[2rem] flex items-center gap-8 ${navState === 'top'
                    ? 'bg-transparent text-ghost'
                    : 'bg-deep-void/60 backdrop-blur-xl border border-white/5 text-ghost shadow-2xl'
                    }`}
            >
                <span
                    onClick={() => setCurrentPage('home')}
                    className="font-sans font-bold tracking-tight text-lg cursor-pointer hover:text-plasma transition-colors"
                >
                    Alex Giurea
                </span>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {currentPage === 'home' ? (
                        <>
                            <a href="#tennis" className="hover:text-plasma transition-colors">Tennis</a>
                            <a href="#ai" className="hover:text-plasma transition-colors">AI & Systems</a>
                            <a href="#projects" className="hover:text-plasma transition-colors">Projects</a>
                        </>
                    ) : null}
                    <button
                        onClick={() => setCurrentPage('resume')}
                        className={`transition-colors font-medium ${currentPage === 'resume' ? 'text-plasma' : 'hover:text-plasma'}`}
                    >
                        Resume
                    </button>
                </div>
                <button
                    onClick={() => setIsConnectOpen(!isConnectOpen)}
                    className="magnetic-btn bg-plasma text-white px-5 py-2 rounded-full text-sm font-semibold relative overflow-hidden group flex items-center gap-2"
                >
                    <span className="relative z-10 transition-colors group-hover:text-white">
                        {isConnectOpen ? 'Close' : "Let's Connect"}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
            </nav>

            {/* Connect Overlay */}
            {isConnectOpen && (
                <div
                    ref={overlayRef}
                    className="absolute top-[110%] left-1/2 -translate-x-1/2 bg-deep-void/90 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-[320px] flex flex-col gap-4 text-ghost"
                >
                    <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-4">
                        <span className="font-mono text-sm text-plasma">Contact Links</span>
                        <button onClick={() => setIsConnectOpen(false)} className="text-ghost/50 hover:text-white transition-colors">
                            <X size={16} />
                        </button>
                    </div>

                    <a href="https://www.instagram.com/alex_giurea22/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="bg-graphite p-2 rounded-lg group-hover:bg-plasma/20 group-hover:text-plasma transition-colors">
                            <Instagram size={20} />
                        </div>
                        <div>
                            <div className="font-sans font-bold text-sm text-ghost group-hover:text-white transition-colors">Instagram</div>
                            <div className="text-xs text-ghost/50 font-mono">@alex_giurea22</div>
                        </div>
                    </a>

                    <a href="https://ro.linkedin.com/in/alex-giurea-9a36491ba" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="bg-graphite p-2 rounded-lg group-hover:bg-[#0077b5]/20 group-hover:text-[#0077b5] transition-colors">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <div className="font-sans font-bold text-sm text-ghost group-hover:text-white transition-colors">LinkedIn</div>
                            <div className="text-xs text-ghost/50 font-mono">/in/alex-giurea-9a...</div>
                        </div>
                    </a>

                    <a href="https://github.com/AlexGiurea" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="bg-graphite p-2 rounded-lg group-hover:bg-white/10 group-hover:text-white transition-colors">
                            <Github size={20} />
                        </div>
                        <div>
                            <div className="font-sans font-bold text-sm text-ghost group-hover:text-white transition-colors">GitHub</div>
                            <div className="text-xs text-ghost/50 font-mono">/AlexGiurea</div>
                        </div>
                    </a>

                    <a href="https://www.facebook.com/alex.giurea.1/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="bg-graphite p-2 rounded-lg group-hover:bg-[#1877f2]/20 group-hover:text-[#1877f2] transition-colors">
                            <Facebook size={20} />
                        </div>
                        <div>
                            <div className="font-sans font-bold text-sm text-ghost group-hover:text-white transition-colors">Facebook</div>
                            <div className="text-xs text-ghost/50 font-mono">/alex.giurea.1</div>
                        </div>
                    </a>

                    <a href="mailto:alex.rares.giurea@gmail.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="bg-graphite p-2 rounded-lg group-hover:bg-red-500/20 group-hover:text-red-400 transition-colors">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="font-sans font-bold text-sm text-ghost group-hover:text-white transition-colors">Email</div>
                            <div className="text-xs text-ghost/50 font-mono truncate max-w-[180px]">alex.rares.giurea@gmail.com</div>
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
}
