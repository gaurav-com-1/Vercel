import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const packages = [
  {
    title: 'Gym + Cardio',
    price: '3,500',
    features: ['Gym Access', 'Cardio Zone', 'Shower Facility'],
    popular: false,
  },
  {
    title: 'All Inclusive',
    price: '5,000',
    features: ['Everything in Gym + Cardio', 'Nutrition Counselling', 'Sauna Access'],
    popular: true,
  },
  {
    title: 'Class Pass',
    price: '1,500',
    features: ['Yoga Sessions', 'Zumba Classes', 'Stretching Zones'],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2>Choose Your <span className="text-accent">Perfect Plan</span></h2>
          <p className="mt-4">We offer flexible packages tailored to your lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.title} 
              className={`relative bg-secondary p-8 rounded-lg shadow-xl border-2 flex flex-col ${pkg.popular ? 'border-accent' : 'border-border'}`}
            >
              {pkg.popular && (
                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
              )}
              <h3 className="text-3xl font-bold text-center mb-2">{pkg.title}</h3>
              <p className="text-center mb-6">
                <span className="text-5xl font-extrabold text-accent">रु{pkg.price}</span>
                <span className="text-text-secondary">/month</span>
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <FaCheckCircle className="text-accent mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* CORRECT: The Next.js Link uses 'href' instead of 'to' */}
              <Link href="/services" className="w-full text-center bg-accent text-primary font-bold py-3 px-6 rounded-lg text-lg hover:brightness-110 transition-all duration-300">
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
         <div className="text-center mt-16">
          {/* CORRECT: The Next.js Link uses 'href' instead of 'to' */}
          <Link 
            href="/services" 
            className="text-accent font-semibold text-lg hover:underline"
          >
            View All Packages & Pricing &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;