import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useAppSelector } from '@/hooks/reduxHooks';
import TestomonialCard from '../Shared/TestomonialCard';
import { reviews } from '@/locales/ar';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation('headLines');
  const language = useAppSelector((state) => state.language.arabic);
  const reviewKeys = Object.keys(reviews) as Array<keyof typeof reviews>;
  return (
    <div className='text-center'>
      <h1 className='mb-10 text-3xl lg:text-5xl'>{t('reviews')}</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{ loop: true, duration: 20, direction: language ? 'rtl' : 'ltr' }}
      >
        <CarouselContent>
          {reviewKeys.map((value, index) => (
            <CarouselItem key={index} className='basis-1/1 md:basis-1/2 lg:basis-1/3'>
              <TestomonialCard review={value} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonial;
