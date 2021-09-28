import { Meta } from '../components/partials/meta/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from '../components/sections/Banner';
import { FAQ } from '../components/sections/FAQ';
import { Features } from '../components/sections/Features';
import { Footer } from '../components/partials/footer/Footer';
import { Hero } from '../components/sections/Hero';
import { Pricing } from '../components/sections/Pricing';
import { Testimonial } from '../components/sections/Testimonial';
import { VerticalFeatures } from '../components/sections/VerticalFeatures';

const Template = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Features />
    <VerticalFeatures />
    <Testimonial />
    <Pricing />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

// export { Base };

// import { Base } from '../components/template/Base';

// const Template = () => <Base />;

export default Template;