import { ITitle } from '@/@types/event';
import { useAppSelector } from '@/hooks/reduxHooks';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useTranslation } from 'react-i18next';
import GoalsCard from './GoalsCard';

const EventGoals = ({ title }: ITitle) => {
  const language = useAppSelector((state) => state.language.arabic);
  const { t } = useTranslation(title);
  const goalKeys = t('goals.content', { returnObjects: true });

  return (
    <div className='flex flex-col items-center gap-6 p-10'>
      <h2 className='text-3xl lg:text-6xl'>{t('goals.headLine')}</h2>
      <Carousel
        className='max-w-[95vw] overflow-hidden text-sm lg:text-xl'
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{ loop: true, duration: 20, direction: language ? 'rtl' : 'ltr' }}
      >
        <CarouselContent className=''>
          {goalKeys.map((goal, index) => (
            <CarouselItem key={index} className='basis-full md:basis-1/2 lg:basis-1/3'>
              <GoalsCard goal={goal} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default EventGoals;
