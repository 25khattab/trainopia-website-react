import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const Testimonial = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>...</CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>...</CarouselItem>
          <CarouselItem className='md:basis-1/2 lg:basis-1/3'>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonial;
