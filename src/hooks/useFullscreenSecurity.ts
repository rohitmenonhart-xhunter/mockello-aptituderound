import { useEffect } from 'react';
import { initializeFullscreen } from '../utils/security';

export const useFullscreenSecurity = () => {
  useEffect(() => {
    const setupSecurity = async () => {
      await initializeFullscreen();
    };
    
    setupSecurity();
    
    return () => {
      // Cleanup fullscreen when component unmounts
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);
};