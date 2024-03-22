import { useAppSelector } from '@/hooks/reduxHooks';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Achievements from './Achievements';
const Hero = () => {
  const language = useAppSelector((state) => state.language.arabic);
  const carouselImages = ['images/lol1.jpg', 'images/lol2.jpg', 'images/lol3.jpg', 'images/lol4.jpg', 'images/lol5.jpg'];
  return (
    <div className='relative z-30'>
      <Carousel
        className='mx-auto'
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{ loop: true, duration: 50, direction: language ? 'rtl' : 'ltr' }}
      >
        <CarouselContent>
          {carouselImages.map((image, key) => (
            <CarouselItem key={key}>
              <div className='relative h-[90vh]'>
                <img src={image} alt='' className='aspect-video h-full w-full blur-[1px]' />
                <div className='absolute right-1/2 top-[15%] flex translate-x-[50%] translate-y-[50%] flex-col items-center font-bold'>
                  <img src='icons/logo.png' className='w-32' alt='' />
                  <h1>hello world</h1>
                  <h3>hello man</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Achievements />
    </div>
  );
};

export default Hero;
