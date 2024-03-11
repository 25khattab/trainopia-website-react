import { events } from '@/locales/ar';
import { useTranslation } from 'react-i18next';
import { CiStopwatch } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

interface IProp {
  title: keyof typeof events;
}

const EventsCard = ({ title }: IProp) => {
  const { t } = useTranslation('events');

  return (
    <Link
      to={`/events/${title}`}
      className='grid-row-2 md:grid-row-2 grid grid-cols-3 border-2 p-3 sm:w-[90%] md:w-[35vw] md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:grid-rows-2'
    >
      <div className='relative col-span-1 mx-auto flex w-[80%] flex-col justify-center self-center rounded-lg border-4 border-accent p-2 text-center md:h-28 lg:col-span-1 lg:row-span-2 lg:h-[60%]'>
        <hr className='absolute left-1/4 top-0 h-3 w-1 -translate-y-3/4 bg-accent' />
        <hr className='absolute right-1/4 top-0 h-3 w-1 -translate-y-3/4 bg-accent' />
        <h1 className='text-4xl lg:text-6xl'>{t(`${title}.day`)}</h1>
        <h2 className='text-xs sm:text-sm lg:text-lg'>{t(`${title}.month`)}</h2>
      </div>
      <div className='col-span-2 self-end md:col-span-1 lg:col-span-2'>
        <div className='xlg:flex-row flex flex-col text-xs'>
          <div className='flex'>
            <CiStopwatch size={20} className='flex-shrink-0' />
            <h3 className='text-accent'>{t(`${title}.period`)} </h3>
          </div>
          <div className='xlg:mx-3 flex'>
            <CiLocationOn size={20} className='flex-shrink-0' />
            <h3 className='text-accent'>{t(`${title}.location`)}</h3>
          </div>
        </div>
        <h1 className='xlg:text-3xl text-base font-bold sm:p-4 md:px-0 md:py-4 md:text-xl'>{t(`${title}.title`)}</h1>
      </div>
      <div className='col-span-3 lg:col-span-2 lg:col-start-2'>
        <p>{t(`${title}.des`)}</p>
      </div>
    </Link>
  );
};

export default EventsCard;
