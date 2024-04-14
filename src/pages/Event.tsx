import EventDetails from '@/components/upComingEvents/EventDetails';
import EventGoals from '@/components/upComingEvents/EventGoals';
import EventHero from '@/components/upComingEvents/EventHero';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { EventTitlesTypes, eventTitles } from '@/@types/event';

interface ParamsType {
  title: string; // Define the type of the title property
}
const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams<ParamsType>();
  const title = params.title;

  function isTitleValid(title: string): title is EventTitlesTypes {
    return eventTitles.includes(title as EventTitlesTypes);
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
//#3 add the same name to the IEvent Array
