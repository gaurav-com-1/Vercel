import React from 'react';
import Link from 'next/link';
import { FaDumbbell, FaUsers, FaAppleAlt, FaHeartbeat, FaHotjar } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';

const services = [
  {
    icon: <CgGym size={50} className="text-accent" />,
    title: 'State-of-the-Art Gym',
    description: 'Access top-tier strength and resistance training equipment in a motivating environment.',
  },
  {
    icon: <FaHeartbeat size={50} className="text-accent" />,
    title: 'Cardio Zone',
    description: 'Improve your cardiovascular health with our wide array of modern cardio machines.',
  },
  {
    icon: <FaDumbbell size={50} className="text-accent" />,
    title: 'Personal Training',
    description: 'Achieve your goals faster with one-on-one guidance from our certified expert trainers.',
  },
  {
    icon: <FaUsers size={50} className="text-accent" />,
    title: 'Group Classes',
    description: 'Join high-energy classes like Yoga and Zumba to get fit with our vibrant community.',
  },
  {
    icon: <FaAppleAlt size={50} className="text-accent" />,
    title: 'Nutrition Counselling',
    description: 'Fuel your body right with personalized nutrition plans designed by our in-house dietitians.',
  },
  {
    icon: <FaHotjar size={50} className="text-accent" />,
    title: 'Sauna & Relaxation',
    description: 'Relax, rejuvenate, and enhance your recovery in our premium sauna facilities after your workout.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2>Our <span className="text-accent">Services</span></h2>
          <p className="mt-4 max-w-2xl mx-auto">
            We offer a wide range of services to help you succeed, from state-of-the-art equipment to expert-led wellness programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-border hover:border-accent">
              <div className="inline-block p-4 bg-primary rounded-full mb-4">
                {service.icon}
              </div>
              {/* REFACTORED: Removed the 'text-white' class to allow theme-aware colors */}
              <h3 className="mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/services" 
            className="bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;