import EventsCard from '../Shared/EventsCard';

const UpComingEvents = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <h1 className='text-3xl  lg:text-5xl'>UpComing Events</h1>
      <div className='flex flex-wrap justify-center'>
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

export default UpComingEvents;
