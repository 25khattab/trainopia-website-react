import { activities } from '@/locales/ar';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { activityLogos } from '@/data/shared/activityLogos';
import { useTheme } from '@/state/context/theme-provider';
interface IProp {
  activity: keyof typeof activities;
}
const ActivitiesCard = ({ activity }: IProp) => {
  const [active, setActive] = useState(false);
  const [screenSize, setScreenSize] = useState(false);
  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
  }, []);
  const updateSize = () => {
    window.innerWidth <= 768 ? setScreenSize(true) : setScreenSize(false);
  };
  const { theme } = useTheme();
  const { t } = useTranslation('activities', { keyPrefix: activity });

  return (
    <Link
      to={`/activity/${activity}`}
      className='relative    min-h-60 w-[80vw]  bg-primary-foreground shadow-sm shadow-foreground sm:min-h-52 md:min-h-44 md:w-[35vw]'
      onMouseLeave={() => setActive((prv) => !prv)}
      onMouseEnter={() => setActive((prv) => !prv)}
    >
      <div className='flex h-full flex-row items-start   justify-around px-10 sm:justify-between md:items-center'>
        <img
          loading='lazy'
          src={theme == 'light' ? activityLogos.light[activity] : activityLogos.dark[activity]}
          alt=''
          className='w-20 md:w-[25%] md:min-w-20'
        />
        <h1 className='  py-5 text-sm md:text-base lg:text-2xl'>{t('title')}</h1>
      </div>
      <div>
        <AnimatePresence>
          {active || screenSize ? (
            <div className='absolute top-0 h-full w-full'>
              <motion.div
                transition={{ ease: 'easeOut', duration: 0.5 }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: '75%' }}
                exit={{ width: 0, opacity: 0 }}
                className='absolute top-0 hidden h-full w-full bg-secondary opacity-75 md:flex'
              ></motion.div>
              <motion.p
                transition={{ ease: 'easeOut', duration: 0.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='absolute top-1/2 w-full -translate-y-1/3 p-[10%] text-sm md:-translate-y-1/2 lg:text-base'
              >
                {t('shortDes')}
              </motion.p>
            </div>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default ActivitiesCard;
