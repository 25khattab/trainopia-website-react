import InfoTemplet from '@/components/aboutUs/InfoTemplet';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useTheme } from '@/state/context/theme-provider';

const AboutUs = () => {
  const { theme } = useTheme();
  const language = useAppSelector((state) => state.language.arabic);
  const lightArabic = [
    '/images/infographe/arabic-light mode/inforgraph-01.svg',
    '/images/infographe/arabic-light mode/inforgraph-02.svg',
    '/images/infographe/arabic-light mode/inforgraph-03.svg',
    '/images/infographe/arabic-light mode/inforgraph-04.svg',
    '/images/infographe/arabic-light mode/inforgraph-05.svg',
    '/images/infographe/arabic-light mode/inforgraph-06.svg',
    '/images/infographe/arabic-light mode/inforgraph-07.svg',
    '/images/infographe/arabic-light mode/inforgraph-08.svg',
  ];
  const lightEnglish = [
    '/images/infographe/english-light mode/inforgraph-english-01.svg',
    '/images/infographe/english-light mode/inforgraph-english-02.svg',
    '/images/infographe/english-light mode/inforgraph-english-03.svg',
    '/images/infographe/english-light mode/inforgraph-english-04.svg',
    '/images/infographe/english-light mode/inforgraph-english-05.svg',
    '/images/infographe/english-light mode/inforgraph-english-06.svg',
    '/images/infographe/english-light mode/inforgraph-english-07.svg',
    '/images/infographe/english-light mode/inforgraph-english-08.svg',
  ];
  const darkArabic = [
    '/images/infographe/arabic-dark mode/inforgraph-09.svg',
    '/images/infographe/arabic-dark mode/inforgraph-10.svg',
    '/images/infographe/arabic-dark mode/inforgraph-11.svg',
    '/images/infographe/arabic-dark mode/inforgraph-12.svg',
    '/images/infographe/arabic-dark mode/inforgraph-13.svg',
    '/images/infographe/arabic-dark mode/inforgraph-14.svg',
    '/images/infographe/arabic-dark mode/inforgraph-15.svg',
    '/images/infographe/arabic-dark mode/inforgraph-16.svg',
  ];
  const darkEnglish = [
    '/images/infographe/english-dark mode/inforgraph-english-09.svg',
    '/images/infographe/english-dark mode/inforgraph-english-10.svg',
    '/images/infographe/english-dark mode/inforgraph-english-11.svg',
    '/images/infographe/english-dark mode/inforgraph-english-12.svg',
    '/images/infographe/english-dark mode/inforgraph-english-13.svg',
    '/images/infographe/english-dark mode/inforgraph-english-14.svg',
    '/images/infographe/english-dark mode/inforgraph-english-15.svg',
    '/images/infographe/english-dark mode/inforgraph-english-16.svg',
  ];
  return (
    <div>
      {theme == 'light' ? (
        language ? (
          // lightArabic
          <InfoTemplet source={lightArabic} />
        ) : (
          <InfoTemplet source={lightEnglish} />

          // lightEnglish1
        )
      ) : language ? (
        <InfoTemplet source={darkArabic} />
      ) : (
        // darkArabic
        <InfoTemplet source={darkEnglish} />

        // darkEnglish
      )}
    </div>
  );
};
export default AboutUs;
