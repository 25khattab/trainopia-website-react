import { useAppSelector } from '@/hooks/reduxHooks';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Achievements from './Achievements';
import { carouselImages } from '@/data/carouselImages';
const Hero = () => {
  const language = useAppSelector((state) => state.language.arabic);
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
            <CarouselItem key={key} className=''>
              <div className='relative h-[90dvh]'>
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
