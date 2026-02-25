import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#030305] rounded-t-[4rem] text-ghost py-16 px-6 md:px-16 flex flex-col items-center mt-auto border-t border-white/5 z-20 relative">
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start md:items-center gap-12">

                <div className="flex flex-col gap-4 max-w-sm">
                    <h2 className="text-3xl font-sans font-bold tracking-tight">Alex Giurea</h2>
                    <p className="text-ghost/50 text-sm leading-relaxed">
                        Senior Business Analytics student & collegiate tennis athlete building AI-powered web apps and automations.
                    </p>
                    <div className="flex items-center gap-3 mt-2 bg-white/5 w-max px-4 py-2 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ghost/80">System Operational</span>
                    </div>
                </div>

                <div className="justify-self-center perspective-1000">
                    <a
                        href="/images/footer-feature.jpeg"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative block w-[290px] sm:w-[340px] magnetic-link"
                        aria-label="Open footer feature image"
                    >
                        <div className="absolute inset-x-10 -bottom-8 h-10 rounded-full bg-plasma/35 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl"></div>
                        <div className="preserve-3d relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/12 to-white/[0.03] p-1.5 shadow-[0_24px_50px_rgba(0,0,0,0.55)] transition-all duration-500 [transform:rotateX(0deg)_rotateY(0deg)_translateY(0)] group-hover:[transform:rotateX(8deg)_rotateY(-10deg)_translateY(-6px)]">
                            <img
                                src="/images/footer-feature.jpeg"
                                alt="Featured footer visual"
                                className="h-44 w-full rounded-[1.65rem] object-cover transition-transform duration-700 [transform:translateZ(24px)] group-hover:scale-[1.04]"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-1.5 rounded-[1.65rem] bg-gradient-to-t from-[#030305]/80 via-transparent to-[#7B61FF]/15 [transform:translateZ(34px)]"></div>
                            <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#030305]/65 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ghost/85 backdrop-blur-sm [transform:translateZ(42px)]">
                                Featured Moment
                            </div>
                        </div>
                    </a>
                </div>

                <div className="flex gap-12 md:justify-self-end">
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

            <div className="w-full max-w-7xl mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-ghost/40 font-mono">
                <p>© {new Date().getFullYear()} Alex Giurea. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Built with React + GSAP.</p>
            </div>
        </footer>
    );
}
