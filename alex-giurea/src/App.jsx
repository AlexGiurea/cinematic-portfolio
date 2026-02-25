import React, { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TennisCareer from './components/TennisCareer';
import AiWorkflows from './components/AiWorkflows';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Chatbot from './components/Chatbot';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [resumeTab, setResumeTab] = useState('software');

    useLayoutEffect(() => {
        // Global GSAP context
        let ctx = gsap.context(() => {
            // Global animations can be defined here, 
            // but most will be inside individual components
        });

        return () => ctx.revert();
    }, []);

    return (
        <main className="relative bg-deep-void min-h-screen text-ghost font-sans selection:bg-plasma/30">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === 'home' ? (
                <>
                    <Hero setCurrentPage={setCurrentPage} setResumeTab={setResumeTab} />
                    <TennisCareer />
                    <AiWorkflows />
                </>
            ) : (
                <Resume initialTab={resumeTab} setResumeTab={setResumeTab} />
            )}
            <Footer />
            <Chatbot />
        </main>
    );
}
