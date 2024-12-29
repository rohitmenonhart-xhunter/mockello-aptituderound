import { SecurityAudio } from './audio';

export const initializeFullscreen = async (): Promise<void> => {
  try {
    if (document.fullscreenElement) {
      return; // Already in fullscreen
    }

    const element = document.documentElement;
    
    if (element.requestFullscreen) {
      await element.requestFullscreen();
    } else if ((element as any).webkitRequestFullscreen) {
      await (element as any).webkitRequestFullscreen();
    } else if ((element as any).mozRequestFullScreen) {
      await (element as any).mozRequestFullScreen();
    } else if ((element as any).msRequestFullscreen) {
      await (element as any).msRequestFullscreen();
    } else {
      throw new Error('Fullscreen not supported');
    }
    
    setupFullscreenListeners();
  } catch (error) {
    console.error('Fullscreen initialization failed:', error);
    throw error;
  }
};

const setupFullscreenListeners = (): void => {
  const handleChange = () => {
    if (!document.fullscreenElement && 
        !(document as any).webkitFullscreenElement && 
        !(document as any).mozFullScreenElement && 
        !(document as any).msFullscreenElement) {
      handleTestViolation();
    }
  };

  document.addEventListener('fullscreenchange', handleChange);
  document.addEventListener('webkitfullscreenchange', handleChange);
  document.addEventListener('mozfullscreenchange', handleChange);
  document.addEventListener('MSFullscreenChange', handleChange);
};

const handleTestViolation = (): void => {
  SecurityAudio.getInstance().playAlarm();
  alert('Test terminated due to fullscreen exit. This incident will be recorded.');
  window.location.href = '/';
};