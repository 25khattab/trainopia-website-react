import { ITitle } from '@/@types/activity';
import { useTranslation } from 'react-i18next';

const ActivityDes = ({ title }: ITitle) => {
  const { t } = useTranslation(title);
  return (
    <div className='flex flex-col items-center p-10 md:flex-row md:items-stretch'>
      <img src={`/images/${t('shortDesImg')}`} className='  w-[80%] md:w-[35%]' alt='' />
      <div className='px-10'>
        <div className='py-6'>
          <h2 className='py-2 md:text-2xl'>{t('shortDesHeadLine')}</h2>
          <hr className='w-[60px] border-accent' />
        </div>
        <p className='text-xs md:text-base'>{t('shorDes')}</p>
      </div>
    </div>
  );
};

export default ActivityDes;
