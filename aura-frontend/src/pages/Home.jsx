import Hero from '../components/hero';
import WhyChooseAura from '../components/whyChooseAura';
import FeaturedProducts from '../components/featureProducts';
import Testimonials from "../components/testimonials";
import BraceletSection from '../components/braceletSection';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChooseAura />
      <BraceletSection/>
     <Testimonials/>
    </>
  );
}
export default Home;
