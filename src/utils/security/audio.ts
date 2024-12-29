// Handles audio playback with fallback and error handling
export class SecurityAudio {
  private static instance: SecurityAudio;
  private audio: HTMLAudioElement | null = null;
  private fallbackBeep?: () => void;

  private constructor() {
    this.initializeAudio();
    this.createFallbackBeep();
  }

  public static getInstance(): SecurityAudio {
    if (!SecurityAudio.instance) {
      SecurityAudio.instance = new SecurityAudio();
    }
    return SecurityAudio.instance;
  }

  private initializeAudio() {
    try {
      this.audio = new Audio('/alarm.mp3');
      // Preload the audio
      this.audio.load();
    } catch (error) {
      console.warn('Audio initialization failed, using fallback:', error);
    }
  }

  private createFallbackBeep() {
    // Create a fallback beep using the Web Audio API
    this.fallbackBeep = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 440; // A4 note
        gainNode.gain.value = 0.1; // Lower volume

        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
          audioContext.close();
        }, 500); // Beep for 500ms
      } catch (error) {
        console.error('Fallback beep failed:', error);
      }
    };
  }

  public playAlarm() {
    if (this.audio) {
      this.audio.play().catch((error) => {
        console.warn('Audio playback failed, using fallback:', error);
        this.fallbackBeep?.();
      });
    } else {
      this.fallbackBeep?.();
    }
  }
}