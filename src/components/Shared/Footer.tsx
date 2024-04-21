import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { footer, activities } from '@/locales/ar';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { BsWhatsapp } from 'react-icons/bs';
import { useTheme } from '@/state/context/theme-provider';

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const browseData = Object.keys(footer.browse) as Array<keyof typeof footer.browse>;
  const activityKeys = Object.keys(activities) as Array<keyof typeof activities>;

  return (
    <div className='flex flex-col items-center'>
      <hr className='my-10 w-[80%]' />
      <div className='grid grid-cols-3 grid-rows-2 gap-4 px-10 text-xs md:grid-cols-6 md:grid-rows-1 md:gap-6 md:px-20 lg:text-base'>
        <div className='col-span-2 flex flex-col md:col-span-2'>
          <div className='flex flex-col items-center gap-5 md:justify-center'>
            <img
              src={`${theme == 'light' ? 'icons/logos/logoLight.png' : 'icons/logos/logoDark.png'}`}
              className='w-16 md:w-24 '
              alt=''
            />
            <p className='text-center'>{t('footer:discription')}</p>
          </div>
          <div className='m-auto grid grid-cols-3 gap-4 py-5'>
            <a
              href='https://www.facebook.com/TrainopiaT.D/'
              target='_blank'
              className='m-auto flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 hover:border-blue-800'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://www.youtube.com/@trainopia4916'
              target='_blank'
              className='m-auto flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 hover:border-red-800'
            >
              <FaYoutube />
            </a>
            <a className='m-auto flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 hover:border-b-blue-700 hover:border-l-slate-700 hover:border-r-red-800 hover:border-t-black'>
              <FaTiktok />
            </a>
            <a
              href='http://wa.me/+201111314937'
              target='_blank'
              className='col-start-2 m-auto flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 hover:border-green-600'
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
        <div className='col-span-1 flex flex-col gap-4'>
          <h1 className='text-2xl'>{t('footer:headlines:activities')}</h1>
          {activityKeys.map((value, index) => (
            <Link to={`/activity/${value}`} key={index} className='w-fit hover:opacity-70'>
              {t(`activities:${value}:title`)}
            </Link>
          ))}
        </div>
        <div className='col-span-2 flex flex-col gap-4 md:order-4 md:col-span-2'>
          <h1 className='text-2xl'>{t('footer:headlines:contactus')}</h1>
          <div className='flex items-center gap-2'>
            <MdPhone size={20} className='flex-shrink-0' />
            <h3>{t('footer:contactus:number')}</h3>
          </div>
          <div className='flex items-center gap-2'>
            <TfiEmail size={20} className='flex-shrink-0' />
            <h3>{t('footer:contactus:email')}</h3>
          </div>
          <div className='flex items-center gap-2'>
            <FaLocationDot size={20} className='flex-shrink-0' />
            <h3>{t('footer:contactus:address')}</h3>
          </div>
        </div>
        <div className='col-span-1 flex flex-col gap-4'>
          <h1 className='text-2xl'>{t('footer:headlines:browse')}</h1>
          {browseData.map((value, key) => (
            <Link to={value != 'home' ? `/${value}` : '/'} key={key} className='w-fit hover:opacity-70'>
              {t(`footer:browse:${value}`)}
            </Link>
          ))}
        </div>
      </div>
      <div dir='ltr' className='mt-10 w-full bg-secondary'>
        <h3>© 2024 Trainopia. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
{
}
