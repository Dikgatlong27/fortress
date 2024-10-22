import { useEffect } from 'react';

const ScrollToTopEffect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTopEffect;
