import { partnersLogo } from '@/data/partners';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation('headLines');
  return (
    <div className='mt-20 flex flex-col items-center'>
      <h1 className='text-3xl lg:text-5xl'>{t('partners')}</h1>
      <div className='my-10 flex w-full flex-wrap justify-center md:gap-10'>
        {partnersLogo.map((value, index) => (
          <img src={value} key={index} alt='' className='aspect-[3/2] w-[15%] object-contain' />
        ))}
      </div>
    </div>
  );
};

export default Partners;
