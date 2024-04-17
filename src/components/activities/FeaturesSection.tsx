import { ITitle } from '@/@types/activity';
import { useTranslation } from 'react-i18next';

const FeaturesSection = ({ title }: ITitle) => {
  const { t } = useTranslation(title);
  const featureKeys = t('ourFeatures', { returnObjects: true }) as Array<string>;

  return (
    <div className='px-2 py-10 sm:p-10 md:px-[10%]'>
      <h2 className='py-2 text-lg md:text-4xl'>{t('HeadLine.features')}</h2>
      <hr className='w-[60px] border-accent' />
      <ul className='grid list-disc justify-between gap-x-12 gap-y-4 text-sm md:grid-cols-2 md:text-base'>
        {featureKeys.map((value, index) => (
          <li key={index} className='py-2 md:text-lg lg:text-xl'>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesSection;
