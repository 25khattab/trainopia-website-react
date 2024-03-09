import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useAppSelector } from '@/hooks/reduxHooks';
import TestomonialCard from '../Shared/TestomonialCard';

const Testimonial = () => {
  const language = useAppSelector((state) => state.language.arabic);
  return (
    <div className='text-center'>
      <h1 className='mb-10 text-3xl lg:text-5xl'>Reviews</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{ loop: true, duration: 20, direction: language ? 'rtl' : 'ltr' }}
      >
        <CarouselContent>
          <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard desc=' l ' />
          </CarouselItem>
          <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
          <CarouselItem className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
            <TestomonialCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonial;
