class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    //load our images or sounds
    this.load.image("button1", "images/ui/buttons/2/1.png");
    this.load.image("button2", "images/ui/buttons/2/5.png");
    this.load.audio("cat", ["audio/meow.mp3", "audio/meow.ogg"]);

    this.load.image("toggleBack", "images/ui/toggles/1.png");
    this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
    this.load.image("sfxOn", "images/ui/icons/sfx_on.png");

    this.load.image("ship", "images/player.png");
    this.load.image("background", "images/background.jpg");
  }
  create() {
    //define our objects
    //set up
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();
    var mediaManager = new MediaManager({ scene: this });

    this.centerX = game.config.width / 2;
    this.centerY = game.config.height / 2;

    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.ship = this.physics.add.sprite(this.centerX, this.centerY, "ship");
    Align.scaleToGameW(this.ship, 0.125);

    this.background.scaleX = this.ship.scaleX;
    this.background.scaleY = this.ship.scaleY;
    this.background.setInteractive();
    this.background.on("pointerdown", this.backgroundClicked, this);
  }
  backgroundClicked() {
    var tx = this.background.input.localX;
    var ty = this.background.input.localY;
    var angle = this.physics.moveTo(this.ship, tx, ty, 60);

    angle = this.toDegrees(angle);
    this.ship.angle = angle;
  }
  toDegrees(angle) {
    return angle * (180 / Math.PI);
  }
  update() {}
}
