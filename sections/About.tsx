import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2>About <span className="text-accent">Invictus</span></h2>
          <p className="mt-4">Your journey to greatness starts here.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative h-80 md:h-96">
            <Image 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Gym Interior" 
              fill
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p>
              At Invictus, we believe that fitness is not just about building a better body, but a better life. Our philosophy is rooted in creating a supportive, high-energy environment where every member feels like part of a family.
            </p>
            <p className="mt-4">
              Founded in 2020, our mission has been to provide the ultimate fitness experience by combining cutting-edge equipment with personalized training programs. We are more than a gym; we are a community dedicated to helping you achieve your personal best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;