export const initializeFullscreen = async () => {
  try {
    await document.documentElement.requestFullscreen();
    document.addEventListener('fullscreenchange', handleFullscreenChange);
  } catch (error) {
    console.error('Fullscreen request failed:', error);
  }
};

const handleFullscreenChange = () => {
  if (!document.fullscreenElement) {
    playAlarmSound();
    alert('Test terminated due to fullscreen exit');
    window.location.href = '/';
  }
};

const playAlarmSound = () => {
  const audio = new Audio('/alarm.mp3');
  audio.play();
};