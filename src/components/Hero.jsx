import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const TiltCard = ({ src, alt, className }) => {
    const cardRef = useRef(null);
    const wrapperRef = useRef(null);
    const imgRef = useRef(null);
    const glareRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const wrapper = wrapperRef.current;
            const card = cardRef.current;
            const img = imgRef.current;
            const glare = glareRef.current;

            const xTo = gsap.quickTo(card, "rotationY", { ease: "power3", duration: 0.4 });
            const yTo = gsap.quickTo(card, "rotationX", { ease: "power3", duration: 0.4 });
            const imgXTo = gsap.quickTo(img, "x", { ease: "power3", duration: 0.4 });
            const imgYTo = gsap.quickTo(img, "y", { ease: "power3", duration: 0.4 });
            const glareXTo = gsap.quickTo(glare, "x", { ease: "power3", duration: 0.4 });
            const glareYTo = gsap.quickTo(glare, "y", { ease: "power3", duration: 0.4 });

            const handleMouseMove = (e) => {
                const rect = wrapper.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const xPct = (e.clientX - centerX) / rect.width;
                const yPct = (e.clientY - centerY) / rect.height;

                xTo(xPct * 25);
                yTo(-yPct * 25);

                imgXTo(-xPct * 15);
                imgYTo(-yPct * 15);

                glareXTo(-xPct * 150);
                glareYTo(-yPct * 150);
            };

            const handleMouseEnter = () => {
                gsap.to(wrapper, { zIndex: 100, duration: 0 });
                gsap.to(card, {
                    scale: 1.05,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
                    duration: 0.4,
                    ease: "power3.out"
                });
                gsap.to(glare, { opacity: 0.6, duration: 0.3 });
            };

            const handleMouseLeave = () => {
                xTo(0);
                yTo(0);
                imgXTo(0);
                imgYTo(0);
                glareXTo(0);
                glareYTo(0);
                gsap.to(wrapper, { clearProps: "zIndex", delay: 0.5 });
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    duration: 0.8,
                    ease: "power3.out"
                });
                gsap.to(img, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
                gsap.to(glare, { opacity: 0, duration: 0.8 });
            };

            wrapper.addEventListener('mousemove', handleMouseMove);
            wrapper.addEventListener('mouseleave', handleMouseLeave);
            wrapper.addEventListener('mouseenter', handleMouseEnter);

            return () => {
                wrapper.removeEventListener('mousemove', handleMouseMove);
                wrapper.removeEventListener('mouseleave', handleMouseLeave);
                wrapper.removeEventListener('mouseenter', handleMouseEnter);
            };
        }, wrapperRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className={`perspective-[1500px] ${className}`} style={{ transformStyle: 'preserve-3d' }}>
            <div
                ref={cardRef}
                className="w-full h-full relative preserve-3d shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden border border-white/10 bg-graphite"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-2xl absolute inset-0 transform scale-[1.25] pointer-events-none"
                    style={{ transformOrigin: "center center", transformStyle: 'preserve-3d' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-void/80 via-transparent to-transparent pointer-events-none"></div>

                <div
                    ref={glareRef}
                    className="absolute inset-[-100%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_50%)] opacity-0 mix-blend-overlay pointer-events-none"
                />
            </div>
        </div>
    );
};

export default function Hero() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Animate text
            gsap.fromTo(
                '.hero-el',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2
                }
            );

            // Animate gallery cards
            gsap.fromTo('.hero-card',
                { y: 100, opacity: 0, rotationZ: gsap.utils.wrap([-10, 10, -5, 5]) },
                {
                    y: 0, opacity: 1, rotationZ: 0, duration: 1.5, stagger: 0.15, ease: "power3.out", delay: 0.6
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[100dvh] pt-32 pb-24 px-6 md:px-16 flex flex-col justify-center">

            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10 text-center lg:text-left">

                {/* Text Column */}
                <div className="flex-1 w-full max-w-2xl flex flex-col gap-6 items-center lg:items-start select-text">
                    <div className="hero-el font-mono text-plasma text-sm tracking-widest uppercase flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-plasma hidden lg:block"></span> Welcome
                    </div>

                    <h1 className="hero-el text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-ghost tracking-tighter leading-tight">
                        Hey, I'm <br className="hidden lg:block" />
                        <span className="text-plasma italic font-serif pr-2">Alex Giurea.</span>
                    </h1>

                    <p className="hero-el text-lg md:text-xl text-ghost/80 font-sans leading-relaxed">
                        I'm a senior studying Business Analytics and competing on the men's tennis team at LMU. I love coaching players on the court, and building powerful products off the court.
                    </p>

                    <p className="hero-el text-base md:text-lg text-ghost/60 font-sans leading-relaxed">
                        I build web apps, modern SaaS platforms, and AI automations that actually save people time. I care about making tools that aren't just useful, but feel incredibly smooth to use.
                    </p>

                    <div className="hero-el mt-4 flex gap-4">
                        <a href="#projects" className="magnetic-btn bg-plasma text-white px-8 py-4 rounded-full text-base font-semibold shadow-[0_0_30px_rgba(123,97,255,0.3)] hover:shadow-[0_0_50px_rgba(123,97,255,0.6)] transition-all">
                            See What I Build
                        </a>
                    </div>
                </div>

                {/* 3D Collage Column */}
                <div className="flex-1 w-full relative h-[500px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">

                    <TiltCard
                        src="/images/hero-5.jpeg"
                        alt="Alex competing"
                        className="hero-card w-[240px] h-[340px] md:w-[300px] md:h-[420px] absolute z-20 shadow-2xl"
                    />

                    <TiltCard
                        src="/images/hero-2.jpeg"
                        alt="Alex swinging racket"
                        className="hero-card w-[160px] h-[160px] md:w-[200px] md:h-[200px] absolute z-10 top-[5%] md:top-[10%] right-[5%] md:right-[0%] rotate-[8deg]"
                    />

                    <TiltCard
                        src="/images/hero-3.jpeg"
                        alt="Alex casual"
                        className="hero-card w-[150px] h-[200px] md:w-[180px] md:h-[240px] absolute z-30 bottom-[5%] md:bottom-[10%] left-[5%] md:left-[5%] -rotate-[6deg]"
                    />

                    <TiltCard
                        src="/images/hero-4.jpeg"
                        alt="Alex smiling with racket"
                        className="hero-card w-[140px] h-[180px] md:w-[170px] md:h-[210px] absolute z-10 bottom-[15%] md:bottom-[20%] right-[10%] md:right-[5%] rotate-[12deg]"
                    />

                    <TiltCard
                        src="/images/hero-1.jpeg"
                        alt="Alex action"
                        className="hero-card w-[130px] h-[160px] md:w-[160px] md:h-[200px] absolute z-10 top-[2%] md:top-[5%] left-[10%] md:left-[5%] -rotate-[10deg]"
                    />

                </div>

            </div>
        </section>
    );
}
