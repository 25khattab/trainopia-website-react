import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex h-[100vh] items-center justify-center border-2'>
      <div className='flex w-[80%] flex-col items-center gap-4 text-center md:w-[60%] lg:w-[30%]'>
        <img src='icons/logo.png' alt='logo' className='w-[80%]' />
        <h1 className='text-7xl'>Oops</h1>
        <p className='text-xl'>
          Page not found. The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to='/'>
          <Button className='w-40'>Go back to Homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
