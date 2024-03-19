import ContactForm from '@/components/ContactUs/ContactForm';
import GoogleMap from '@/components/ContactUs/GoogleMap';

const ContactUs = () => {
  return (
    <div>
      <ContactForm />
      <GoogleMap />
    </div>
  );
};

export default ContactUs;
{
  /* <div className='relative'>
<h1></h1>
<p></p>
<div className='relative h-[40vh]'>
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13824.487397583456!2d31.2752196!3d29.975928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838635e57815b%3A0x53b62072a90f822c!2sTrainopia!5e0!3m2!1sen!2seg!4v1710441176998!5m2!1sen!2seg'
    className='absolute w-full h-full'
    loading='lazy'
  ></iframe>
  <div className='relative w-[40vw] h-full' dir='ltr'>
    <div className='absolute bg-secondary opacity-65 w-full h-full'></div>
    <form
      className='absolute flex flex-col items-center gap-4 mx-auto p-10 w-[30vw]'
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label htmlFor='name'>Name</label>
      <input type='text' {...register('name')} placeholder='name' className='rounded-lg' />
      <label htmlFor='name'>Email</label>
      <input type='email' {...register('email')} placeholder='email' className='rounded-lg' />
      <label htmlFor='name'>Message</label>
      <textarea {...register('message')} className='rounded-lg' placeholder='Message' rows={4} cols={50}></textarea>
      <input type='submit'></input>
    </form>
  </div>
</div>
</div> */
}
