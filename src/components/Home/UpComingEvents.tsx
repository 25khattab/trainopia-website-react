import { events } from '@/locales/en';
import EventsCard from '../Shared/EventsCard';

const UpComingEvents = () => {
  const eventTitles = Object.keys(events) as Array<keyof typeof events>;
  return (
    <div className='flex flex-col items-center' id='event'>
      <h1 className='my-10 text-3xl lg:text-5xl'>UpComing Events</h1>
      <div className='flex flex-row flex-wrap justify-center gap-8'>
        {eventTitles.map((value, index) => (
          <EventsCard key={index} title={value} />
        ))}
      </div>
    </div>
  );
};

export default UpComingEvents;
