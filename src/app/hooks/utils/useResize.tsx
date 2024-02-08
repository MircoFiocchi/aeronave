import { useState, useEffect } from 'react';

interface ResizeHook {
  device: 'desktop' | 'mobile' | 'tablet';
}

const useResize = (): ResizeHook => {
  const isBrowser = typeof window !== 'undefined';
  const [device, setDevice] = useState<'desktop' | 'mobile' | 'tablet'>(
    'mobile',
  );

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setDevice('mobile');
    } else if (window.innerWidth >= 640 && window.innerWidth < 1280) {
      setDevice('tablet');
    } else {
      setDevice('desktop');
    }
  };

  useEffect(() => {
    if (isBrowser) {
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isBrowser]);

  return {
    device,
  };
};

export default useResize;
