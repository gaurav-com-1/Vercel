import React from 'react';
import Image from 'next/image'; // NEXT.JS CHANGE: Import the optimized Image component

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      {/* NEXT.JS CHANGE: Use the Image component for background images for optimization */}
      <Image
        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80"
        alt="Gym background with weights"
        fill
        className="object-cover"
        priority // Load this image first as it's above the fold
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 px-6">
        <h1 className="text-white md:text-7xl">
          Forge Your Body, <span className="text-accent">Unleash Your Soul</span>
        </h1>
        <p className="text-gray-200 mt-4 text-xl mb-8 max-w-2xl mx-auto">
          Experience state-of-the-art equipment, expert trainers, and a community that motivates you.
        </p>
        <a href="#pricing" className="bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
          Join Today
        </a>
      </div>
    </section>
  );
};

export default Hero;