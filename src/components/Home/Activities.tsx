import { useTranslation } from 'react-i18next';
import ActivitiesCard from '../Shared/ActivitiesCard';
import { activities } from '@/locales/ar';
import { useTheme } from '@/state/context/theme-provider';

const Activities = () => {
  const activitiesKeys = Object.keys(activities) as Array<keyof typeof activities>;
  const { t } = useTranslation('headLines');
  const { theme } = useTheme();
  const bgImg = theme == 'dark' ? 'bg-light-pattern' : 'bg-dark-pattern';
  return (
    <div className='relative flex flex-col items-center' id='activities'>
      <div className='relative w-full'>
        {/* @ts-ignore */}
        <h1 className='font-mikhak translate-y-[10px] py-6 text-center text-3xl lg:text-5xl'>{t('activities')} </h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        {activitiesKeys.map((value, index) => {
          return <ActivitiesCard key={index} activity={value} />;
        })}
      </div>
    </div>
  );
};

export default Activities;
