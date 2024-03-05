import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { footer } from '@/locales/ar';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  const { t } = useTranslation('footer');
  const browseData = Object.keys(t('browse', { returnObjects: true })) as Array<keyof typeof footer.browse>;
  const servicesData = Object.keys(t('services', { returnObjects: true })) as Array<keyof typeof footer.services>;
  const contactData = t('contactus', { returnObjects: true });

  return (
    <div className='flex flex-col items-center'>
      <hr className='my-10 w-[80%]' />
      <div className='grid grid-cols-3 grid-rows-2 gap-4 px-10 text-xs md:grid-cols-6 md:grid-rows-1 md:gap-6 md:px-20 lg:text-base'>
        <div className='col-span-2 flex flex-col md:col-span-2'>
          <img src='icons/logo.png' className='w-28' alt='' />
          <div>
            <h1 className='text-3xl'>{t('title')}</h1>
            <p>{t('discription')}</p>
          </div>
          <div className='flex gap-4 py-5'>
            <div className='flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 hover:border-blue-800'>
              <FaFacebookF />
            </div>
            <div className='flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 hover:border-red-800'>
              <FaYoutube />
            </div>
            <div className='flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 hover:border-b-blue-700 hover:border-l-slate-700 hover:border-r-red-800 hover:border-t-black'>
              <FaTiktok />
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col gap-4'>
          <h1 className='text-2xl'>Services</h1>
          {servicesData.map((value, index) => (
            <Link to={`/services.${value}`} key={index} className='w-fit hover:opacity-70'>
              {t(`services.${value}`)}
            </Link>
          ))}
        </div>
        <div className='col-span-2 flex flex-col gap-4 md:order-4 md:col-span-2'>
          <h1 className='text-2xl'>Contact Us</h1>
          <div className='flex items-center gap-2'>
            <MdPhone size={20} className='flex-shrink-0' />
            <h3>{contactData[2]}</h3>
          </div>
          <div className='flex items-center gap-2'>
            <TfiEmail size={20} className='flex-shrink-0' />
            <h3>{contactData[1]}</h3>
          </div>
          <div className='flex items-center gap-2'>
            <FaLocationDot size={20} className='flex-shrink-0' />
            <h3>{contactData[0]}</h3>
          </div>
        </div>
        <div className='col-span-1 flex flex-col gap-4'>
          <h1 className='text-2xl'>Browse</h1>
          {browseData.map((value, key) => (
            <Link to={value != 'home' ? `/${value}` : '/'} key={key} className='w-fit hover:opacity-70'>
              {t(`browse.${value}`)}
            </Link>
          ))}
        </div>
      </div>
      <div dir='ltr' className='w-full bg-secondary'>
        <h1>© 2022 Trainopia. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
{
}
