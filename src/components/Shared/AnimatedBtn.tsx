import { AnimatePresence, motion } from 'framer-motion';
interface IProps {
  width: string;
  height: string;
  color: string;
  text: string;
  activated: boolean;
  onclick: () => void;
}
const AnimatedBtn = ({ width, height, text: children, color, activated, onclick }: IProps) => {
  return (
    <div style={{ width: width, height: height }} className='relative'>
      <AnimatePresence>
        {activated ? (
          <>
            {/* top */}
            <motion.hr
              transition={{ ease: 'easeIn', duration: 0.5 }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              className={`absolute h-1 w-full bg-${color}`}
            />
            {/* bottom */}
            <motion.hr
              transition={{ ease: 'easeIn', duration: 0.5 }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              className={`absolute top-[100%] h-1 w-full -translate-y-1 bg-${color}`}
            />
            {/* right */}
            <motion.hr
              transition={{ ease: 'easeIn', duration: 0.5 }}
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              exit={{ height: 0 }}
              className={`absolute h-full w-1 bg-${color}`}
            />
            {/* left */}
            <motion.hr
              transition={{ ease: 'easeIn', duration: 0.5 }}
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              exit={{ height: 0 }}
              className={`absolute right-[100%] h-full w-1 translate-x-1 bg-${color}`}
            />
          </>
        ) : (
          ''
        )}
      </AnimatePresence>
      <div className={`flex h-full  w-full items-center justify-center text-2xl hover:text-${color}`}>
        <button
          onClick={() => {
            activated ? '' : onclick();
          }}
          className='h-full w-full'
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default AnimatedBtn;

// import '@/style/animatedBtn.css';

// export const AnimatedBtn = ({ children, active, onClick, Id }: AnimatedBtnProps) => {
//   const id = Id;
//   return (
//     <div className='m-2 md:m-5 wrapper' onClick={() => onClick()}>
//       <div className='p-3 md:p-6 text-xl md:text-3xl'>{children}</div>
//       <div className={`${active[id] ? 'topActive' : 'top'} `}></div>
//       <div className={`${active[id] ? 'bottomActive' : 'bottom'} `}></div>
//       <div className={`${active[id] ? 'leftActive' : 'left'} `}></div>
//       <div className={`${active[id] ? 'rightActive' : 'right'} `}></div>
//     </div>
//   );
// };
