import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Testimonial from '@/components/Home/Testimonial';
import UpComingEvents from '../components/Home/UpComingEvents';
import Partners from '@/components/Home/Partners';
import Footer from '@/components/Home/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <UpComingEvents />
      <Partners />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
