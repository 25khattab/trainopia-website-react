import { useTranslation } from 'react-i18next';
import { CiStopwatch } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import event from '@/locales/ar/events';
import { useAppSelector } from '@/hooks/reduxHooks';
interface IProp {
  title: keyof typeof event;
}

const EventsCard = ({ title }: IProp) => {
  const language = useAppSelector((state) => state.language.arabic);
  const { t } = useTranslation(title);
  const startingDate = new Date(t('from.date'));
  const day = language
    ? startingDate.toLocaleString('ar-EG', { day: 'numeric' })
    : startingDate.toLocaleString('en', { day: 'numeric' });
  const month = language
    ? startingDate.toLocaleString('ar-EG', { month: 'long' })
    : startingDate.toLocaleString('en', { month: 'long' });
  return (
    <Link
      to={`/events/${title}`}
      className='grid-row-2 grid w-[80%] grid-cols-3 border-2 border-accent p-3 md:w-[35vw] md:auto-rows-fr md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:grid-rows-2'
    >
      <div className='col-span-auto relative mx-auto flex flex-col justify-center self-center rounded-lg border-4 border-accent p-2 px-4 text-center lg:h-[80%]'>
        <hr className='absolute left-1/4 top-0 h-3 w-1 -translate-y-3/4 bg-accent' />
        <hr className='absolute right-1/4 top-0 h-3 w-1 -translate-y-3/4 bg-accent' />
        <h1 className='text-2xl lg:text-4xl'>{day}</h1>
        <h2 className='overflow-x-clip pb-2 text-xs lg:text-lg'>{month}</h2>
      </div>
      <div className='col-span-2 self-center'>
        <div className='xlg:flex-row flex flex-col text-xs'>
          <div className='flex'>
            <CiStopwatch size={20} className='flex-shrink-0' />
            <h3 className='font-bold '>{t('period')} </h3>
          </div>
          <div className='xlg:mx-3 flex'>
            <CiLocationOn size={20} className='flex-shrink-0' />
            <h3 className='font-bold '>{t(`location`)}</h3>
          </div>
        </div>
        <h1 className='text-base font-bold sm:p-4 md:px-0 md:py-4 md:text-lg lg:text-2xl'>{t(`title`)}</h1>
      </div>
      <div className='col-span-3 flex h-full items-center lg:col-span-3'>
        <p className='self-start'>{t(`shortDes`)}</p>
      </div>
    </Link>
  );
};

export default EventsCard;
