import { ITitle } from '@/@types/activity';
import ProgramesCard from './ProgramesCard';
import { useTranslation } from 'react-i18next';
import { programImage } from '@/data/activityPage/programsImage';
type Programs = {
  [key: string]: {
    title: string;
    des: string;
  };
};
interface ProgramImage {
  [title: string]: {
    [program: string]: string;
  };
}
const ProgramsSection = ({ title }: ITitle) => {
  const { t } = useTranslation(title);
  const programs = t('programs', { returnObjects: true }) as Programs;
  const programsKeys = Object.keys(programs) as Array<keyof typeof programs>;

  return (
    <div className='flex flex-col gap-y-10 px-4  md:gap-y-0'>
      {programsKeys.map((value, index) => (
        <ProgramesCard
          key={index}
          img={`/images/${(programImage as ProgramImage)[title][value]}`}
          title={programs[value].title}
          des={programs[value].des}
          order={index}
        />
      ))}
    </div>
  );
};

export default ProgramsSection;
