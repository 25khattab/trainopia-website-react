import { BsMic } from 'react-icons/bs';
import { podcastData } from '@/data/homePage/mediaPodcastData';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useAppSelector } from '@/hooks/reduxHooks';
const PodcastCarousal = () => {
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
        className='max-w-[100vw]'
      >
        <CarouselContent className=''>
          {podcastData.map((item, index) => (
            <CarouselItem key={index} className='basis-1/1 md:basis-1/3 lg:basis-1/4 '>
              <div className='group relative m-4 h-[35vh] w-[60vw] cursor-pointer md:w-[30vw]  lg:w-[20vw]' key={index}>
                <a href={item.audioURL} target='_blank'>
                  <div className='absolute hidden h-full w-full items-center justify-center rounded-2xl bg-accent opacity-75 group-hover:flex'>
                    <BsMic size={50} />
                  </div>
                  <img src={item.imagePath} className='h-full w-full rounded-2xl' />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PodcastCarousal;
