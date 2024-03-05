import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = () => {
  const [active, setActive] = useState(false);
  const [screenSize, setScreenSize] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', updateSize);
  }, []);
  const updateSize = () => {
    window.innerWidth <= 768 ? setScreenSize(true) : setScreenSize(false);
  };

  return (
    <Link
      to='/services/title'
      className='relative md:w-[35vw] w-[80vw]  bg-primary-foreground  m-5 min-h-44 shadow-sm shadow-foreground'
      onMouseLeave={() => setActive((prv) => !prv)}
      onMouseEnter={() => setActive((prv) => !prv)}
    >
      <div className='flex h-full px-10 flex-row items-start md:items-center justify-between  '>
        <img src='icons/logo.png' alt='' className='  w-20 md:min-w-20 md:w-[25%]  ' />
        <h1 className='py-5  text-lg md:text-3xl'>Trainopia</h1>
      </div>
      <div>
        <AnimatePresence>
          {active || screenSize ? (
            <div className='absolute top-0 w-full h-full '>
              <motion.div
                transition={{ ease: 'easeOut', duration: 0.5 }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: '75%' }}
                exit={{ width: 0, opacity: 0 }}
                className='bg-secondary absolute opacity-75 top-0 w-full h-full md:flex hidden '
              ></motion.div>
              <motion.p
                transition={{ ease: 'easeOut', duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=' absolute top-1/2 md:-translate-y-1/2 -translate-y-1/3  w-full p-[10%] '
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit provident,
              </motion.p>
            </div>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default ServicesCard;
