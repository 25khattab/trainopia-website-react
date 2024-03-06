import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { imagesData } from '@/data/mediaImagesData';
import { useAppSelector } from '@/state/hooks';

const ImagesCarosal = () => {
  const language = useAppSelector((state) => state.language.arabic);
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{ loop: true, duration: 20, direction: language ? 'rtl' : 'ltr' }}
      >
        <CarouselContent>
          {imagesData.map((item, index) => (
            <CarouselItem className='basis-1/1 md:basis-1/3 lg:basis-1/4'>
              <div className='my-4 h-[35vh] w-[60vw] md:w-[30vw] lg:w-[20vw]' key={index}>
                <img src={item} alt='' className='h-full w-full' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImagesCarosal;
