import { useAppSelector } from '@/hooks/reduxHooks';
import { useEffect, useState } from 'react';

interface IProgrameProps {
  img: string;
  title: string;
  des: string;
  order: number;
}

const ProgramesCard = ({ img, title, des, order }: IProgrameProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const language = useAppSelector((state) => state.language.arabic);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <div
      dir={screenWidth >= 768 ? (order % 2 != 0 && language ? 'ltr' : order % 2 != 0 && !language ? 'rtl' : 'auto') : 'auto'}
      className={`flex flex-col items-center  md:h-[35vh] md:w-[80vw] md:flex-row ${order % 2 != 0 ? 'self-end' : 'self-start'} `}
    >
      <div className='relative h-full w-[90%] md:w-[60%]'>
        <img src={`/images/${img}`} className='h-full w-full object-cover' alt='' />
        <h2 className='absolute top-1/3 bg-secondary px-4 py-2 text-xs opacity-70 sm:text-base md:text-sm'>{title}</h2>
      </div>
      <p
        dir={language ? 'rtl' : 'ltr'}
        className='h-[90%] content-center bg-secondary p-4 text-xs shadow-md shadow-foreground sm:text-base md:w-[70%] md:text-sm lg:text-lg'
      >
        {des}
      </p>
    </div>
  );
};

export default ProgramesCard;
