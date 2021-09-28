import { Banner } from '../components/sections/Banner';
import { FAQ } from '../components/sections/FAQ';
import { Features } from '../components/sections/Features';
import { Hero } from '../components/sections/Hero';
import { Pricing } from '../components/sections/Pricing';
import { Testimonial } from '../components/sections/Testimonial';
import { VerticalFeatures } from '../components/sections/VerticalFeatures';

const Template = () => (
  <div className="antialiased text-gray-600">
    <Hero />
    <Features />
    <VerticalFeatures />
    <Testimonial />
    <Pricing />
    <FAQ />
    <Banner />
  </div>
);

export default Template;