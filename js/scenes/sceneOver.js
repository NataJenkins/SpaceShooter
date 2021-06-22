class SceneOver extends Phaser.Scene {
  constructor() {
    super("SceneOver");
  }
  preload() {
    this.load.image("title", "images/title.png");
    this.load.image("button1", "images/ui/buttons/2/1.png");
  }
  create() {
    this.alignGrid = new AlignGrid({ rows: 11, cols: 11, scene: this });

    var title = this.add.image(0, 0, "title");
    Align.scaleToGameW(title, 0.8);
    this.alignGrid.placeAtIndex(16, title);

    this.winnerText = this.add.text(0, 0, "WINNER", {
      fontSize: game.config.width / 10,
      color: "green",
    });
    this.alignGrid.placeAtIndex(36, this.winnerText);

    if (model.playerWon == true) {
      this.winner = this.add.image(0, 0, "ship");
    } else {
      this.winner = this.add.image(0, 0, "eship");
    }
    Align.scaleToGameW(this.winner, 0.25);
    this.winner.angle = 270;
    this.alignGrid.placeAtIndex(60, this.winner);

    var btnStart = new FlatButton({
      scene: this,
      key: "button1",
      text: "Play Again!",
      event: "start_game",
    });
    this.alignGrid.placeAtIndex(93, btnStart);

    emitter.on("start_game", this.startGame, this);
  }
  startGame() {
    this.scene.start("SceneMain");
  }

  update() {}
}
