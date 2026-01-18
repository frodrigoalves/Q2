export class AudioManager {
    constructor() {
        this.ambient = new Audio();
        this.ambient.loop = true;
        this.voice = new Audio();
        this.isVoicePlaying = false;
    }

    initAmbient(src, initialVolume = 0.3) {
        this.ambient.src = src;
        this.ambient.volume = initialVolume;
        

        document.addEventListener('click', () => {
            if (this.ambient.paused) {
                this.ambient.play().catch(e => console.log("Ambient play blocked"));
            }
        }, { once: true });
    }

    setAmbientVolume(value) {
        this.ambient.volume = value;
    }

    playVoice(src, onEnd) {
        if (this.isVoicePlaying) {
            this.voice.pause();
        }
        this.voice.src = src;
        this.voice.play();
        this.isVoicePlaying = true;
        
        this.voice.onended = () => {
            this.isVoicePlaying = false;
            if (onEnd) onEnd();
        };
    }

    stopVoice() {
        this.voice.pause();
        this.isVoicePlaying = false;
    }
}
