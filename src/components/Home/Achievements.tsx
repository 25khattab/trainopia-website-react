import { useTranslation } from 'react-i18next';
import CountUp from '../Shared/CountUp';

const Achievements = () => {
  const { t } = useTranslation('achievements');

  return (
    <>
      <div className='absolute bottom-0 h-[10vh] w-full bg-popover opacity-70 md:min-h-20'></div>
      <div className='absolute bottom-0 flex h-[10vh] w-full items-center divide-x-2 md:min-h-20 rtl:divide-x-reverse'>
        {t('achievements', { returnObjects: true }).map((achievement, index) => (
          <CountUp key={index} value={achievement.value} label={achievement.label} />
        ))}
      </div>
    </>
  );
};

export default Achievements;
