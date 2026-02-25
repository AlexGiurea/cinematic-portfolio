import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProtocolCard = ({ step, title, description, children, index }) => (
    <div className={`protocol-card panel-${index} absolute left-0 w-full min-h-[100dvh] flex items-center justify-center`}>
        <div className="w-full min-h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 bg-deep-void rounded-t-[2rem] sm:rounded-t-[3rem]">
            <div className="flex-1 w-full max-w-xl text-left order-2 md:order-1">
                <div className="font-mono text-plasma text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">[{step}]</div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-ghost mb-4 sm:mb-6 tracking-tight">{title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-ghost/60 leading-relaxed font-mono">{description}</p>
            </div>
            <div className="flex-1 w-full min-h-[200px] h-[240px] sm:h-[320px] md:h-[400px] lg:h-[600px] flex items-center justify-center relative order-1 md:order-2 shrink-0">
                {children}
            </div>
        </div>
    </div>
);

export default function AiWorkflows() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            const mm = gsap.matchMedia();
            mm.add('(min-width: 768px)', () => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${cards.length * 100}%`,
                        pin: true,
                        scrub: 1,
                    }
                });

                // Starting from card index 1, transition them in
                cards.forEach((card, index) => {
                    if (index > 0) {
                        gsap.set(card, { yPercent: 100 });
                        tl.to(card, { yPercent: 0, ease: "none" });
                        const prevCard = cards[index - 1];
                        tl.to(prevCard.querySelector('.max-w-7xl'), {
                            scale: 0.9,
                            filter: 'blur(20px)',
                            opacity: 0.5,
                            ease: "none",
                        }, "<");
                    }
                });
            });

            // Animations for graphics (all viewports)
            gsap.to('.rotating-motif', {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "linear",
            });

            gsap.to('.scanning-laser', {
                y: '100%',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });

            gsap.to('.pulsing-waveform', {
                strokeDashoffset: 0,
                duration: 2,
                repeat: -1,
                ease: "linear",
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="ai" ref={containerRef} className="relative w-full min-h-[300dvh] md:min-h-0 md:h-[100vh] bg-deep-void overflow-hidden">

            <ProtocolCard
                index={0}
                step="SYS-01"
                title="SaaS & Applications"
                description="Designing scalable Next.js architectures from the ground up. Building powerful digital products specifically for event organizers and sports management."
            >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 opacity-60">
                    <svg viewBox="0 0 100 100" className="w-full h-full rotating-motif" fill="none" stroke="currentColor">
                        <circle cx="50" cy="50" r="40" stroke="#7B61FF" strokeWidth="0.5" strokeDasharray="4 4" />
                        <rect x="25" y="25" width="50" height="50" stroke="#F0EFF4" strokeWidth="1" transform="rotate(45 50 50)" />
                        <polygon points="50,15 85,80 15,80" stroke="#18181B" strokeWidth="2" fill="none" />
                        <circle cx="50" cy="50" r="10" fill="#7B61FF" opacity="0.3" />
                    </svg>
                </div>
            </ProtocolCard>

            <ProtocolCard
                index={1}
                step="AI-02"
                title="Agentic Workflows"
                description="Integrating LLMs to automate tedious research processes. Turning hours of manual data extraction into highly predictable and automated pipelines."
            >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 border border-white/10 bg-graphite rounded-xl overflow-hidden flex items-center justify-center p-4 sm:p-8">
                    <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-1 opacity-20">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div key={i} className="bg-ghost/30 rounded-sm"></div>
                        ))}
                    </div>
                    <div className="scanning-laser absolute top-0 left-0 w-full h-[2px] bg-plasma shadow-[0_0_20px_rgba(123,97,255,1)] z-10"></div>
                    <svg className="absolute w-2/3 h-2/3 opacity-80" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </ProtocolCard>

            <ProtocolCard
                index={2}
                step="DAT-03"
                title="Data Telemetry"
                description="Applying a business analytics framework to engineering. Aggregating, structuring, and actioning data to transform raw metrics into predictive decisions."
            >
                <div className="relative w-full h-24 sm:h-32 md:h-48 flex items-center justify-center">
                    <svg viewBox="0 0 500 100" className="w-full h-full opacity-80 overflow-visible">
                        <path
                            className="pulsing-waveform drop-shadow-[0_0_10px_rgba(123,97,255,0.8)]"
                            d="M 0 50 L 150 50 L 175 10 L 225 90 L 250 50 L 500 50"
                            fill="none"
                            stroke="#7B61FF"
                            strokeWidth="3"
                            strokeDasharray="500"
                            strokeDashoffset="500"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M 0 50 L 500 50"
                            fill="none"
                            stroke="#F0EFF4"
                            strokeWidth="1"
                            opacity="0.1"
                        />
                    </svg>
                </div>
            </ProtocolCard>

        </section>
    );
}
