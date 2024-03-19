import Hero from '@/components/Home/Hero';
import Activities from '@/components/Home/Activities';
import Testimonial from '@/components/Home/Testimonial';
import UpComingEvents from '../components/Home/UpComingEvents';
import Partners from '@/components/Home/Partners';
import Media from '@/components/Home/Media';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='lg:px-[8vw]'>
        <Activities />
        <UpComingEvents />
        <Media />
        <Partners />
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
