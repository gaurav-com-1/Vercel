import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Trainers from '@/sections/Trainers';
import Pricing from '@/sections/Pricing';
import Blog from '@/sections/Blog';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Pricing />
      <Blog />
    </>
  )
}