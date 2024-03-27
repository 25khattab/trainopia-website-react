import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation('headLines');
  return (
    <div className='mt-20 flex flex-col items-center'>
      <h1 className='text-3xl lg:text-5xl'>{t('partners')}</h1>
      <div className='my-10 flex w-full flex-wrap justify-center'>
        <img src='icons/logo.png' alt='' className='mx-5 w-24 md:mx-10 md:w-36' />
        <img src='icons/logo.png' alt='' className='mx-5 w-24 md:mx-10 md:w-36' />
        <img src='icons/logo.png' alt='' className='mx-5 w-24 md:mx-10 md:w-36' />
        <img src='icons/logo.png' alt='' className='mx-5 w-24 md:mx-10 md:w-36' />
        <img src='icons/logo.png' alt='' className='mx-5 w-24 md:mx-10 md:w-36' />
      </div>
    </div>
  );
};

export default Partners;
