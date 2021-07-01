import { emitter, G } from "../../main.js";

export default class Controller {
  constructor() {
    emitter.on(G.UP_POINTS, this.upPoints);
    emitter.on(G.SET_SCORE, this.setScore);
    emitter.on(G.TOGGLE_SOUND, this.toggleSound);
    emitter.on(G.TOGGLE_MUSIC, this.toggleMusic);
  }

  toggleSound(val) {
    this.model.soundOn = val;
  }

  toggleMusic(val) {
    this.model.musicOn = val;
  }

  setScore(score) {
    this.model.score = score;
  }

  upPoints(points) {
    let { score } = model;
    score += points;
    this.model.score = score;
  }
}
