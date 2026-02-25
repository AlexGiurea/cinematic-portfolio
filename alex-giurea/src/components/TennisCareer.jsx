import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Target, Activity, Zap, ChevronRight, BarChart3, Globe2 } from 'lucide-react';

const TacticalBlueprint = ({ activePhase }) => {
    const svgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const ball = svgRef.current.querySelector('.tracking-ball');
            const paths = svgRef.current.querySelectorAll('.strategy-path');

            // Cleanup previous animations
            gsap.killTweensOf([ball, ...paths]);
            gsap.set(paths, { strokeDasharray: 400, strokeDashoffset: 400, opacity: 0 });

            if (activePhase === 'd1') {
                // Aggressive baseline to net transition
                const tl = gsap.timeline({ repeat: -1 });
                gsap.to('.path-d1', { strokeDashoffset: 0, opacity: 0.6, duration: 1.5, stagger: 0.5 });

                tl.fromTo(ball,
                    { x: 100, y: 350, opacity: 0 },
                    { x: 40, y: 150, opacity: 1, duration: 0.8, ease: "power2.out" }
                ).to(ball, { x: 120, y: 50, duration: 0.6, ease: "back.out(1.7)" })
                    .to(ball, { opacity: 0, duration: 0.3 });

            } else if (activePhase === 'itf') {
                // Wide variety of tactical shots (chess match)
                gsap.to('.path-itf', { strokeDashoffset: 0, opacity: 0.4, duration: 2, ease: "none", repeat: -1 });

                const tl = gsap.timeline({ repeat: -1 });
                tl.fromTo(ball, { x: 20, y: 360, opacity: 0 }, { x: 180, y: 40, opacity: 1, duration: 1.2, ease: "power1.inOut" })
                    .to(ball, { x: 40, y: 40, duration: 1, ease: "power1.inOut" })
                    .to(ball, { x: 100, y: 360, duration: 1.2, ease: "power1.inOut" })
                    .to(ball, { opacity: 0, duration: 0.3 });

            } else if (activePhase === 'coach') {
                // Precise feeding/target zones
                gsap.set('.target-zone', { scale: 0, opacity: 0 });
                gsap.to('.target-zone', {
                    scale: 1,
                    opacity: 0.4,
                    duration: 0.5,
                    stagger: 0.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });

                const tl = gsap.timeline({ repeat: -1 });
                tl.fromTo(ball, { x: 100, y: 100, opacity: 0 }, { x: 160, y: 320, opacity: 1, duration: 0.7 })
                    .to(ball, { opacity: 0, duration: 0.2, delay: 0.3 })
                    .fromTo(ball, { x: 100, y: 100, opacity: 0 }, { x: 40, y: 320, opacity: 1, duration: 0.7 })
                    .to(ball, { opacity: 0, duration: 0.2 });
            }
        }, svgRef);
        return () => ctx.revert();
    }, [activePhase]);

    return (
        <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-plasma/5 blur-[100px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>

            <svg ref={svgRef} viewBox="0 0 200 400" className="w-[300px] sm:w-[350px] lg:w-[400px] h-auto drop-shadow-[0_0_25px_rgba(123,97,255,0.2)]">
                {/* Court Grids */}
                <rect x="20" y="20" width="160" height="360" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="rgba(123,97,255,0.02)" />
                <path d="M20 200 L180 200" stroke="rgba(123,97,255,0.3)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Technical Lines (Blueprint style) */}
                <g className="opacity-20">
                    <line x1="40" y1="20" x2="40" y2="380" stroke="white" strokeWidth="0.5" />
                    <line x1="160" y1="20" x2="160" y2="380" stroke="white" strokeWidth="0.5" />
                    <line x1="40" y1="100" x2="160" y2="100" stroke="white" strokeWidth="0.5" />
                    <line x1="40" y1="300" x2="160" y2="300" stroke="white" strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="100" y2="300" stroke="white" strokeWidth="0.5" />
                </g>

                {/* Strategy Paths */}
                <path className="strategy-path path-d1" d="M100 350 Q60 250 40 150 T120 50" stroke="url(#plasma-gradient)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path className="strategy-path path-itf" d="M20 360 L180 40 L40 40 L100 360" stroke="url(#plasma-gradient)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

                {/* Target Zones */}
                <g className="target-zone-group">
                    <circle className="target-zone" cx="160" cy="320" r="15" fill="none" stroke="#7B61FF" strokeWidth="1" />
                    <circle className="target-zone" cx="40" cy="320" r="15" fill="none" stroke="#7B61FF" strokeWidth="1" />
                </g>

                {/* Active Tracking Ball */}
                <circle className="tracking-ball" cx="0" cy="0" r="4" fill="#7B61FF">
                    <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
                </circle>

                <defs>
                    <linearGradient id="plasma-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7B61FF" />
                        <stop offset="100%" stopColor="#AD99FF" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Tactical Labels */}
            <div className="absolute top-0 right-[-100px] hidden lg:flex flex-col gap-2 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-pulse">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="font-mono text-[9px] uppercase tracking-tighter">Velocity Tracked</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-plasma"></div><span className="font-mono text-[9px] uppercase tracking-tighter">Vector Optimal</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div><span className="font-mono text-[9px] uppercase tracking-tighter">Impact Logged</span></div>
            </div>
        </div>
    );
};

