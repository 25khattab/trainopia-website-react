import { reviews } from '@/locales/ar';
import { useTranslation } from 'react-i18next';
import { LiaQuoteRightSolid } from 'react-icons/lia';
interface Props {
  review: keyof typeof reviews;
}
const TestomonialCard = ({ review }: Props) => {
  const { t } = useTranslation(`reviews`);
  return (
    <div className='relative mx-5 flex h-full flex-col justify-center rounded-3xl bg-secondary px-8 py-16 md:p-16'>
      <LiaQuoteRightSolid size={50} className='absolute left-8 top-4' />
      <p className='text-xs md:text-base'>{t(`${review}.review`)}</p>
      <div className='py-5'>
        <h1>{t(`${review}.name`)}</h1>
        <h2>{t(`${review}.title`)}</h2>
      </div>
    </div>
  );
};

export default TestomonialCard;
