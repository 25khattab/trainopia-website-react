import { LiaQuoteRightSolid } from 'react-icons/lia';
const TestomonialCard = () => {
  return (
    <div className='relative flex flex-col m-14 p-16 bg-secondary rounded-3xl'>
      <LiaQuoteRightSolid size={50} className='absolute top-4 left-8' />
      <p>"Generating a testimonial card component with a prompt-driven interface is pretty cool... Well done, Vercel!"</p>
      <div className='py-5'>
        <h1>John Doe</h1>
        <h3>CEO, Example Corp.</h3>
      </div>
    </div>
  );
};

export default TestomonialCard;
