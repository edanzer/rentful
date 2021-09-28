import { Meta } from '../components/partials/meta/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Features } from '../components/sections/Features';
import { Hero } from '../components/sections/Hero';
import { Layout } from '../components/partials/layout/Layout';


const Index = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Layout>
      <Hero />
      <Features />
    </Layout>
  </div>
);

export default Index;
