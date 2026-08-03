import click from "../assets/audio/audio-click.mp3";
import lost from "../assets/audio/audio-lost.mp3";
import won from "../assets/audio/audio-won.mp3";
import place from "../assets/audio/audio-place.mp3";
import background from "../assets/audio/background.mp3";

export default class AudioController {
  #muted = false;

  #sounds = {
    place: new Audio(place),
    lost: new Audio(lost),
    won: new Audio(won),
    click: new Audio(click),
    background: new Audio(background),
  };

  init() {
    this.mute();
  }

  backgroundInit() {
    const waves = this.#sounds.waves;
    waves.loop = true;
    waves.volume = 0.2;

    waves.play();
  }

  /**
   * @param {"place" | "lost" | "won" | "click" | "background"} name
   */
  play(name) {
    if (this.#muted) return;

    const audio = this.#sounds[name];
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  }

  stop(name) {
    const audio = this.#sounds[name];
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  }

  mute() {
    this.#muted = true;

    Object.values(this.#sounds).forEach((audio) => {
      audio.muted = true;
    });
  }

  unmute() {
    this.#muted = false;

    Object.values(this.#sounds).forEach((audio) => {
      audio.muted = false;
    });
  }

  toggleMute() {
    this.#muted ? this.unmute() : this.mute();

    return this.#muted;
  }

  setVolume(volume) {
    Object.values(this.#sounds).forEach((audio) => {
      audio.volume = volume;
    });
  }
}
