import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventsCard = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className='h-64 w-[80vw] md:w-[40vw] relative flex felx-col items-center mt-10 mx-5'
      onMouseEnter={() => setActive((prev) => !prev)}
      onMouseLeave={() => setActive((prev) => !prev)}
    >
      <img src='images/super-hero.png' alt='' className='h-full w-full rounded-3xl' />
      {active ? (
        <div className=' absolute top-0 h-full w-full  rounded-3xl '>
          <div className='h-full w-full absolute top-0 bg-secondary opacity-85  rounded-3xl '></div>
          <div className='absolute top-0 text-center '>
            <h1 className='text-3xl'>Super Hero</h1>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse labore, explicabo nesciunt iure doloremque
              voluptate officiis ducimus illo doloribus iste eos? Adipisci magnam soluta harum nihil, veniam beatae optio.
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}

      <Link
        to='/events/:eventTitle'
        className='w-full bg-green-600 absolute bottom-0 rounded-b-2xl text-center hover:bg-green-400 py-1'
      >
        Know more
      </Link>
    </div>
  );
};

export default EventsCard;
