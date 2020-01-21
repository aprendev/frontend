import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useLocationTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_path: pathname
    });
  }, [pathname]);
}
