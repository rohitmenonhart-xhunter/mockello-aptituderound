export const playAlarmSound = (): void => {
  try {
    const audio = new Audio('/alarm.mp3');
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  } catch (error) {
    console.error('Error playing alarm sound:', error);
  }
};