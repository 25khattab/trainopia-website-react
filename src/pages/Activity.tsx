import { activities } from '@/locales/ar';
import { useParams } from 'react-router-dom';
import { ActivityTitlesTypes, activityTitles } from '@/@types/activity';
import HeroActivity from './../components/activities/HeroActivity';
const Activity = () => {
  const params = useParams<{ title: keyof typeof activities }>();

  const title = params.title;
  function isTitleValid(title: string): title is ActivityTitlesTypes {
    return activityTitles.includes(title as ActivityTitlesTypes);
  }

  return <div>{isTitleValid(title!) && <HeroActivity title={title} />}</div>;
};

export default Activity;
