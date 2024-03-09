import { activities } from '@/locales/ar';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Activity = () => {
  const params = useParams<{ title: keyof typeof activities }>();

  const Activity = params.title;
  const t = useTranslation(Activity).t;
  return <div> {t('title')}</div>;
};

export default Activity;
