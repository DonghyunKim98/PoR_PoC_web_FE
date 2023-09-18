import { useMediaQuery } from 'react-responsive';

import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isTablet, setIsTablet] = useState<boolean>(true);

  const isAboveLg = useMediaQuery({
    query: `(min-width: 1024px)`,
  });
  const isAboveMd = useMediaQuery({
    query: `(min-width: 764px)`,
  });

  useEffect(() => {
    setIsDesktop(isAboveLg);
  }, [isAboveLg]);
  useEffect(() => {
    setIsTablet(isAboveMd);
  }, [isAboveMd]);
  return {
    isDesktop,
    isTablet,
  };
};
