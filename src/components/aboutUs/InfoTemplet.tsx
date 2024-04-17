interface InfographeSrc {
  source: string[];
}
const InfoTemplet = ({ source }: InfographeSrc) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={source[0]} className='mb-[50px] md:h-[100vh]' alt='' />
      <div className='relative flex w-full flex-col items-center md:mb-[30px] md:h-[50vh]'>
        <img src={source[1]} className='h-[100%] -translate-y-1/4 md:absolute md:h-[50%]' alt='' />
        <img src={source[2]} alt='' className='md:mt-[90px] md:h-[60%]' />
      </div>
      <img src={source[3]} className='md:h-[100vh]' alt='' />
      <div className='flex flex-col items-center md:h-[100vh]'>
        <img src={source[4]} className='md:h-[20%]' alt='' />
        <img src={source[5]} className='md:h-[100%]' alt='' />
      </div>
      <img src={source[6]} className='md:mt-[100px] md:w-[43vw]' alt='' />
      <img src={source[7]} className='md:h-[150vh]' alt='' />
    </div>
  );
};

export default InfoTemplet;
