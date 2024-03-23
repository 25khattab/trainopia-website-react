import EventDetails from '@/components/upComingEvents/EventDetails';
import EventGoals from '@/components/upComingEvents/EventGoals';
import EventHero from '@/components/upComingEvents/EventHero';
import { useParams } from 'react-router-dom';
import IEvent from '@/@types/event';

const Event = () => {
  const params = useParams();
  const title = params.title;
  type TitleValues = IEvent['title'];
  function isTitleValid(title: string): title is TitleValues {
    return ['superHero', 'gameDevelopmentTrack', 'champion'].includes(title as TitleValues);
  }
  return (
    <>
      {isTitleValid(title!) && (
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

//to add new event
//#1 create the json files
//#2 make sure the exported name to be the same as the event image.png
//#3 add the same name to the IEvent interface
//#4 add the same name to the isTitleValid function  " type guard"
