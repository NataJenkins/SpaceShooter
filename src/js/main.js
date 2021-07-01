let game;
let model;
let emitter;
let G;
let controller;
window.onload = function () {
  let isMobile = navigator.userAgent.indexOf('Mobile');
  let config;
  if (isMobile === -1) {
    isMobile = navigator.userAgent.indexOf('Tablet');
  }
  if (isMobile === -1) {
    config = {
      type: Phaser.Auto,
      width: 480,
      height: 600,
      parent: 'phaser-game',
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },
      scene: [SceneTitle, SceneMain, SceneOver],
    };
  } else {
    config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'phaser-game',
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },
      scene: [SceneTitle, SceneMain, SceneOver],
    };
  }

  G = new Constants();
  model = new Model();
  model.isMobile = isMobile;
  game = new Phaser.Game(config);
};
