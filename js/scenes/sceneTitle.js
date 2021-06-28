class SceneTitle extends Phaser.Scene {
  constructor() {
    super("SceneTitle");
  }

  preload() {
    this.load.image("button1", "assets/ui/buttons/2/1.png");
  }

  create() {
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();

    this.alignGrid = new AlignGrid({ rows: 11, cols: 11, scene: this });

    const btnStart = new FlatButton({
      scene: this,
      key: "button1",
      text: "start",
      event: "start_game",
    });
    this.alignGrid.placeAtIndex(60, btnStart);

    emitter.on("start_game", this.startGame, this);
    // this.scene.start("SceneMain");
  }

  startGame() {
    this.scene.start("SceneMain");
  }
}
