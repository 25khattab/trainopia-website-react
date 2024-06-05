import { ITitle } from '@/@types/activity';
import { useTranslation } from 'react-i18next';
import { activityImages } from '@/data/activityPage/activitiesImages';
const ActivityDes = ({ title }: ITitle) => {
  const { t } = useTranslation(title);
  return (
    <div className='flex flex-col items-center px-2 py-10 sm:p-10 md:flex-row md:items-stretch'>
      {/* <img src={`/${activityImages[title][1]}`} className='sm:w-[60%] md:w-[35%] md:object-cover' alt='' /> */}
      <div className='md:px-10'>
        <div className='py-6'>
          <h2 className='py-2 text-lg md:text-4xl'>{t('HeadLine.breif')}</h2>
          <hr className='w-[60px] border-accent' />
        </div>
        <p className='text-base md:text-lg lg:text-3xl'>{t('shorDes')}</p>
      </div>
    </div>
  );
};

export default ActivityDes;
