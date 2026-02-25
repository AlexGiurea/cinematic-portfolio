import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#030305] rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] text-ghost py-12 sm:py-16 px-4 sm:px-6 md:px-16 flex flex-col items-center mt-auto border-t border-white/5 z-20 relative overflow-x-hidden">
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start md:items-center gap-10 md:gap-12">

                <div className="flex flex-col gap-4 max-w-sm order-1 w-full">
                    <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight">Alex Giurea</h2>
                    <p className="text-ghost/50 text-sm leading-relaxed">
                        Senior Business Analytics student & collegiate tennis athlete building AI-powered web apps and automations.
                    </p>
                    <div className="flex items-center gap-3 mt-2 bg-white/5 w-max px-4 py-2 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ghost/80">System Operational</span>
                    </div>
                </div>

                <div className="justify-self-center md:justify-self-center perspective-1000 order-2 w-full flex justify-center">
                    <a
                        href="/images/footer-feature.jpeg"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative block w-full max-w-[280px] sm:max-w-[320px] md:w-[290px] md:max-w-none lg:w-[340px] magnetic-link"
                        aria-label="Open footer feature image"
                    >
                        <div className="absolute inset-x-10 -bottom-8 h-10 rounded-full bg-plasma/35 blur-2xl transition-all duration-500 md:group-hover:opacity-100 md:group-hover:blur-3xl"></div>
                        <div className="preserve-3d relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/12 to-white/[0.03] p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] md:shadow-[0_24px_50px_rgba(0,0,0,0.55)] transition-all duration-500 active:scale-[0.98] md:[transform:rotateX(0deg)_rotateY(0deg)_translateY(0)] md:group-hover:[transform:rotateX(8deg)_rotateY(-10deg)_translateY(-6px)]">
                            <img
                                src="/images/footer-feature.jpeg"
                                alt="Featured footer visual"
                                className="h-36 sm:h-40 md:h-44 w-full rounded-[1.25rem] md:rounded-[1.65rem] object-cover transition-transform duration-700 group-active:scale-[1.02] md:group-hover:scale-[1.04]"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-1.5 rounded-[1.25rem] md:rounded-[1.65rem] bg-gradient-to-t from-[#030305]/80 via-transparent to-[#7B61FF]/15"></div>
                            <div className="pointer-events-none absolute bottom-3 left-3 md:bottom-4 md:left-4 rounded-full border border-white/20 bg-[#030305]/65 px-2.5 py-0.5 md:px-3 md:py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-ghost/85 backdrop-blur-sm">
                                Featured Moment
                            </div>
                        </div>
                    </a>
                </div>

                <div className="flex flex-row flex-wrap gap-8 sm:gap-12 md:justify-self-end order-3">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-mono text-xs text-plasma uppercase tracking-wider">Connect</h4>
                        <div className="flex flex-col gap-3 text-sm text-ghost/70">
                            <a href="https://github.com/AlexGiurea" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 magnetic-link">
                                <Github size={16} /> GitHub
                            </a>
                            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 magnetic-link">
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 magnetic-link">
                                <Mail size={16} /> Email
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-mono text-xs text-plasma uppercase tracking-wider">Navigation</h4>
                        <div className="flex flex-col gap-3 text-sm text-ghost/70">
                            <a href="#philosophy" className="hover:text-white transition-colors magnetic-link">Philosophy</a>
                            <a href="#protocol" className="hover:text-white transition-colors magnetic-link">Protocol</a>
                            <a href="#projects" className="hover:text-white transition-colors magnetic-link">Projects</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-ghost/40 font-mono gap-2 text-center md:text-left">
                <p>© {new Date().getFullYear()} Alex Giurea. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Built with React + GSAP.</p>
            </div>
        </footer>
    );
}
