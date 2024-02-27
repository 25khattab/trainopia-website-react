import { useTranslation } from 'react-i18next';
import CountUp from '../Shared/CountUp';

const Achievements = () => {
  const { t } = useTranslation('achievements');

  return (
    <>
      <div className='bg-popover opacity-70 absolute bottom-0 w-full h-24 md:h-32'></div>
      <div className='flex absolute w-full bottom-0 divide-x-2 rtl:divide-x-reverse  h-24 md:h-32 items-center'>
        {t('achievements', { returnObjects: true }).map((achievement, index) => (
          <CountUp key={index} value={achievement.value} label={achievement.label} />
        ))}
      </div>
    </>
  );
};

export default Achievements;
