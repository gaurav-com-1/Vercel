import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import { 
  FaDumbbell, FaHeartbeat, FaAppleAlt, FaHotjar, FaSwimmer, FaUserFriends, 
  FaChalkboardTeacher, FaKey, FaYinYang, FaMusic, FaCheckCircle 
} from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Our Services | Invictus Fitness',
    description: 'Explore our wide range of services including personal training, group classes, nutrition counseling, sauna, and state-of-the-art gym facilities.',
};

const gymServices = [
  { icon: <FaDumbbell size={24} className="text-accent" />, name: 'State-of-the-art Gym' },
  { icon: <FaHeartbeat size={24} className="text-accent" />, name: 'Modern Cardio Machines' },
  { icon: <FaAppleAlt size={24} className="text-accent" />, name: 'Nutrition Counselling' },
  { icon: <FaHotjar size={24} className="text-accent" />, name: 'Sauna & Relaxation' },
  { icon: <FaSwimmer size={24} className="text-accent" />, name: 'Swimming Pool' },
  { icon: <FaUserFriends size={24} className="text-accent" />, name: 'Personal Training' },
  { icon: <FaChalkboardTeacher size={24} className="text-accent" />, name: 'Group Training Programs' },
  { icon: <FaKey size={24} className="text-accent" />, name: 'Spacious Locker Facility' },
  { icon: <FaYinYang size={24} className="text-accent" />, name: 'Yoga & Wellness Classes' },
  { icon: <FaMusic size={24} className="text-accent" />, name: 'High-Energy Zumba' },
];

const packages = [
  { title: 'Gym + Cardio', description: 'A balanced package combining strength training & cardio.', includes: ['Gym Access', 'Cardio Zone', 'Shower Facility'], prices: [{ duration: '1 Month', price: '3,500' }, { duration: '3 Months', price: '9,000' }, { duration: 'Half Year', price: '16,800' }, { duration: 'Annual', price: '32,000' }], popular: false },
  { title: 'Gym + Cardio + Nutrition', description: 'A holistic fitness plan with training, cardio, and nutrition guidance.', includes: ['Everything in Gym + Cardio', 'Nutrition Counselling'], prices: [{ duration: '1 Month', price: '5,000' }, { duration: '3 Months', price: '14,500' }, { duration: 'Half Year', price: '28,500' }, { duration: 'Annual', price: '55,000' }], popular: true },
  { title: 'Yoga Classes', description: 'Open-air sessions led by top yoga instructors. Perfect for all levels.', includes: ['Asana Practice', 'Pranayama', 'Stretching', 'Sun Salutations'], prices: [{ duration: '1 Month', price: '1,500' }, { duration: '3 Months', price: '4,000' }, { duration: 'Half Year', price: '8,000' }, { duration: 'Annual', price: '15,000' }], popular: false },
  { title: 'Zumba Classes', description: 'Dance your way to fitness with fun, high-energy workouts.', includes: ['Dance Workouts', 'Cardio', 'Strength Training', 'Choreography'], prices: [{ duration: '1 Month', price: 'N/A' }, { duration: '3 Months', price: 'N/A' }, { duration: 'Half Year', price: 'N/A' }, { duration: 'Annual', price: 'N/A' }], note: "Coming Soon", popular: false },
];

const otherServices = [
    { name: 'Personal Training', price: 'Contact for quote', description: 'Customized 1-on-1 sessions with certified trainers.' },
    { name: 'Institutional Training', price: 'Contact for quote', description: 'Fitness programs for schools & organizations.' },
    { name: 'Locker Facility', price: 'रु 300 / month', description: 'Secure your belongings with a personal locker.' },
    { name: 'Sauna Access', price: 'रु 600 (single) | रु 1000 (group)', description: 'Relax and detoxify after your workout.' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-primary">
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <Image src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Person lifting weights" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-white">Our Services</h1>
          <p className="text-xl md:text-2xl text-accent mt-4 font-light tracking-wide">Passionate Experts, Energizing Lives</p>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-lg md:text-xl leading-relaxed">
            At Invictus Fitness, our team of certified trainers, nutrition counselors, and wellness professionals are committed to energizing your life through personalized fitness and wellness solutions.
            </p>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
            <h2 className="text-center mb-12">What We <span className="text-accent">Offer</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                {gymServices.map(service => (
                    <div key={service.name} className="flex flex-col items-center">
                        <div className="bg-secondary p-4 rounded-full mb-3 border border-border">
                            {service.icon}
                        </div>
                        <p className="font-medium text-text-primary">{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4">Personalized Plans for <span className="text-accent">Everyone</span></h2>
            <p className="max-w-3xl mx-auto mb-10">
                Whether your goal is weight loss, muscle gain, endurance, or overall wellness, Invictus Fitness has a plan for you.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-12 gap-y-4">
                <div className="flex items-center gap-3"><FaCheckCircle className="text-accent" size={22} /><span>Daily, monthly, and annual memberships</span></div>
                <div className="flex items-center gap-3"><FaCheckCircle className="text-accent" size={22} /><span>Customized workout & nutrition plans</span></div>
                <div className="flex items-center gap-3"><FaCheckCircle className="text-accent" size={22} /><span>Flexible packages tailored to your lifestyle</span></div>
            </div>
        </div>
      </section>

      <section id="packages" className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12">Our <span className="text-accent">Packages</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.title} className={`relative bg-secondary p-8 rounded-lg shadow-xl border border-border flex flex-col transition-all duration-300 hover:border-accent hover:scale-105 ${pkg.popular ? '!border-accent' : ''}`}>
                {pkg.popular && <span className="absolute top-0 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-b-md">MOST POPULAR</span>}
                <h3>{pkg.title}</h3>
                <p className="mb-6 flex-grow">{pkg.description}</p>
                <ul className="mb-6 space-y-2">
                  {pkg.includes.map(item => <li key={item} className="flex items-center"><FaCheckCircle className="text-accent mr-3" />{item}</li>)}
                </ul>
                <div className="mt-auto">
                    {pkg.prices.map(price => <div key={price.duration} className="flex justify-between border-t border-border py-3"><span className="text-text-secondary">{price.duration}</span><span className="font-bold">{price.price.startsWith('N/A') ? price.price : `रु ${price.price}`}</span></div>)}
                    {pkg.note && <p className="text-center text-accent mt-4 font-semibold">{pkg.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
            <h2 className="text-center mb-12">Additional <span className="text-accent">Services</span></h2>
            <div className="max-w-4xl mx-auto">
                {otherServices.map(service => (
                    <div key={service.name} className="flex flex-col sm:flex-row justify-between items-center bg-primary p-6 rounded-lg mb-4 border border-border">
                        <div>
                            <h3 className="text-xl">{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                        <div className="mt-4 sm:mt-0 text-lg font-bold bg-accent text-primary py-2 px-4 rounded-md">{service.price}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;