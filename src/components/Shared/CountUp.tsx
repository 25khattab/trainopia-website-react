import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface IAchievementsDataProps {
  value: number;
  label: string;
}

const CountUp = ({ value, label }: IAchievementsDataProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration: 3 });
    return animation.stop;
  }, []);

  return (
    <div className='flex h-[50%] flex-grow flex-col items-center justify-center border-foreground text-center text-xs sm:text-base md:h-[70%] md:text-2xl'>
      <motion.h1>{rounded}</motion.h1>
      <h1>{label}</h1>
    </div>
  );
};
export default CountUp;
