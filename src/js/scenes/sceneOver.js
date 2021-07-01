import { AlignGrid } from "../classes/utils/align.js";
import { align, game, model, emitter } from "../main.js";
import FlatButton from "../classes/ui/flatButton.js";

export default class SceneOver extends Phaser.Scene {
  constructor() {
    super("SceneOver");
  }

  preload() {
    this.load.image("title", "assets/title.png");
    this.load.image("button1", "assets/ui/buttons/2/1.png");
  }

  create() {
    this.alignGrid = new AlignGrid({ rows: 11, cols: 11, scene: this });

    const title = this.add.image(0, 0, "title");
    align.scaleToGameW(title, 0.8);
    this.alignGrid.placeAtIndex(16, title);

    this.winnerText = this.add.text(0, 0, "WINNER", {
      fontSize: game.config.width / 10,
      color: "green",
    });
    this.alignGrid.placeAtIndex(36, this.winnerText);

    if (model.playerWon === true) {
      this.winner = this.add.image(0, 0, "ship");
    } else {
      this.winner = this.add.image(0, 0, "eship");
    }
    align.scaleToGameW(this.winner, 0.25);
    this.winner.angle = 270;
    this.alignGrid.placeAtIndex(60, this.winner);

    // const btnStart = new FlatButton({
    //   scene: this,
    //   key: "button1",
    //   text: "Play Again!",
    //   event: "start_game",
    // });
    // this.alignGrid.placeAtIndex(93, btnStart);

    // emitter.on("start_game", this.startGame, this);
  }

  // startGame() {
  //   this.scene.start("SceneMain");
  // }
}
