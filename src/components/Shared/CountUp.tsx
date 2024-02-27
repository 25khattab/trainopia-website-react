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
    <div className=' flex flex-col flex-grow text-xs sm:text-base md:text-3xl border-foreground  justify-center items-center text-center h-[50%] md:h-[70%]  '>
      <motion.h1>{rounded}</motion.h1>
      <h1>{label}</h1>
    </div>
  );
};
export default CountUp;
