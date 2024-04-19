import AnimatedBtn from '@/components/Shared/AnimatedBtn';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PodcastCarousal from '../Shared/PodcastCarousal';
import ImagesCarosal from '../Shared/ImagesCarosal';
const Media = () => {
  const [toggle, setToggle] = useState(true);
  const { t } = useTranslation('media');
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className='my-20 '>
      <div className='flex justify-center' dir='rtl'>
        <AnimatedBtn onclick={handleToggle} color='accent' text={t('audio')} height='7rem' width='7rem' activated={toggle} />
        <AnimatedBtn onclick={handleToggle} color='accent' text={t('images')} height='7rem' width='7rem' activated={!toggle} />
      </div>

      <div className=''>{toggle ? <PodcastCarousal /> : <ImagesCarosal />}</div>
    </div>
  );
};

export default Media;
