import { FaWhatsapp } from 'react-icons/fa6';
const WhatsApp = () => {
  return (
    <div className='hover:-translate-y-1/5'>
      <a href='http://wa.me/+201111314937' target='_blank'>
        <FaWhatsapp size={50} className='fixed bottom-0 z-20 my-10 fill-accent md:m-10' />
      </a>
    </div>
  );
};

export default WhatsApp;
