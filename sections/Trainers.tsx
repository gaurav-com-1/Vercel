'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const trainers = [
  {
    name: 'Subodh Parajuli',
    specialty: 'Certified Trainer',
    image: '/trainers/Subodh-Parajuli.jpg',
  },
  {
    name: 'Animesh Parajuli',
    specialty: 'Cardio & Conditioning',
    image: '/trainers/Animesh_Parajuli.jpg',
  },
  {
    name: 'Mahesh Parajuli',
    specialty: 'Cardio & Conditioning',
    image: '/trainers/Mahesh_Parajuli.jpg',
  },
  {
    name: 'Ashesh Neupane',
    specialty: 'Nutrition Expert - Certified from Patan Hospital',
    image: '/trainers/Ashish-Neupane.jpg',
  },
];

const Trainers: React.FC = () => {
  // State to track the currently "active" or "tapped" trainer card on mobile
  const [activeTrainer, setActiveTrainer] = useState<string | null>(null);

  // Handler for tapping a card
  const handleCardClick = (name: string) => {
    // If the clicked card is already active, deactivate it. Otherwise, activate it.
    setActiveTrainer(prev => (prev === name ? null : name));
  };

  return (
    <section id="trainers" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2>Meet Our <span className="text-accent">Dedicated Trainers</span></h2>
          <p className="mt-4">Our experts are here to guide you on your fitness journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {trainers.map((trainer) => {
            const isActive = activeTrainer === trainer.name;

            return (
              <div 
                key={trainer.name} 
                className="bg-primary rounded-lg overflow-hidden shadow-xl text-center group"
                // On touch devices, this click handler manages the "reveal"
                onClick={() => handleCardClick(trainer.name)}
                // On desktop, this helps dismiss an active card if the mouse leaves
                onMouseLeave={() => setActiveTrainer(null)}
              >
                <div className="relative h-80">
                  <Image 
                    src={trainer.image} 
                    alt={`Photo of ${trainer.name}`}
                    fill 
                    className="object-cover object-top" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-60'}`}>
                    <div className="flex items-center justify-center space-x-4 h-full">
                      <a 
                        href="#" 
                        onClick={(e) => e.stopPropagation()}
                        className={`text-white transition-all duration-300 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}
                      >
                        <FaInstagram size={24} />
                      </a>

                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3>{trainer.name}</h3>
                  <p className="text-accent !text-base">{trainer.specialty}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trainers;