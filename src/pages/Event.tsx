import { useParams } from 'react-router-dom';
import EventHero from '@/components/upComingEvents/EventHero';
import EventDetails from '@/components/upComingEvents/EventDetails';
import EventGoals from '@/components/upComingEvents/EventGoals';

const Event = () => {
  const params = useParams();
  const title = params.title;

  return (
    <>
      {title == 'superHero' && (
        <div>
          <EventHero title={title} />
          <EventDetails title={title} />
          <EventGoals title={title} />
        </div>
      )}
    </>
  );
};

export default Event;
export interface IEvent {
  title: 'superHero';
}
