import { Meta } from '../components/partials/meta/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Features } from '../components/sections/Features';
import { Footer } from '../components/partials/footer/Footer';
import { Hero } from '../components/sections/Hero';


const Index = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Features />
    <Footer />
  </div>
);

// export { Base };

// import { Base } from '../components/template/Base';

// const Index = () => <Base />;

export default Index;