const StatCard = ({ icon: Icon, label, value, subtext, delay }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.from(cardRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            delay,
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 90%",
            }
        });
    }, [delay]);

    return (
        <div ref={cardRef} className="group relative p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-plasma/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-plasma/20 transition-all"></div>
            <div className="relative z-10">
                <div className="w-10 h-10 mb-6 bg-plasma/20 border border-plasma/30 rounded-xl flex items-center justify-center text-plasma group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">{label}</p>
                <h4 className="text-3xl lg:text-4xl font-sans font-bold text-white mb-2 italic tracking-tighter">{value}</h4>
                <p className="text-sm text-white/60 leading-tight">{subtext}</p>
            </div>
        </div>
    );
};

export default function TennisCareer() {
    const containerRef = useRef(null);
    const heroImgRef = useRef(null);
    const [activePhase, setActivePhase] = useState('d1');

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Image entrance animation instead of parallax
            gsap.to(heroImgRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });

            // Reveal animations
            gsap.from('.reveal-text', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: '.reveal-trigger',
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="tennis" ref={containerRef} className="relative w-full bg-deep-void overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Hero Section */}
            <div className="relative min-h-[85dvh] w-full flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-24 overflow-hidden border-b border-white/5 gap-12 lg:gap-8">

                <div className="relative z-10 max-w-2xl reveal-trigger pt-12 lg:pt-0">
                    <div className="flex items-center gap-3 mb-6 reveal-text">
                        <span className="w-12 h-[1px] bg-plasma"></span>
                        <span className="font-mono text-xs uppercase tracking-[0.4em] text-plasma">Performance Identity</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-sans font-black text-white tracking-tighter mb-8 reveal-text leading-[0.9]">
                        Athletic <br />
                        <span className="italic font-drama text-plasma/90">Discipline.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 max-w-xl font-sans font-light reveal-text leading-relaxed">
                        Collegiate athlete mindset brought directly into software architecture.
                        Focused on extreme preparation, consistency, and resilience under technical pressure.
                    </p>
                </div>

                {/* Structured Image Container */}
                <div ref={heroImgRef} className="relative z-0 w-full lg:w-[45%] max-w-md lg:max-w-xl aspect-[3/4] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(123,97,255,0.15)] opacity-0 translate-y-10 group">
                    <img
                        src="/images/tennis-hero.jpg"
                        alt="High performance tennis action"
                        className="w-full h-full object-cover object-top opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-deep-void/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
            </div>

            {/* Technical Breakdown Section */}
            <div className="relative z-10 py-32 px-8 md:px-16 lg:px-24 flex flex-col items-center">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left: Tactical Blueprint */}
                    <div className="flex flex-col items-center">
                        <TacticalBlueprint activePhase={activePhase} />

                        <div className="mt-12 flex gap-4">
                            {['d1', 'itf', 'coach'].map((phase) => (
                                <button
                                    key={phase}
                                    onClick={() => setActivePhase(phase)}
                                    className={`px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest border transition-all ${activePhase === phase
                                        ? 'bg-plasma text-white border-plasma shadow-[0_0_20px_rgba(123,97,255,0.4)] scale-105'
                                        : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    Phase_{phase}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Experience Tiers */}
                    <div className="flex flex-col justify-center gap-6 w-full max-w-lg lg:max-w-none">
                        {[
                            {
                                title: "Competitive Tour",
                                context: "ITF & National",
                                desc: "Decade of high-stakes competition built a foundation of resilience and rapid problem-solving under maximum pressure."
                            },
                            {
                                title: "Collegiate System",
                                context: "LMU Men's Tennis",
                                desc: "Integrating athletic leadership with Business Analytics. Operating as a data-driven athlete in a high-performance environment."
                            },
                            {
                                title: "Technical Coaching",
                                context: "Academy & Private",
                                desc: "Bridging mechanical execution with psychological confidence. Simplifying complex movements into repeatable, high-value success."
                            }
                        ].map((tier, i) => (
                            <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all flex flex-col justify-center">
                                <span className="font-mono text-xs text-plasma mb-2 block">{tier.context}</span>
                                <h5 className="text-xl lg:text-2xl font-sans font-bold text-white mb-2 group-hover:text-plasma transition-colors">{tier.title}</h5>
                                <p className="text-white/40 leading-relaxed text-sm">{tier.desc}</p>
                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Protocol_0{i + 1}</span>
                                    <ChevronRight className="text-white/20 group-hover:text-plasma group-hover:translate-x-1 transition-all" size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
