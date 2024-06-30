import ContactForm from '@/components/ContactUs/ContactForm';
import GoogleMap from '@/components/ContactUs/GoogleMap';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation('contactus');

  return (
    <div className='py-[5%] md:px-[5%] lg:px-[10%]'>
      <h1 className='my-10 text-4xl'>{t('formData.title')}</h1>
      <div className='relative'>
        <ContactForm />
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactUs;
