import Layout from '@/react-app/components/Layout';
import Hero from '@/react-app/components/Hero';
import Highlights from '@/react-app/components/Highlights';
import FeaturedProducts from '@/react-app/components/FeaturedProducts';
import ProcessSection from '@/react-app/components/ProcessSection';
import Testimonials from '@/react-app/components/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Highlights />
      <FeaturedProducts />
      <ProcessSection />
      <Testimonials />
    </Layout>
  );
}
