import click from "@/assets/audio/audio-click.mp3";
import lost from "@/assets/audio/audio-lost.mp3";
import won from "@/assets/audio/audio-won.mp3";
import place from "@/assets/audio/audio-place.mp3";
import background from "@/assets/audio/background.mp3";

export default class AudioController {
  #sfxMuted = true;
  #musicMuted = true;

  #sounds = {
    sfx: {
      place: new Audio(place),
      lost: new Audio(lost),
      won: new Audio(won),
      click: new Audio(click),
    },

    music: {
      background: new Audio(background),
    },
  };

  constructor() {
    const { background } = this.#sounds.music;

    background.loop = true;
    background.volume = 1;
  }

  playSfx(name) {
    const audio = this.#sounds.sfx[name];

    if (!audio || this.#sfxMuted) return;

    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  playMusic(name) {
    const audio = this.#sounds.music[name];

    if (!audio || this.#musicMuted) return;

    audio.play().catch(() => {});
  }

  stopSfx(name) {
    const audio = this.#sounds.sfx[name];

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  }

  stopMusic(name) {
    const audio = this.#sounds.music[name];

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  }

  toggleSfx(toggle = true) {
    if (toggle === false) return this.#sfxMuted;

    this.#sfxMuted = !this.#sfxMuted;

    return this.#sfxMuted;
  }

  toggleMusic(toggle = true) {
    if (toggle === false) return this.#musicMuted;

    this.#musicMuted = !this.#musicMuted;

    const background = this.#sounds.music.background;

    if (this.#musicMuted) {
      background.pause();
    } else {
      this.playMusic("background");
    }

    return this.#musicMuted;
  }

  setSfxVolume(volume) {
    const clampedVolume = Math.min(Math.max(volume, 0), 1);

    Object.values(this.#sounds.sfx).forEach((audio) => {
      audio.volume = clampedVolume;
    });
  }

  setMusicVolume(volume) {
    const clampedVolume = Math.min(Math.max(volume, 0), 1);

    Object.values(this.#sounds.music).forEach((audio) => {
      audio.volume = clampedVolume;
    });
  }
}
