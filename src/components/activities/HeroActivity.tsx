interface IProps {
  title: string;
}
const HeroActivity = ({ title }: IProps) => {
  return (
    <div className='bg-whatere relative'>
      <div className='absolute h-full w-full bg-black opacity-45'></div>
      <h1>{title}</h1>
      <h2>slogun</h2>
    </div>
  );
};

export default HeroActivity;
