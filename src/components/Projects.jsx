import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Projects() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.project-card',
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-32 px-6 md:px-16 bg-[#06060A] relative z-10 w-full">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-ghost mb-4 tracking-tighter text-center">Featured Work</h2>
                <p className="text-plasma font-mono text-sm mb-16 text-center max-w-xl">
                    Systematic automations and software products engineered for precision and scale.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center max-w-5xl">

                    {/* Card 1 */}
                    <div className="project-card bg-graphite/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 flex flex-col gap-6">
                        <div>
                            <div className="font-mono text-xs text-ghost/50 mb-2">01 — AI Automation</div>
                            <h3 className="text-2xl font-sans font-bold text-ghost mb-2">ProTennisJobs Scraper</h3>
                            <p className="text-ghost/60 text-sm leading-relaxed min-h-[60px]">
                                AI-powered scraper computing applicant fit scores, calculating distances, and auto-generating outreach emails.
                            </p>
                        </div>
                        <ul className="flex flex-col gap-3 font-mono text-xs text-ghost/70">
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-plasma"></span> AI Suitability Scoring (0-10)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-plasma"></span> Geolocation Filtering
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-plasma"></span> Auto-Drafted Outreach
                            </li>
                        </ul>
                        <a href="https://protennisjobs-ai-scraper.vercel.app/" target="_blank" rel="noreferrer" className="w-full mt-4 py-3 rounded-full border border-white/10 text-center text-sm font-semibold hover:bg-white/5 transition-colors magnetic-link">
                            Open App
                        </a>
                    </div>

                    {/* Card 2 - Middle Card Pops */}
                    <div className="project-card bg-deep-void ring-2 ring-plasma rounded-[2.5rem] p-10 flex flex-col gap-6 shadow-[0_0_40px_rgba(123,97,255,0.15)] relative scale-100 md:scale-105 z-10">
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-plasma text-white text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(123,97,255,0.5)]">
                            Flagship SaaS
                        </div>
                        <div>
                            <div className="font-mono text-xs text-plasma/70 mb-2">02 — Platform</div>
                            <h3 className="text-3xl font-sans font-bold text-ghost mb-2">DrawGen</h3>
                            <p className="text-ghost/80 text-sm leading-relaxed min-h-[60px]">
                                Professional tournament draws and court scheduling for event organizers. Next.js application to replace spreadsheets.
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
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_#7B61FF] bg-plasma"></span> Live Export Engine
                            </li>
                        </ul>
                        <a href="https://drawgen-frc5.vercel.app/" target="_blank" rel="noreferrer" className="w-full mt-4 py-4 rounded-full bg-plasma text-white text-center text-sm font-semibold hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-shadow magnetic-btn">
                            Open App
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}
