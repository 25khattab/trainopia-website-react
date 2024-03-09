import { LiaQuoteRightSolid } from 'react-icons/lia';
interface Props {
  desc?: string;
}
const TestomonialCard = ({ desc = 'lol' }: Props) => {
  return (
    <div className='relative m-5 flex flex-col rounded-3xl bg-secondary p-16'>
      <LiaQuoteRightSolid size={50} className='absolute left-8 top-4' />
      <p>{desc}</p>
      <div className='py-5'>
        <h1>John Doe</h1>
        <h3>CEO, Example Corp.</h3>
      </div>
    </div>
  );
};

export default TestomonialCard;
