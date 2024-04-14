import { useParams } from 'react-router-dom';
import { ActivityTitlesTypes, activityTitles } from '@/@types/activity';
import HeroActivity from './../components/activities/HeroActivity';
import ActivityDes from '@/components/activities/ActivityDes';
import VideoSection from '@/components/activities/VideoSection';
import FeaturesSection from '@/components/activities/FeaturesSection';
import ProgramsSection from '@/components/activities/ProgramsSection';

const Activity = () => {
  const params = useParams();

  const title = params.title;
  function isTitleValid(title: string): title is ActivityTitlesTypes {
    return activityTitles.includes(title as ActivityTitlesTypes);
  }

  return (
    <div>
      {isTitleValid(title!) && (
        <div>
          <HeroActivity title={title} />
          <ActivityDes title={title} />
          <VideoSection title={title} />
          <FeaturesSection title={title} />
          <ProgramsSection title={title} />
        </div>
      )}
    </div>
  );
};

export default Activity;
