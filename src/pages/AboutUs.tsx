import { useTheme } from '@/state/context/theme-provider';

const AboutUs = () => {
  const theme = useTheme();
  return (
    <div>
      {theme ? (
        <img src='/images/infographe/inforgraph-english - light mode-01.svg' alt='' />
      ) : (
        <img src='/images/infographe/inforgraph-english-dark mode-02.svg' alt='' />
      )}
    </div>
  );
};

export default AboutUs;
// <div>
//   <div>
//     <h1></h1>
//     <p></p>
//     <ul>
//       <li></li>
//       <li></li>
//       <li></li>
//     </ul>
//     <hr />
//   </div>
//   <div>
//     <div>
//       <h2></h2>
//       <p></p>
//     </div>
//     <h2></h2>
//     <div>
//       <h3></h3>
//       <p></p>
//     </div>
//   </div>
//   <div>
//     <h2></h2>
//     <p></p>
//     <button></button>
//   </div>
// </div>
