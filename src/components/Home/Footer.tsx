import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { footer } from '@/locales/ar';
const Footer = () => {
  const { t } = useTranslation('footer');
  const browseData = Object.keys(t('browse', { returnObjects: true })) as Array<keyof typeof footer.browse>;

  return (
    <div>
      <div className=''>
        <div>
          <img src='icons/logo.png' className='w-10' alt='' />
          <h1>{t('title')}</h1>
          <p>{t('discription')}</p>
        </div>
        <div className='flex flex-col '>
          <h1>Browse</h1>
          {browseData.map((value, key) => (
            <Link to={value != 'home' ? `/${value}` : '/'} key={key}>
              {t(`browse.${value}`)}
            </Link>
          ))}
        </div>
        <div>
          <h1></h1>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </div>
        <div>
          <h1>Contact Us</h1>
          <ul>
            <li>Location</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
      <div>Copyrights Trainopia 2022</div>
    </div>
  );
};

export default Footer;
