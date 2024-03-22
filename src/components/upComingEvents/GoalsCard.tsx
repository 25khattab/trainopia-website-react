interface IProps {
  goal: String;
}
const GoalsCard = ({ goal }: IProps) => {
  return <p className='h-full rounded-xl bg-secondary p-3 text-center md:p-10'>{goal}</p>;
};

export default GoalsCard;
