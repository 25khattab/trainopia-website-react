import ActivitiesCard from '../Shared/ActivitiesCard';
import { activities } from '@/locales/ar';

const Activities = () => {
  const activitiesKeys = Object.keys(activities) as Array<keyof typeof activities>;

  return (
    <div className='mt-20 flex flex-col items-center' id='activities'>
      <h1 className='text-3xl lg:text-5xl'>Activities</h1>
      <div className='flex flex-wrap justify-center'>
        {activitiesKeys.map((value, index) => {
          return <ActivitiesCard key={index} activity={value} />;
        })}
      </div>
    </div>
  );
};

export default Activities;
