import { useTranslation } from 'react-i18next';
import { CiStopwatch } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';

const EventsCard = () => {
  const { t } = useTranslation('event');

  return (
    <div className=' md:grid-row-2 grid-row-2 mx-5 grid grid-cols-3 gap-2 border-2 p-3 sm:w-[90%]  md:w-[35vw] md:grid-cols-2 md:gap-4 md:p-6 lg:grid-cols-3 lg:grid-rows-2'>
      <div className=' relative col-span-1 mx-auto flex flex-col justify-center self-center rounded-md border-4 border-lime-500 p-2 text-center  md:h-28 lg:col-span-1  lg:row-span-2 lg:h-[60%] '>
        <hr className=' absolute left-1/4 top-0  h-3 w-1 -translate-y-3/4 bg-lime-500 ' />
        <hr className=' absolute right-1/4 top-0  h-3 w-1 -translate-y-3/4 bg-lime-500  ' />
        <h1 className='text-4xl lg:text-6xl'>{t('day')}</h1>
        <h2 className='text-xs sm:text-sm lg:text-lg'>{t('month')}</h2>
      </div>
      <div className='col-span-2 self-end md:col-span-1 lg:col-span-2 '>
        <div className='xlg:flex-row flex flex-col text-xs'>
          <div className='flex'>
            <CiStopwatch size={20} className='flex-shrink-0' />
            <h3>{t('period')} </h3>
          </div>
          <div className='xlg:mx-3 flex'>
            <CiLocationOn size={20} className='flex-shrink-0' />
            <h3>{t('location')}</h3>
          </div>
        </div>
        <h1 className=' xlg:text-3xl text-base font-bold sm:p-4 md:px-0 md:py-4 md:text-xl'>{t('title')}</h1>
      </div>
      <div className='col-span-3 lg:col-span-2 lg:col-start-2 '>
        <p>{t('des')}</p>
      </div>
    </div>
  );
};

export default EventsCard;

// import { useState } from 'react';

// import { Link } from 'react-router-dom';

// const EventsCard = () => {
//   const [active, setActive] = useState(false);
//   return (
//     <div
//       className='h-64 w-[80vw] md:w-[40vw] lg:w-[30vw] relative flex felx-col items-center mt-10 mx-5'
//       onMouseEnter={() => setActive((prev) => !prev)}
//       onMouseLeave={() => setActive((prev) => !prev)}
//     >
//       <img src='images/super-hero.png' alt='' className='h-full w-full rounded-3xl' />
//       {active ? (
//         <div className=' absolute top-0 h-full w-full  rounded-3xl '>
//           <div className='h-full w-full absolute top-0 bg-secondary opacity-85  rounded-3xl '></div>
//           <div className='absolute top-0 text-center '>
//             <h1 className='text-3xl'>Super Hero</h1>
//             <p className=''>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse labore, explicabo nesciunt iure doloremque
//               voluptate officiis ducimus illo doloribus iste eos? Adipisci magnam soluta harum nihil, veniam beatae optio.
//             </p>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}

//       <Link
//         to='/events/:eventTitle'
//         className='w-full bg-green-600 absolute bottom-0 rounded-b-2xl text-center hover:bg-green-400 py-1'
//       >
//         Know more
//       </Link>
//     </div>
//   );
// };

// export default EventsCard;
