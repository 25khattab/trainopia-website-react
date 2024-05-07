import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { mediaImages } from '@/data/homePage/mediaImages';
import { useAppSelector } from '@/hooks/reduxHooks';

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
          {mediaImages.map((item, index) => (
            <CarouselItem key={index} className='basis-1/1  md:basis-1/3 lg:basis-1/4'>
              <div className='m-4 h-[35vh] w-[60vw] md:w-[30vw] lg:w-[20vw]' key={index}>
                <img src={item} alt='' className='aspect-video h-full w-full object-cover' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImagesCarosal;
