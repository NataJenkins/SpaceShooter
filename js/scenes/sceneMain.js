class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    //load our images or sounds
    this.load.image("button1", "images/ui/buttons/2/1.png");
    this.load.image("button2", "images/ui/buttons/2/5.png");
    this.load.audio("cat", ["audio/meow.mp3", "audio/meow.ogg"]);
    this.load.audio("backgroundMusic", [
      "audio/background.mp3",
      "audio/background.ogg",
    ]);

    this.load.image("toggleBack", "images/ui/toggles/1.png");
    this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
    this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
    this.load.image("musicOn", "images/ui/icons/music_on.png");
    this.load.image("musicOff", "images/ui/icons/music_off.png");
  }
  create() {
    //define our objects
    //set up
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();
    var mediaManager = new MediaManager({ scene: this });

    // var sb = new SoundButtons({ scene: this });

    var bar = new Bar({ scene: this, x: 240, y: 320 });
    bar.setPercent(0.5);
  }
  update() {}
}
