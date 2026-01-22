'use client';

import CallToAction from '@/sections/call-to-action';
import Features from '@/sections/features';
import HeroSection from '@/sections/hero-section';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <Features />
            <CallToAction />
        </main>
    );
}
