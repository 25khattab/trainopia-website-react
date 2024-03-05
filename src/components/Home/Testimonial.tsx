import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useAppSelector } from '@/state/hooks';
import TestomonialCard from '../Shared/TestomonialCard';

const Testimonial = () => {
  const language = useAppSelector((state) => state.language.arabic);
  return (
    <div className='text-center'>
      <h1 className='text-3xl  lg:text-5xl mb-10'>Reviews</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{ loop: true, duration: 20, direction: language ? 'rtl' : 'ltr' }}
      >
        <CarouselContent>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard desc=' l ' />
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonial;
