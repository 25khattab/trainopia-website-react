import { useTranslation } from 'react-i18next';
import IEvent from '@/@types/event';

const EventHero = ({ title }: IEvent) => {
  const { t } = useTranslation(title);
  return (
    <div className='relative'>
      <img src={`/images/${title}.png`} className='z-[-1] h-[80vh] w-full brightness-50' alt='' />
      <div className='absolute top-0 flex flex-col items-center p-10 text-white'>
        <h1 className='py-10 text-3xl font-extrabold uppercase md:text-6xl'>{t('title')}</h1>
        <p className='text-lg font-semibold md:w-[60%] md:text-2xl'>{t('shortDes')}</p>
      </div>
    </div>
  );
};

export default EventHero;
