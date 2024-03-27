// import { events } from '@/locales/en';
import { useTranslation } from 'react-i18next';
import EventsCard from '../Shared/EventsCard';
import event from '@/locales/ar/events';
const UpComingEvents = () => {
  const eventTitles = Object.keys(event) as Array<keyof typeof event>;
  const { t } = useTranslation('headLines');
  return (
    <div className='flex flex-col items-center' id='event'>
      <h1 className='my-10 text-3xl lg:text-5xl'>{t('event')}</h1>
      <div className='flex flex-row flex-wrap justify-center gap-8'>
        {eventTitles.map((value, index) => (
          <EventsCard key={index} title={value} />
        ))}
      </div>
    </div>
  );
};

export default UpComingEvents;
