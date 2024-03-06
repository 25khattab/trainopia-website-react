import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Testimonial from '@/components/Home/Testimonial';
import UpComingEvents from '../components/Home/UpComingEvents';
import Partners from '@/components/Home/Partners';
import Footer from '@/components/Home/Footer';
import Media from '@/components/Home/Media';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='lg:px-[8vw]'>
        <Services />
        <UpComingEvents />
        <Media />
        <Partners />
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
