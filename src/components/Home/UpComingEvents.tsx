import EventsCard from '../Shared/EventsCard';

const UpComingEvents = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='my-10 text-3xl lg:text-5xl'>UpComing Events</h1>
      <div className='flex flex-row flex-wrap justify-center gap-8'>
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

export default UpComingEvents;
