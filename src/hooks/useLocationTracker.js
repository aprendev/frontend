import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useLocationTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view');
  }, [location]);
}
