import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedTennisCourt = ({ activeCard }) => {
    const courtRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const ball = courtRef.current.querySelector('.tennis-ball');

            // Clear previous animations to avoid conflicts
            gsap.killTweensOf(ball);

            if (activeCard === 0) {
                // Default: Rally
                const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });
                tl.set(ball, { x: 100, y: 380, scale: 1 });
                tl.to(ball, { x: 60, y: 120, duration: 0.6 })
                    .to(ball, { scale: 1.5, duration: 0.3, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 40, y: 20, duration: 0.5 });
                tl.to(ball, { x: 160, y: 280, duration: 0.7 })
                    .to(ball, { scale: 1.5, duration: 0.35, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 180, y: 390, duration: 0.5 });
                tl.to(ball, { x: 40, y: 60, duration: 0.6 })
                    .to(ball, { scale: 1.5, duration: 0.3, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 20, y: -10, duration: 0.5 });
                tl.to({}, { duration: 1 });
            } else if (activeCard === 1) {
                // High Intensity Volley (D1)
                const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });
                tl.set(ball, { x: 100, y: 220, scale: 1.2 }); // At net
                tl.to(ball, { x: 150, y: 40, duration: 0.3 }) // Punch volley
                    .to(ball, { scale: 1.6, duration: 0.15, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 180, y: 10, duration: 0.3 }); // Winner
                tl.set(ball, { x: 60, y: 220, scale: 1.2, delay: 0.5 }); // Reset to net
                tl.to(ball, { x: 30, y: 80, duration: 0.3 }) // Punch volley
                    .to(ball, { scale: 1.6, duration: 0.15, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 10, y: 30, duration: 0.3 }); // Winner
                tl.to({}, { duration: 1 });
            } else if (activeCard === 2) {
                // Consistent Baseline (Pro Foundation)
                const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });
                tl.set(ball, { x: 100, y: 380, scale: 1 }); // Baseline center
                tl.to(ball, { x: 100, y: 100, duration: 0.8 }) // Deep rally center
                    .to(ball, { scale: 1.4, duration: 0.4, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 100, y: 20, duration: 0.6 });
                tl.to(ball, { x: 100, y: 300, duration: 0.8 }) // Return deep center
                    .to(ball, { scale: 1.4, duration: 0.4, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 100, y: 380, duration: 0.6 });
                tl.to({}, { duration: 1 });
            } else if (activeCard === 3) {
                // Target Practice (Coaching)
                const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });
                tl.set(ball, { x: 100, y: 100, scale: 1 }); // From coach
                tl.to(ball, { x: 40, y: 300, duration: 0.5 }) // Feed ad side
                    .to(ball, { scale: 1.3, duration: 0.25, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 10, y: 380, duration: 0.4 });
                tl.set(ball, { x: 100, y: 100, scale: 1, delay: 0.5 }); // From coach
                tl.to(ball, { x: 160, y: 300, duration: 0.5 }) // Feed deuce side
                    .to(ball, { scale: 1.3, duration: 0.25, yoyo: true, repeat: 1 }, "<")
                    .to(ball, { x: 190, y: 380, duration: 0.4 });
                tl.to({}, { duration: 1 });
            }

        }, courtRef);
        return () => ctx.revert();
    }, [activeCard]);

    return (
        <div ref={courtRef} className="relative w-full max-w-[400px] aspect-[1/2] lg:aspect-[3/4] rounded-3xl border border-white/5 bg-graphite/40 backdrop-blur-xl flex items-center justify-center p-8 shadow-2xl overflow-hidden self-center mb-16 transition-all duration-500">
            <div className="absolute top-4 left-6 font-mono text-[10px] sm:text-xs text-plasma tracking-widest uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-plasma animate-pulse"></div>
                Telemetry Active: {activeCard === 0 ? 'Rally' : activeCard === 1 ? 'High-Velocity Volley' : activeCard === 2 ? 'Baseline Consistency' : 'Target Vectors'}
            </div>

            <svg viewBox="0 0 200 400" className="w-full h-full opacity-70 lg:scale-125" fill="none" stroke="currentColor">
                {/* Court Outline */}
                <rect x="20" y="20" width="160" height="360" stroke="#F0EFF4" strokeWidth="2" strokeOpacity="0.8" />

                {/* Singles Lines */}
                <line x1="40" y1="20" x2="40" y2="380" stroke="#F0EFF4" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="160" y1="20" x2="160" y2="380" stroke="#F0EFF4" strokeWidth="1" strokeOpacity="0.5" />

                {/* Service Lines */}
                <line x1="40" y1="100" x2="160" y2="100" stroke="#F0EFF4" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="40" y1="300" x2="160" y2="300" stroke="#F0EFF4" strokeWidth="1" strokeOpacity="0.5" />

                {/* Center Service Line */}
                <line x1="100" y1="100" x2="100" y2="300" stroke="#F0EFF4" strokeWidth="1" strokeOpacity="0.5" />

                {/* Net */}
                <line x1="10" y1="200" x2="190" y2="200" stroke="#7B61FF" strokeWidth="3" strokeOpacity="0.8" strokeDasharray="4 2" />
                <circle cx="10" cy="200" r="2" fill="#7B61FF" />
                <circle cx="190" cy="200" r="2" fill="#7B61FF" />

                {/* Tracking Ball */}
                <circle className="tennis-ball" cx="0" cy="0" r="5" fill="#7B61FF" style={{ filter: 'drop-shadow(0 0 10px rgba(123,97,255,1))' }} />
            </svg>

            {/* Ambient Glow */}
            <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${activeCard !== 0 ? 'bg-plasma/10 blur-3xl opacity-100' : 'opacity-0'}`}></div>
        </div>
    );
};

export default function TennisCareer() {
    const sectionRef = useRef(null);
    const [activeCard, setActiveCard] = useState(0);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.tennis-card',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="tennis" ref={sectionRef} className="pt-24 pb-48 px-6 md:px-16 bg-deep-void relative z-10 w-full overflow-hidden flex flex-col items-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center w-full">

                {/* Centered Intro Text */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-ghost mb-6 tracking-tighter text-center">Athletic Discipline.</h2>
                <p className="text-plasma font-mono text-base md:text-lg mb-16 max-w-2xl leading-relaxed text-center">
                    Collegiate athlete mindset brought directly into building high-performance systems. Focused on extreme preparation, consistency, and resilience under pressure.
                </p>

                {/* Centered Animated UI Graphic */}
                <AnimatedTennisCourt activeCard={activeCard} />

                {/* Grid of Interactive Cards Below */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

                    {/* Card 1 */}
                    <button
                        onMouseEnter={() => setActiveCard(1)}
                        onMouseLeave={() => setActiveCard(0)}
                        onClick={() => setActiveCard(1)}
                        className={`tennis-card text-left bg-graphite/30 backdrop-blur-sm border-y border-r border-white/5 border-l-[3px] rounded-r-[2rem] p-8 flex flex-col gap-4 transition-all duration-300 ${activeCard === 1 ? 'border-l-plasma bg-graphite/60 shadow-[0_0_30px_rgba(123,97,255,0.1)] -translate-y-2' : 'border-l-white/10 hover:border-l-plasma/50 hover:bg-graphite/50 hover:-translate-y-1'}`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full transition-colors ${activeCard === 1 ? 'bg-plasma shadow-[0_0_10px_#7B61FF]' : 'bg-white/20'}`}></span>
                            <span className={`font-mono text-xs uppercase tracking-widest transition-colors ${activeCard === 1 ? 'text-plasma' : 'text-ghost/60'}`}>Division 1 Athlete</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-sans font-bold text-ghost">LMU Men's Tennis</h3>
                        <p className="text-ghost/70 text-sm leading-relaxed">
                            Competing at the highest collegiate level while finishing a degree in Business Analytics. Bringing discipline, leadership, and high-performance habits from the team environment directly into software architecture.
                        </p>
                    </button>

                    {/* Card 2 */}
                    <button
                        onMouseEnter={() => setActiveCard(2)}
                        onMouseLeave={() => setActiveCard(0)}
                        onClick={() => setActiveCard(2)}
                        className={`tennis-card text-left bg-graphite/30 backdrop-blur-sm border-y border-r border-white/5 border-l-[3px] rounded-r-[2rem] p-8 flex flex-col gap-4 transition-all duration-300 ${activeCard === 2 ? 'border-l-plasma bg-graphite/60 shadow-[0_0_30px_rgba(123,97,255,0.1)] -translate-y-2' : 'border-l-white/10 hover:border-l-plasma/50 hover:bg-graphite/50 hover:-translate-y-1'}`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full transition-colors ${activeCard === 2 ? 'bg-plasma shadow-[0_0_10px_#7B61FF]' : 'bg-white/20'}`}></span>
                            <span className={`font-mono text-xs uppercase tracking-widest transition-colors ${activeCard === 2 ? 'text-plasma' : 'text-ghost/60'}`}>Pro Foundation</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-sans font-bold text-ghost">National Junior & ITF</h3>
                        <p className="text-ghost/70 text-sm leading-relaxed">
                            Ranked Top 10 National Junior in Romania and career-high ITF Junior ranking of 389. Multiple-time winner and runner-up globally. The resilience built navigating a decade on tour translates perfectly into solving complex software systems.
                        </p>
                    </button>

                    {/* Card 3 */}
                    <button
                        onMouseEnter={() => setActiveCard(3)}
                        onMouseLeave={() => setActiveCard(0)}
                        onClick={() => setActiveCard(3)}
                        className={`tennis-card text-left bg-graphite/30 backdrop-blur-sm border-y border-r border-white/5 border-l-[3px] rounded-r-[2rem] p-8 flex flex-col gap-4 transition-all duration-300 ${activeCard === 3 ? 'border-l-plasma bg-graphite/60 shadow-[0_0_30px_rgba(123,97,255,0.1)] -translate-y-2' : 'border-l-white/10 hover:border-l-plasma/50 hover:bg-graphite/50 hover:-translate-y-1'}`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full transition-colors ${activeCard === 3 ? 'bg-plasma shadow-[0_0_10px_#7B61FF]' : 'bg-white/20'}`}></span>
                            <span className={`font-mono text-xs uppercase tracking-widest transition-colors ${activeCard === 3 ? 'text-plasma' : 'text-ghost/60'}`}>Technical Mentor</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-sans font-bold text-ghost">High-Performance Coaching</h3>
                        <p className="text-ghost/70 text-sm leading-relaxed">
                            Professional coach at Tarratine Club (Maine) and the Florin Mergea Tennis Academy. I specialize in applying core technical fundamentals to long-term player development, bridging the gap between mechanical execution and deep self-confidence.
                        </p>
                    </button>

                </div>
            </div>
        </section>
    );
}
