import { useTranslation } from 'react-i18next';
import ActivitiesCard from '../Shared/ActivitiesCard';
import { activities } from '@/locales/ar';

const Activities = () => {
  const activitiesKeys = Object.keys(activities) as Array<keyof typeof activities>;
  const { t } = useTranslation('headLines');
  return (
    <div className='relative flex flex-col items-center' id='activities'>
      <div className='relative w-full'>
        {/* @ts-ignore */}
        <h1 className='font-mikhak translate-y-[10px] py-6 text-center text-3xl lg:text-5xl'>{t('activities')} </h1>
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {activitiesKeys.map((value, index) => {
          return <ActivitiesCard key={index} activity={value} />;
        })}
      </div>
    </div>
  );
};

export default Activities;
