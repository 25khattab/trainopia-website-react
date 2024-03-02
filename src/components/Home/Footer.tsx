import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { footer } from '@/locales/ar';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Footer = () => {
  const { t } = useTranslation('footer');
  const browseData = Object.keys(t('browse', { returnObjects: true })) as Array<keyof typeof footer.browse>;
  const servicesData = Object.keys(t('services', { returnObjects: true })) as Array<keyof typeof footer.services>;
  const contactData = t('contactus', { returnObjects: true });

  return (
    <div>
      <div className=' grid auto-rows-auto grid-cols-4 px-20 gap-6 *:'>
        <div className='col-span-1 flex flex-col py-10 '>
          <img src='icons/logo.png' className='w-28' alt='' />
          <div className=''>
            <h1 className='text-3xl'>{t('title')}</h1>
            <p>{t('discription')}</p>
          </div>
        </div>
        <div className=' col-span-1 flex flex-col gap-4 py-10'>
          <h1 className='text-2xl'>Browse</h1>
          {browseData.map((value, key) => (
            <Link to={value != 'home' ? `/${value}` : '/'} key={key} className='w-fit '>
              {t(`browse.${value}`)}
            </Link>
          ))}
        </div>
        <div className=' col-span-1 flex flex-col gap-4 py-10 '>
          <h1 className='text-2xl'>Services</h1>
          {servicesData.map((value, index) => (
            <Link to={`/services.${value}`} key={index} className='w-fit'>
              {t(`services.${value}`)}
            </Link>
          ))}
        </div>
        <div className='col-span-1 py-10 flex flex-col gap-4  '>
          <h1 className='text-2xl'>Contact Us</h1>
          <div className='flex gap-2 items-center'>
            <FaLocationDot size={20} className='flex-shrink-0' />
            <h3>{contactData[0]}</h3>
          </div>
          <div className='flex gap-2  items-center'>
            <TfiEmail size={20} className='flex-shrink-0' />
            <h3>{contactData[1]}</h3>
          </div>
          <div className='flex gap-2  items-center'>
            <MdPhone size={20} className='flex-shrink-0' />
            <h3>{contactData[2]}</h3>
          </div>
        </div>
      </div>
      <div dir='ltr'>Copyrights Trainopia 2022</div>
    </div>
  );
};

export default Footer;
