import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
interface Inputs {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const [active, setActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className='relative w-[30vw]'>
      <div className='absolute h-full w-full bg-secondary opacity-55'></div>
      <form className='relative flex flex-col gap-4 p-10' dir='ltr' onSubmit={handleSubmit((data) => console.log(data))}>
        <div className='flex flex-col'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            {...register('name', { required: true, minLength: { value: 3, message: 'Minimun Length is 3' } })}
            className='rounded-md border-2 border-foreground'
          />
          <p className='text-red-400'>{errors.name?.message}</p>
        </div>
        <div className='flex grow-0 flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            className='rounded-md border-2 border-foreground'
            {...register('email', {
              pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'InValid Email Format' },
              required: true,
            })}
          />
          <p className='text-red-400'>{errors.email?.message}</p>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='message'>Message</label>
          <textarea
            {...register('message', { required: { value: true, message: 'Message is Required' } })}
            rows={5}
            className='rounded-md border-2 border-foreground'
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
                  className='absolute right-0 top-0 z-[-1] h-full w-[50%] rounded-r-md bg-white opacity-50'
                ></motion.div>
                <motion.div
                  transition={{ ease: 'easeIn', duration: 0.5 }}
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  exit={{ width: 0 }}
                  className='absolute left-0 top-0 z-[-1] h-full w-[50%] rounded-l-md bg-white opacity-50'
                ></motion.div>
              </>
            ) : (
              ''
            )}
          </AnimatePresence>
          <input type='submit' className='w-full cursor-pointer rounded-md border-2 border-foreground p-2' />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
