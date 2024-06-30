import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
interface Inputs {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [active, setActive] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation('contactus');
  const sendEmail = async (data: Inputs) => {
    const emailData = {
      service_id: 'service_go76avp',
      template_id: 'template_gln6mjh',
      user_id: 'GctaA-3hMl4TZkOwn',
      template_params: {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
    };
    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData);
      if (res.status === 200) {
        setActive(false);
        setEmailSent(true);
        reset();
        setTimeout(() => {
          setEmailSent(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='relative z-10 w-full overflow-hidden border-2 md:mx-10 md:w-[50vw] lg:mx-20 lg:w-[30vw]'>
      <AnimatePresence>
        {emailSent ? (
          <motion.div
            transition={{ ease: 'easeIn', duration: 0.5 }}
            initial={{ translateY: '-100%' }}
            animate={{ translateY: '0%' }}
            exit={{ translateY: '-100%' }}
            className='absolute right-0 z-10 bg-green-500 p-1'
          >
            {t('formData.sent')}
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
      <div className='absolute h-full w-full bg-background opacity-100'></div>
      <form className='relative flex flex-col gap-4 p-10' onSubmit={handleSubmit(sendEmail)}>
        <div className='flex flex-col'>
          <label htmlFor='name'>{t('formData.name')}</label>
          <input
            placeholder='Full Name'
            type='text'
            {...register('name', { required: true, minLength: { value: 3, message: 'Minimun Length is 3' } })}
            className='border-1 rounded-md border-foreground bg-accent/60 p-2'
          />
          <p className='text-red-400'>{errors.name?.message}</p>
        </div>
        <div className='flex grow-0 flex-col'>
          <label htmlFor='email'>{t('formData.email')}</label>
          <input
            placeholder='name@example.com'
            className='border-1 rounded-md border-foreground bg-accent/60 p-2'
            {...register('email', {
              pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'InValid Email Format' },
              required: true,
            })}
          />
          <p className='text-red-400'>{errors.email?.message}</p>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='message'>{t('formData.message')}</label>
          <textarea
            placeholder={`we'd love to hear from you`}
            {...register('message', { required: { value: true, message: 'Message is Required' } })}
            rows={5}
            className='border-1 rounded-md border-foreground bg-accent/60 p-2'
          ></textarea>
          <p className='text-red-400'>{errors.message?.message}</p>
        </div>
        <div
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className='relative h-11 w-[70%] cursor-pointer self-center'
        >
          <AnimatePresence>
            {active ? (
              <>
                <motion.div
                  transition={{ ease: 'easeIn', duration: 0.5 }}
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  exit={{ width: 0 }}
                  className='pointer-events-none absolute right-0 top-0 h-full w-[50%] rounded-r-md bg-foreground opacity-50'
                ></motion.div>
                <motion.div
                  transition={{ ease: 'easeIn', duration: 0.5 }}
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  exit={{ width: 0 }}
                  className='pointer-events-none absolute left-0 top-0 h-full w-[50%] rounded-l-md bg-foreground opacity-50'
                ></motion.div>
              </>
            ) : (
              ''
            )}
          </AnimatePresence>
          <input
            type='submit'
            value={t('formData.submit')}
            className='w-full cursor-pointer rounded-md border-2 border-foreground p-2'
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
