class Controller {
  constructor() {
    emitter.on(G.UP_POINTS, this.upPoints);
    emitter.on(G.SET_SCORE, this.setScore);
    emitter.on(G.TOGGLE_SOUND, this.toggleSound);
    emitter.on(G.TOGGLE_MUSIC, this.toggleMusic);
  }

  toggleSound(val) {
    model.soundOn = val;
  }

  toggleMusic(val) {
    model.musicOn = val;
  }

  setScore(score) {
    model.score = score;
  }

  upPoints(points) {
    let { score } = model;
    score += points;
    model.score = score;
  }
}
