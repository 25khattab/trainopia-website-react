import { reviews } from '@/locales/ar';
import { useTranslation } from 'react-i18next';
import { LiaQuoteRightSolid } from 'react-icons/lia';
interface Props {
  review: keyof typeof reviews;
}
const TestomonialCard = ({ review }: Props) => {
  const { t } = useTranslation(`reviews`);
  return (
    <div className='relative m-5 flex flex-col rounded-3xl bg-secondary p-16'>
      <LiaQuoteRightSolid size={50} className='absolute left-8 top-4' />
      <p>{t(`${review}.review`)}</p>
      <div className='py-5'>
        <h1>{t(`${review}.name`)}</h1>
        <h3>{t(`${review}.title`)}</h3>
      </div>
    </div>
  );
};

export default TestomonialCard;
