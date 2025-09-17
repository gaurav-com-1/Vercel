import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Us | Invictus Fitness',
  description: 'Learn about the philosophy, community, and mission of Invictus Fitness. Join a gym dedicated to strength, resilience, and support.',
};

const AboutPage: React.FC = () => {
  return (
    <>
      <section 
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
      >
        <Image 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib-rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto-format=fit=crop&w=1220&q=80"
          alt="Woman doing yoga"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-widest uppercase">
            ABOUT
          </h1>
        </div>
      </section>

      <section id="philosophy" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2>Our <span className="text-accent">Unconquerable</span> Philosophy</h2>
              {/* --- THIS IS THE CORRECTED TEXT --- */}
              <p className="mt-6 mb-6 leading-relaxed">
                We adopted the name <span className="text-accent font-semibold">Invictus</span>, the Latin for &apos;unconquerable&apos;, because it perfectly captures the spirit we instill in our members. Fitness is a journey of resilience, of pushing past perceived limits, and of discovering the indomitable strength within.
              </p>
              <p className="mb-6 leading-relaxed">
                Our community is our backbone. We foster an environment of mutual support, where every push-up, every lift, and every milestone is a shared victory. Here, you are not just a member; you are part of a team dedicated to becoming the strongest version of yourselves, together.
              </p>
              <p className="font-semibold text-text-primary">
                Strength. Community. Resilience. This is Invictus.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-96">
              <Image 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Gym Community" 
                fill
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;