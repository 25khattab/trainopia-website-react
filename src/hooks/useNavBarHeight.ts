import { useState, useEffect } from 'react';

const useNavBarScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpacity, setNavOpacity] = useState(0.2);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = window.innerHeight;

    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Calculate opacity based on scroll position
    const newOpacity = Math.min(1, scrollTop / maxScroll + 0.2);
    setNavOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, navOpacity };
};

export default useNavBarScrolled;
