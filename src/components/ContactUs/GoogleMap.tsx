const GoogleMap = () => {
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110595.92773289279!2d31.192818246149017!3d29.975902354814465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x145838635e57815b%3A0x53b62072a90f822c!2s1%20tunis%20st.%20from%2C%20Al%20Gazaer%20Square%2C%20Al%20Basatin%20Al%20Gharbeyah%2C%20El%20Basatin%2C%20Cairo%20Governorate%2011742!3m2!1d29.975870999999998!2d31.275257699999997!5e0!3m2!1sen!2seg!4v1710909975091!5m2!1sen!2seg'
        className='z-[0] h-[50vh] w-full md:absolute md:top-0 md:h-full'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMap;
