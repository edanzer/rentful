import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Features } from '../components/template/Features';
import { Footer } from '../components/template/Footer';
import { Hero } from '../components/template/Hero';


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
