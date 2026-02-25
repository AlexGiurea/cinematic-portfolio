import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Mail, MapPin, Linkedin, Github, Phone, Award, ChevronRight } from 'lucide-react';

const SoftwareExperience = () => {
    return (
        <div className="flex flex-col gap-12 w-full software-content">
            <h2 className="font-serif italic text-3xl text-ghost/80 mb-4 border-b border-white/10 pb-6">Featured Products & Systems</h2>

            <div className="flex flex-col gap-12 w-full">
                {/* Card 2 - DrawGen (Flagship) */}
                <div className="experience-card relative bg-deep-void ring-2 ring-plasma rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-[0_0_40px_rgba(123,97,255,0.15)] z-10 transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-plasma text-white text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(123,97,255,0.5)]">
                        Flagship SaaS
                    </div>
                    <div>
                        <div className="font-mono text-xs text-plasma/70 mb-2">01 — Platform</div>
                        <h3 className="text-3xl font-sans font-bold text-white mb-2">DrawGen</h3>
                        <p className="text-ghost/80 text-sm md:text-base leading-relaxed">
                            Professional tournament draws and court scheduling for event organizers. Next.js application designed to replace messy spreadsheets with an intuitive, scalable platform.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3 font-mono text-xs text-ghost/80">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_#7B61FF] bg-plasma"></span> Knockout, RR, & Qualies
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_#7B61FF] bg-plasma"></span> Interactive Cortex Schedule
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_#7B61FF] bg-plasma"></span> AI-Assisted Draw Planning
                        </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <a href="https://drawgen-frc5.vercel.app/" target="_blank" rel="noreferrer" className="w-full inline-block py-4 rounded-full bg-plasma text-white text-center text-sm font-semibold hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-shadow">
                            Open App
                        </a>
                    </div>
                </div>

                {/* Card 1 - ProTennisJobs */}
                <div className="experience-card relative bg-graphite/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 hover:bg-graphite transition-colors">
                    <div>
                        <div className="font-mono text-xs text-ghost/50 mb-2">02 — AI Automation</div>
                        <h3 className="text-2xl font-sans font-bold text-white mb-2">ProTennisJobs Scraper</h3>
                        <p className="text-ghost/70 text-sm md:text-base leading-relaxed">
                            AI-powered scraper computing applicant fit scores, calculating distances, and auto-generating personalized outreach emails for tennis professional job listings.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3 font-mono text-xs text-ghost/70">
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-plasma/70"></span> AI Suitability Scoring (0-10)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-plasma/70"></span> Geolocation Filtering
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-plasma/70"></span> Auto-Drafted Outreach
                        </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <a href="https://protennisjobs-ai-scraper.vercel.app/" target="_blank" rel="noreferrer" className="w-full inline-block py-3 rounded-full border border-white/10 text-center text-sm font-semibold hover:bg-white/5 transition-colors">
                            Open App
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TennisExperience = () => {
    return (
        <div className="flex flex-col gap-8 w-full tennis-content">
            <h2 className="font-serif italic text-3xl text-ghost/80 mb-4 border-b border-white/10 pb-6">Professional Experience</h2>

            {/* Experience 1 */}
            <div className="experience-card relative bg-graphite/40 border border-white/5 rounded-[2rem] p-8 md:p-10 hover:bg-graphite transition-colors group overflow-hidden">
                <div className="absolute top-10 left-0 -ml-1 border-l-2 border-plasma/50 h-full hidden md:block"></div>
                <div className="accent-dot absolute top-[2.7rem] left-[-0.3rem] w-2.5 h-2.5 rounded-full bg-white/20 hidden md:block transition-colors"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 relative z-10">
                    <div>
                        <h3 className="text-xl font-bold text-white">Tennis Professional</h3>
                        <p className="text-ghost/70 font-medium">Tarratine Club of Dark Harbor</p>
                    </div>
                    <div className="font-mono text-xs text-plasma bg-plasma/10 px-3 py-1.5 rounded-full shrink-0">
                        May 2025 — Aug 2025
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 relative z-10">
                    <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] transition-all duration-700 ease-out transform group-hover:-translate-y-1">
                        <img
                            src="/images/tarratine-club.jpeg"
                            alt="Tarratine Club of Dark Harbor"
                            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-700"></div>
                    </div>
                    <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] transition-all duration-700 ease-out transform group-hover:-translate-y-1 delay-75">
                        <img
                            src="/images/tarratine-club-2.jpg"
                            alt="Tarratine Club of Dark Harbor Grounds"
                            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-700"></div>
                    </div>
                </div>

                <ul className="space-y-3 text-ghost/70 text-sm md:text-base leading-relaxed relative z-10">
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Designed engaging lesson plans tailored for diverse skill levels and age groups.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Conducted individual and group coaching sessions to enhance performance on the court.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Demonstrated proper technical execution for forehand, backhand, serve, volley, and overhead.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Taught adults and juniors, fostering coordination, confidence, and a passion for the sport.
                    </li>
                </ul>
            </div>

            {/* Experience 2 */}
            <div className="experience-card relative bg-graphite/40 border border-white/5 rounded-[2rem] p-8 md:p-10 hover:bg-graphite transition-colors group">
                <div className="absolute top-10 left-0 -ml-1 border-l-2 border-plasma/50 h-full hidden md:block"></div>
                <div className="accent-dot absolute top-[2.7rem] left-[-0.3rem] w-2.5 h-2.5 rounded-full bg-white/20 hidden md:block transition-colors"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-white">Collegiate Athlete</h3>
                        <p className="text-ghost/70 font-medium">LMU Men's Tennis Team</p>
                    </div>
                    <div className="font-mono text-xs text-plasma bg-plasma/10 px-3 py-1.5 rounded-full shrink-0">
                        Dec 2020 — Current
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 relative z-10">
                    <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] transition-all duration-700 ease-out transform group-hover:-translate-y-1">
                        <img
                            src="/images/lmu-tennis-1.jpeg"
                            alt="LMU Men's Tennis Team Action"
                            className="w-full h-full object-cover object-[center_30%] transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-700"></div>
                    </div>
                    <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] transition-all duration-700 ease-out transform group-hover:-translate-y-1 delay-75">
                        <img
                            src="/images/lmu-tennis-2.jpeg"
                            alt="LMU Men's Tennis Team Celebrate"
                            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-700"></div>
                    </div>
                </div>

                <ul className="space-y-3 text-ghost/70 text-sm md:text-base leading-relaxed relative z-10">
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Compete at the high-stakes collegiate level while concurrently completing a rigorous Business Analytics degree.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Bring robust leadership, discipline, and high-performance habits into the team environment daily.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Actively lead team practices, supporting team culture through consistency, preparation, and leading by example.
                    </li>
                </ul>
            </div>

            {/* Experience 3 */}
            <div className="experience-card relative bg-graphite/40 border border-white/5 rounded-[2rem] p-8 md:p-10 hover:bg-graphite transition-colors group overflow-hidden">
                <div className="absolute top-10 left-0 -ml-1 border-l-2 border-plasma/50 h-full hidden md:block"></div>
                <div className="accent-dot absolute top-[2.7rem] left-[-0.3rem] w-2.5 h-2.5 rounded-full bg-white/20 hidden md:block transition-colors"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 relative z-10">
                    <div>
                        <h3 className="text-xl font-bold text-white">Academy Player</h3>
                        <p className="text-ghost/70 font-medium">Florin Mergea Tennis Academy</p>
                    </div>
                    <div className="font-mono text-xs text-plasma bg-plasma/10 px-3 py-1.5 rounded-full shrink-0">
                        May 2021 — Jul 2023
                    </div>
                </div>

                <div className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] transition-all duration-700 ease-out transform group-hover:-translate-y-1 z-10">
                    <img
                        src="/images/florin-mergea.jpeg"
                        alt="Florin Mergea Tennis Academy"
                        className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-700"></div>
                </div>

                <ul className="space-y-3 text-ghost/70 text-sm md:text-base leading-relaxed relative z-10">
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Practiced full-time as a professionally oriented junior player, focusing heavily on modern technique and competitive match play.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Sparred and competed alongside high-level peers and young professionals preparing for international ITF tournaments.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Received structured mentorship and tactical coaching aimed at enhancing mental resilience and game focus under pressure.
                    </li>
                </ul>
            </div>

            {/* Experience 4 */}
            <div className="experience-card relative bg-graphite/40 border border-white/5 rounded-[2rem] p-8 md:p-10 hover:bg-graphite transition-colors group overflow-hidden">
                <div className="absolute top-10 left-0 -ml-1 border-l-2 border-plasma/50 h-full hidden md:block lg:border-l-0"></div>
                <div className="accent-dot absolute top-[2.7rem] left-[-0.3rem] w-2.5 h-2.5 rounded-full bg-white/20 hidden md:block transition-colors lg:hidden"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 relative z-10">
                    <div>
                        <h3 className="text-xl font-bold text-white">Private Tennis Coach</h3>
                        <p className="text-ghost/70 font-medium">Independent, Romania</p>
                    </div>
                    <div className="font-mono text-xs text-plasma bg-plasma/10 px-3 py-1.5 rounded-full shrink-0">
                        May 2020 — Jul 2020
                    </div>
                </div>

                <div className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(123,97,255,0.15)] transition-all duration-700 ease-out transform group-hover:-translate-y-1 z-10">
                    <img
                        src="/images/private-coach.jpeg"
                        alt="Private Tennis Coach"
                        className="w-full h-full object-cover object-[center_30%] transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-700"></div>
                </div>

                <ul className="space-y-3 text-ghost/70 text-sm md:text-base leading-relaxed relative z-10">
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Offered personalized tennis lessons for children in my hometown, emphasizing skill development and fitness.
                    </li>
                    <li className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-plasma/50 before:rounded-full">
                        Developed tailored training programs that combined fundamental technique instruction with an enjoyable learning environment.
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default function Resume({ initialTab, setResumeTab }) {
    const containerRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const [viewMode, setViewMode] = useState(initialTab || 'software'); // 'software' | 'tennis'

    useEffect(() => {
        // Sync parent state if internal tab changes manually via toggle
        if (setResumeTab) {
            setResumeTab(viewMode);
        }
    }, [viewMode, setResumeTab]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(leftColRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );

            gsap.fromTo(rightColRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Animate viewMode changes
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(rightColRef.current,
                { opacity: 0, x: viewMode === 'software' ? -20 : 20 },
                { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
            );

            // Re-bind hover animations for new DOM elements
            setTimeout(() => {
                gsap.utils.toArray('.experience-card').forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, { y: -2, border: '1px solid rgba(123, 97, 255, 0.3)', duration: 0.3, ease: 'power2.out' });
                        const dot = card.querySelector('.accent-dot');
                        if (dot) gsap.to(dot, { scale: 1.5, backgroundColor: '#7B61FF', duration: 0.3 });
                    });
                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, { y: 0, border: '1px solid rgba(255, 255, 255, 0.05)', duration: 0.3, ease: 'power2.out' });
                        const dot = card.querySelector('.accent-dot');
                        if (dot) gsap.to(dot, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)', duration: 0.3 });
                    });
                });
            }, 100);

        }, containerRef);
        return () => ctx.revert();
    }, [viewMode]);

    return (
        <section ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 text-ghost">

            {/* Left Sidebar (Sticky on Desktop) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:sticky lg:top-32 self-start" ref={leftColRef}>

                {/* Header & Title */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-white m-0">
                        Alex Giurea
                    </h1>
                    <p className="text-plasma font-mono text-sm leading-relaxed mt-2">
                        Business Analytics Senior • Product Builder <br />
                        Collegiate Athlete • Tennis Coach
                    </p>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
                    <h3 className="font-mono text-xs tracking-widest text-ghost/50 uppercase mb-2">Connect</h3>

                    <a href="mailto:alex.rares.giurea@gmail.com" className="flex items-center gap-3 group text-sm font-medium hover:text-white transition-colors">
                        <Mail size={16} className="text-plasma/70 group-hover:text-plasma transition-colors" />
                        alex.rares.giurea@gmail.com
                    </a>

                    <div className="flex items-center gap-3 text-sm font-medium text-ghost/80">
                        <Phone size={16} className="text-ghost/50" />
                        Available upon request
                    </div>

                    <div className="flex items-center gap-3 text-sm font-medium text-ghost/80">
                        <MapPin size={16} className="text-ghost/50" />
                        Harrogate, TN, USA // Romania
                    </div>

                    <a href="https://ro.linkedin.com/in/alex-giurea-9a36491ba" target="_blank" rel="noreferrer" className="flex items-center gap-3 group text-sm font-medium mt-2 hover:text-white transition-colors">
                        <Linkedin size={16} className="text-plasma/70 group-hover:text-plasma transition-colors" />
                        LinkedIn
                    </a>

                    <a href="https://github.com/AlexGiurea" target="_blank" rel="noreferrer" className="flex items-center gap-3 group text-sm font-medium hover:text-white transition-colors">
                        <Github size={16} className="text-plasma/70 group-hover:text-plasma transition-colors" />
                        GitHub
                    </a>
                </div>

                {/* Education */}
                <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
                    <h3 className="font-mono text-xs tracking-widest text-ghost/50 uppercase mb-2">Education</h3>
                    <div>
                        <h4 className="font-bold text-white mb-1">Lincoln Memorial University</h4>
                        <p className="text-sm text-ghost/70 font-mono leading-relaxed">
                            B.B.A. Business Analytics
                        </p>
                        <p className="text-xs text-plasma mt-2 font-mono uppercase bg-plasma/10 inline-block px-2 py-1 rounded">
                            Senior • Exp. May 2026
                        </p>
                    </div>
                </div>

                {/* Career Highlights / Tennis */}
                <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
                    <h3 className="font-mono text-xs tracking-widest text-ghost/50 uppercase mb-2">Tennis Achievements</h3>
                    <ul className="flex flex-col gap-3 text-sm text-ghost/80">
                        <li className="flex gap-3 leading-relaxed">
                            <Award size={16} className="text-plasma shrink-0 mt-0.5" />
                            <span>ITF Junior Ranking: 389 in the world during final year as a junior.</span>
                        </li>
                        <li className="flex gap-3 leading-relaxed">
                            <Award size={16} className="text-plasma shrink-0 mt-0.5" />
                            <span>Ranked top 10 nationally in Romania across all age categories.</span>
                        </li>
                        <li className="flex gap-3 leading-relaxed">
                            <Award size={16} className="text-plasma shrink-0 mt-0.5" />
                            <span>Winner and multiple runner-up in ITF junior tournaments.</span>
                        </li>
                        <li className="flex gap-3 leading-relaxed">
                            <Award size={16} className="text-plasma shrink-0 mt-0.5" />
                            <span>South Atlantic Conference Freshman of the Year (2022) & multiple Player of the Week honors.</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Right Main Content (Experience) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">

                {/* Dual Toggle Switch */}
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 self-start mb-4">
                    <button
                        onClick={() => setViewMode('software')}
                        className={`px-6 py-2.5 rounded-full font-mono text-sm uppercase tracking-widest transition-all duration-300 ${viewMode === 'software' ? 'bg-plasma text-white shadow-[0_0_20px_rgba(123,97,255,0.4)]' : 'text-ghost/50 hover:text-white'}`}
                    >
                        Software
                    </button>
                    <button
                        onClick={() => setViewMode('tennis')}
                        className={`px-6 py-2.5 rounded-full font-mono text-sm uppercase tracking-widest transition-all duration-300 ${viewMode === 'tennis' ? 'bg-plasma text-white shadow-[0_0_20px_rgba(123,97,255,0.4)]' : 'text-ghost/50 hover:text-white'}`}
                    >
                        Tennis
                    </button>
                </div>

                {/* Content Container */}
                <div ref={rightColRef} className="w-full">
                    {viewMode === 'software' ? <SoftwareExperience /> : <TennisExperience />}
                </div>

            </div>

        </section>
    );
}
