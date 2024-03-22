import { FaRegCalendarCheck } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosPricetag } from 'react-icons/io';
import { FaChildReaching } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { IEvent } from '@/pages/Event';
import formatDate from '@/utils/formateDate';
import { useAppSelector } from '@/hooks/reduxHooks';

const EventDetails = ({ title }: IEvent) => {
  const { t } = useTranslation(title);
  const language = useAppSelector((state) => state.language.arabic);

  const formatedFromDate = formatDate(t('from.date'), language);
  const formatedToDate = formatDate(t('to.date'), language);

  return (
    <div className='flex flex-col gap-6 p-10 lg:text-3xl'>
      <h3 className='text-3xl lg:text-6xl'>{t('details.headLine')}</h3>
      <p>{t('details.description')}</p>
      <hr className='w-[80%] self-center' />
      <ul className='flex flex-col gap-4'>
        <li className='flex gap-6'>
          <FaRegCalendarCheck /> {`${t('from.word')}  ${formatedFromDate}, ${t('to.word')} ${formatedToDate}`}
        </li>
        <li className='flex gap-6'>
          <FaLocationDot />
          {t('location')}
        </li>
        <li className='flex gap-6'>
          <IoIosPricetag />
          {t('price')}
        </li>
        <li className='flex gap-6'>
          <FaChildReaching />
          {t('age')}
        </li>
      </ul>
    </div>
  );
};

export default EventDetails;
