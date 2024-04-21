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

  console.log(programsKeys);
  return (
    <div className='flex flex-col items-center gap-y-10 px-2 py-10 sm:p-10 md:gap-y-5 lg:px-[5%]'>
      <div className='flex flex-col self-start md:self-center'>
        <h1 className='py-2 text-lg md:text-4xl'>{t('HeadLine.programs')}</h1>
        <hr className='w-[60px] self-start border-accent md:self-center' />
      </div>
      {programsKeys.map((value, index) => (
        <ProgramesCard
          key={index}
          img={programImage[title][value]}
          title={programs[value].title}
          des={programs[value].des}
          order={index}
        />
      ))}
    </div>
  );
};

export default ProgramsSection;
