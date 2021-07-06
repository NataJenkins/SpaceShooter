import SceneTitle from './scenes/sceneTitle.js';
import SceneMain from './scenes/sceneMain.js';
import SceneOver from './scenes/sceneOver.js';
import Constants from './constants.js';
import Model from './classes/mc/model.js';
import { Align } from './classes/utils/align.js';
import './classes/mc/controller.js';

let game;
let model;
let emitter;
let G;
let controller;
const align = new Align();
window.onload = function () {
  const config = {
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

  G = new Constants();
  model = new Model();
  game = new Phaser.Game(config);
  emitter = new Phaser.Events.EventEmitter();
};

export {
  game, model, emitter, G, align,
};
