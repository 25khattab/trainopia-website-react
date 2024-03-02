import ServicesCard from '../Shared/ServicesCard';

const Services = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <h1 className='text-3xl  lg:text-5xl'>Services</h1>
      <div className='flex flex-wrap justify-center'>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
