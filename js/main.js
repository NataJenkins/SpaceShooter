var game;
window.onload = function () {
  var config = {
    type: Phaser.Auto,
    width: 480,
    height: 600,
    parent: "phaser-game",
    scene: [SceneMain],
  };
  var game = new Phaser.Game(config);
};
