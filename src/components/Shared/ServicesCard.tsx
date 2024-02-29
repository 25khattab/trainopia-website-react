import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = () => {
  const [active, setActive] = useState(false);
  return (
    <Link
      to='/services/title'
      className='relative md:w-[40vw] w-[80vw] h-[18rem] lg:h-56 bg-yellow-600 rounded-3xl m-5 '
      onMouseLeave={() => setActive((prv) => !prv)}
      onMouseEnter={() => setActive((prv) => !prv)}
    >
      <div className='flex h-full px-10 items-center justify-between '>
        <img src='icons/logo.png' alt='' className=' min-h-[50%] min-w-28 w-[25%]  ' />
        <h1 className='text-3xl'>Trainopia</h1>
      </div>
      <div>
        <AnimatePresence>
          {active ? (
            <div>
              <motion.div
                transition={{ ease: 'easeOut', duration: 0.5 }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: '75%' }}
                exit={{ width: 0, opacity: 0 }}
                className='bg-secondary absolute top-0 w-full h-full  rounded-3xl '
              ></motion.div>
              <motion.p
                transition={{ ease: 'easeOut', duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=' absolute top-1/2 -translate-y-1/2  w-full p-[10%] '
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit provident, similique, nobis veritatis
                rem iusto fugiat tempore animi doloremque quo quaerat excepturi ut eaque, in minima quod commodi. Ducimus.Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit provident, similique, nobis veritatis rem
                iusto fugiat tempore animi doloremque quo quaerat excepturi ut eaque, in minima quod commodi. Ducimus.
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
