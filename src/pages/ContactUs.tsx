import ContactForm from '@/components/ContactUs/ContactForm';
import GoogleMap from '@/components/ContactUs/GoogleMap';

const ContactUs = () => {
  return (
    <div className='md:px-[5%] lg:px-[10%]'>
      <h1 className='my-10 text-4xl'>Contact Us</h1>
      <div className='relative'>
        <ContactForm />
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactUs;
