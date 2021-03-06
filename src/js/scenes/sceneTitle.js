import FlatButton from '../classes/ui/flatButton.js';
import Controller from '../classes/mc/controller.js';
import { AlignGrid } from '../classes/utils/align.js';
import { emitter } from '../main.js';

let username;
class SceneTitle extends Phaser.Scene {
  constructor() {
    super('SceneTitle');
  }

  preload() {
    this.load.image('button1', 'assets/ui/buttons/2/1.png');
  }

  create() {
    const controller = new Controller();

    this.alignGrid = new AlignGrid({ rows: 11, cols: 11, scene: this });

    const btnStart = new FlatButton({
      scene: this,
      key: 'button1',
      text: 'start',
      event: 'start_game',
    });
    this.alignGrid.placeAtIndex(60, btnStart);

    emitter.on('start_game', this.startGame, this);
    // this.scene.start("SceneMain");
  }

  startGame() {
    const userInput = document.getElementById('username');
    if (document.getElementById('username').value) {
      username = document.getElementById('username').value;
    } else {
      username = 'player';
    }
    userInput.setAttribute('class', 'd-none');
    console.log(username);
    this.scene.start('SceneMain');
  }
}

export { SceneTitle, username };
