import { ITitle } from '@/@types/activity';
import { useTranslation } from 'react-i18next';

const FeaturesSection = ({ title }: ITitle) => {
  const { t } = useTranslation(title);
  const featureKeys = t('ourFeatures', { returnObjects: true }) as Array<string>;

  return (
    <div className='px-5 py-10 md:px-[10%]'>
      <h2 className='py-2 text-lg md:text-2xl'>{t('featuresHeadline')}</h2>
      <hr className='w-[60px] border-accent' />
      <ul className='grid list-disc gap-4 text-sm md:grid-cols-2 md:text-base'>
        {featureKeys.map((value, index) => (
          <li key={index} className='py-2'>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesSection;
