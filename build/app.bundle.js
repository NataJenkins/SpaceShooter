/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.align = exports.G = exports.emitter = exports.model = exports.game = undefined;

var _sceneTitle = __webpack_require__(4);

var _sceneTitle2 = _interopRequireDefault(_sceneTitle);

var _sceneMain = __webpack_require__(5);

var _sceneMain2 = _interopRequireDefault(_sceneMain);

var _sceneOver = __webpack_require__(6);

var _sceneOver2 = _interopRequireDefault(_sceneOver);

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

var _model = __webpack_require__(8);

var _model2 = _interopRequireDefault(_model);

var _align = __webpack_require__(2);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = void 0;
var model = void 0;
var emitter = void 0;
var G = void 0;
var controller = void 0;
var align = new _align.Align();
window.onload = function () {
  var isMobile = navigator.userAgent.indexOf('Mobile');
  var config = void 0;
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
          debug: false
        }
      },
      scene: [_sceneTitle2.default, _sceneMain2.default, _sceneOver2.default]
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
          debug: false
        }
      },
      scene: [_sceneTitle2.default, _sceneMain2.default, _sceneOver2.default]
    };
  }

  exports.G = G = new _constants2.default();
  exports.model = model = new _model2.default();
  model.isMobile = isMobile;
  exports.game = game = new Phaser.Game(config);
  exports.emitter = emitter = new Phaser.Events.EventEmitter();
};

exports.game = game;
exports.model = model;
exports.emitter = emitter;
exports.G = G;
exports.align = align;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);

    _main.emitter.on(_main.G.UP_POINTS, this.upPoints);
    _main.emitter.on(_main.G.SET_SCORE, this.setScore);
    _main.emitter.on(_main.G.TOGGLE_SOUND, this.toggleSound);
    _main.emitter.on(_main.G.TOGGLE_MUSIC, this.toggleMusic);
  }

  _createClass(Controller, [{
    key: 'toggleSound',
    value: function toggleSound(val) {
      this.model.soundOn = val;
    }
  }, {
    key: 'toggleMusic',
    value: function toggleMusic(val) {
      this.model.musicOn = val;
    }
  }, {
    key: 'setScore',
    value: function setScore(score) {
      this.model.score = score;
    }
  }, {
    key: 'upPoints',
    value: function upPoints(points) {
      var _model = model,
          score = _model.score;

      score += points;
      this.model.score = score;
    }
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignGrid = exports.Align = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Align = exports.Align = function () {
  function Align() {
    _classCallCheck(this, Align);
  }

  _createClass(Align, [{
    key: 'scaleToGameW',
    value: function scaleToGameW(obj, per) {
      this.obj = obj;
      obj.displayWidth = _main.game.config.width * per;
      obj.scaleY = obj.scaleX;
    }

    // CENTER

  }], [{
    key: 'center',
    value: function center(obj) {
      obj.x = _main.game.config.width / 2;
      obj.y = _main.game.config.height / 2;
    }
  }, {
    key: 'centerH',
    value: function centerH(obj) {
      obj.x = _main.game.config.width / 2;
    }
  }, {
    key: 'centerV',
    value: function centerV(obj) {
      obj.y = _main.game.config.height / 2;
    }
  }]);

  return Align;
}();

var AlignGrid = exports.AlignGrid = function () {
  function AlignGrid(config) {
    _classCallCheck(this, AlignGrid);

    this.config = config;
    if (!config.scene) {
      return;
    }
    if (!config.rows) {
      config.rows = 5;
    }
    if (!config.cols) {
      config.cols = 5;
    }
    if (!config.height) {
      config.height = _main.game.config.height;
    }
    if (!config.width) {
      config.width = _main.game.config.width;
    }
    this.scene = config.scene;
    // cell width;
    this.cw = config.width / config.cols;
    // cell height;
    this.ch = config.height / config.rows;
  }

  _createClass(AlignGrid, [{
    key: 'show',
    value: function show() {
      var i = 0;
      this.graphics = this.scene.add.graphics();
      this.graphics.lineStyle(2, 0xff0000);

      for (i = 0; i < this.config.width; i += this.cw) {
        this.graphics.moveTo(i, 0);
        this.graphics.lineTo(i, this.config.height);
      }
      for (i = 0; i < this.config.height; i += this.ch) {
        this.graphics.moveTo(0, i);
        this.graphics.lineTo(this.config.width, i);
      }
      this.graphics.strokePath();
    }
  }, {
    key: 'placeAt',
    value: function placeAt(xx, yy, obj) {
      // calc position based upon the cellwidth and cellheight
      var x2 = this.cw * xx + this.cw / 2;
      var y2 = this.ch * yy + this.ch / 2;

      obj.x = x2;
      obj.y = y2;
    }
  }, {
    key: 'placeAtIndex',
    value: function placeAtIndex(index, obj) {
      var yy = Math.floor(index / this.config.cols);
      var xx = index - yy * this.config.cols;
      this.placeAt(xx, yy, obj);
    }
  }, {
    key: 'showNumbers',
    value: function showNumbers() {
      this.show();
      var count = 0;
      for (var i = 0; i < this.config.rows; i += 1) {
        for (var j = 0; j < this.config.cols; j += 1) {
          var numText = this.scene.add.text(0, 0, count, { color: '#ff0000' });
          numText.setOrigin(0.5, 0.5);
          this.placeAtIndex(count, numText);
          count += 1;
        }
      }
    }
  }]);

  return AlignGrid;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlatButton = function (_Phaser$GameObjects$C) {
  _inherits(FlatButton, _Phaser$GameObjects$C);

  function FlatButton(config) {
    _classCallCheck(this, FlatButton);

    if (!config.scene) {
      return _possibleConstructorReturn(_this);
    }
    if (!config.key) {
      return _possibleConstructorReturn(_this);
    }

    var _this = _possibleConstructorReturn(this, (FlatButton.__proto__ || Object.getPrototypeOf(FlatButton)).call(this, config.scene));

    _this.config = config;
    _this.scene = config.scene;
    _this.back = _this.scene.add.image(0, 0, config.key);

    _this.add(_this.back);

    if (config.text) {
      if (config.textConfig) {
        _this.text1 = _this.scene.add.text(0, 0, config.text, config.textConfig);
      } else {
        _this.text1 = _this.scene.add.text(0, 0, config.text);
      }
      _this.text1.setOrigin(0.5, 0.5);
      _this.add(_this.text1);
    }
    if (config.x) {
      _this.x = config.x;
    }
    if (config.y) {
      _this.y = config.y;
    }
    _this.scene.add.existing(_this);

    if (config.event) {
      _this.back.setInteractive();
      _this.back.on('pointerdown', _this.pressed, _this);
    }
    if (_main.model.isMobile === -1) {
      _this.back.on('pointerover', _this.over, _this);
      _this.back.on('pointerout', _this.out, _this);
    }
    return _this;
  }

  _createClass(FlatButton, [{
    key: 'over',
    value: function over() {
      this.y -= 5;
    }
  }, {
    key: 'out',
    value: function out() {
      this.y += 5;
    }
  }, {
    key: 'pressed',
    value: function pressed() {
      if (this.config.params) {
        _main.emitter.emit(this.config.event, this.config.params);
      } else {
        _main.emitter.emit(this.config.event);
      }
    }
  }]);

  return FlatButton;
}(Phaser.GameObjects.Container);

exports.default = FlatButton;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flatButton = __webpack_require__(3);

var _flatButton2 = _interopRequireDefault(_flatButton);

var _controller = __webpack_require__(1);

var _controller2 = _interopRequireDefault(_controller);

var _align = __webpack_require__(2);

var _main = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneTitle = function (_Phaser$Scene) {
  _inherits(SceneTitle, _Phaser$Scene);

  function SceneTitle() {
    _classCallCheck(this, SceneTitle);

    return _possibleConstructorReturn(this, (SceneTitle.__proto__ || Object.getPrototypeOf(SceneTitle)).call(this, 'SceneTitle'));
  }

  _createClass(SceneTitle, [{
    key: 'preload',
    value: function preload() {
      this.load.image('button1', 'assets/ui/buttons/2/1.png');
    }
  }, {
    key: 'create',
    value: function create() {
      var controller = new _controller2.default();

      this.alignGrid = new _align.AlignGrid({ rows: 11, cols: 11, scene: this });

      var btnStart = new _flatButton2.default({
        scene: this,
        key: 'button1',
        text: 'start',
        event: 'start_game'
      });
      this.alignGrid.placeAtIndex(60, btnStart);

      _main.emitter.on('start_game', this.startGame, this);
      // this.scene.start("SceneMain");
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      this.scene.start('SceneMain');
    }
  }]);

  return SceneTitle;
}(Phaser.Scene);

exports.default = SceneTitle;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = __webpack_require__(1);

var _controller2 = _interopRequireDefault(_controller);

var _main = __webpack_require__(0);

var _align = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneMain = function (_Phaser$Scene) {
  _inherits(SceneMain, _Phaser$Scene);

  function SceneMain() {
    _classCallCheck(this, SceneMain);

    return _possibleConstructorReturn(this, (SceneMain.__proto__ || Object.getPrototypeOf(SceneMain)).call(this, 'SceneMain'));
  }

  _createClass(SceneMain, [{
    key: 'preload',
    value: function preload() {
      // load our images or sounds
      this.load.image('button1', 'assets/ui/buttons/2/1.png');
      this.load.image('button2', 'assets/ui/buttons/2/5.png');

      this.load.image('toggleBack', 'assets/ui/toggles/1.png');
      this.load.image('sfxOff', 'assets/ui/icons/sfx_off.png');
      this.load.image('sfxOn', 'assets/ui/icons/sfx_on.png');

      this.load.image('ship', 'assets/player.png');
      this.load.image('eship', 'assets/eship.png');
      this.load.image('bullet', 'assets/bullet.png');
      this.load.image('ebullet', 'assets/ebullet.png');
      this.load.image('background', 'assets/background.jpg');

      this.load.spritesheet('rocks', 'assets/rocks.png', {
        frameWidth: 125,
        frameHeight: 100
      });
      this.load.spritesheet('exp', 'assets/exp.png', {
        frameWidth: 64,
        frameHeight: 64
      });
    }
  }, {
    key: 'create',
    value: function create() {
      // define our objects
      // set up
      var controller = new _controller2.default();

      this.shields = 50;
      this.eshields = 50;
      _main.model.playerWon === true;

      this.centerX = _main.game.config.width / 2;
      this.centerY = _main.game.config.height / 2;
      //
      //
      //
      this.background = this.add.image(0, 0, 'background');
      this.background.setOrigin(0, 0);
      this.ship = this.physics.add.sprite(this.centerX, this.centerY, 'ship');
      this.ship.body.collideWorldBounds = true;
      _main.align.scaleToGameW(this.ship, 0.125);
      this.background.scaleX = this.ship.scaleX;
      this.background.scaleY = this.ship.scaleY;
      //
      //
      //
      this.background.setInteractive();
      this.background.on('pointerup', this.backgroundClicked, this);
      this.background.on('pointerdown', this.onDown, this);
      //
      //
      //
      this.physics.world.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);

      this.background.on('pointerdown', this.backgroundClicked, this);
      this.cameras.main.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);
      this.cameras.main.startFollow(this.ship, true);
      this.bulletGroup = this.physics.add.group();
      this.ebulletGroup = this.physics.add.group();
      this.rockGroup = this.physics.add.group();
      this.makeRocks();
      //
      //
      //
      var frameNames = this.anims.generateFrameNumbers('exp');
      this.anims.create({
        key: 'boom',
        frames: frameNames,
        frameRate: 16,
        repeat: false
      });
      // this.explosion = this.add.sprite(
      //   game.config.width / 2,
      //   game.config.height / 2,
      //   "exp"
      // );
      // this.explosion.play("boom");

      this.eship = this.physics.add.sprite(this.centerX, 0, 'eship');
      this.eship.body.collideWorldBounds = true;
      _main.align.scaleToGameW(this.eship, 0.25);
      this.makeInfo();
      this.setColiders();
    }
  }, {
    key: 'setColiders',
    value: function setColiders() {
      this.physics.add.collider(this.rockGroup);
      this.physics.add.collider(this.bulletGroup, this.rockGroup, this.destroyRock, null, this);
      this.physics.add.collider(this.ebulletGroup, this.rockGroup, this.destroyRock, null, this);
      this.physics.add.collider(this.bulletGroup, this.eship, this.damageEnemy, null, this);
      this.physics.add.collider(this.ebulletGroup, this.ship, this.damagePlayer, null, this);
      this.physics.add.collider(this.rockGroup, this.ship, this.rockHitPlayer, null, this);
      this.physics.add.collider(this.rockGroup, this.eship, this.rockHitEnemy, null, this);
    }
  }, {
    key: 'makeRocks',
    value: function makeRocks() {
      var _this2 = this;

      if (this.rockGroup.getChildren().length === 0) {
        this.rockGroup = this.physics.add.group({
          key: 'rocks',
          frame: [0, 1, 2],
          frameQuantity: 1,
          bounceX: 1,
          bounceY: 1,
          angularVelocity: 1,
          collideWorldBounds: true
        });
        this.rockGroup.children.iterate(function (child) {
          var xx = Math.floor(Math.random() * _this2.background.displayWidth);
          var yy = Math.floor(Math.random() * _this2.background.displayHeight);

          child.x = xx;
          child.y = yy;

          _main.align.scaleToGameW(child, 0.1);

          // -1,0,1
          var vx = Math.floor(Math.random() * 2) - 1;
          var vy = Math.floor(Math.random() * 2) - 1;
          if (vx === 0 && vy === 0) {
            vx = 1;
            vy = 1;
          }

          var speed = Math.floor(Math.random() * 200) + 10;
          child.body.setVelocity(vx * speed, vy * speed);
        });
      }
    }
  }, {
    key: 'makeInfo',
    value: function makeInfo() {
      this.text1 = this.add.text(0, 0, 'Shields\n50', {
        fontSize: _main.game.config.width / 30,
        align: 'center',
        backgroundColor: '#000000'
      });
      this.text2 = this.add.text(0, 0, 'Enemy Shields\n50', {
        fontSize: _main.game.config.width / 30,
        align: 'center',
        backgroundColor: '#000000'
      });

      this.text1.setOrigin(0.5, 0.5);
      this.text2.setOrigin(0.5, 0.5);

      this.uiGrid = new _align.AlignGrid({ scene: this, rows: 11, cols: 11 });

      this.uiGrid.placeAtIndex(2, this.text1);
      this.uiGrid.placeAtIndex(8, this.text2);

      this.text1.setScrollFactor(0);
      this.text2.setScrollFactor(0);
    }
  }, {
    key: 'downPlayer',
    value: function downPlayer() {
      this.shields -= 1;
      this.text1.setText('Shields\n' + this.shields);
      if (this.shields <= 0) {
        _main.model.playerWon = false;
        this.scene.start('SceneOver');
      } else {
        var a = void 0;
      }
    }
  }, {
    key: 'downEnemy',
    value: function downEnemy() {
      this.eshields -= 1;
      this.text2.setText('Enemy Shields\n' + this.eshields);
      if (this.eshields <= 0) {
        _main.model.playerWon = true;
        this.scene.start('SceneOver');
      }
    }
  }, {
    key: 'rockHitPlayer',
    value: function rockHitPlayer(ship, rock) {
      var explosion = this.add.sprite(rock.x, rock.y, 'exp');
      explosion.play('boom');
      rock.destroy();
      this.makeRocks();
      this.downPlayer();
    }
  }, {
    key: 'rockHitEnemy',
    value: function rockHitEnemy(ship, rock) {
      var explosion = this.add.sprite(rock.x, rock.y, 'exp');
      explosion.play('boom');
      rock.destroy();
      this.makeRocks();
      this.downEnemy();
    }
  }, {
    key: 'damagePlayer',
    value: function damagePlayer(ship, ebullet) {
      var explosion = this.add.sprite(this.ship.x, this.ship.y, 'exp');
      explosion.play('boom');
      ebullet.destroy();
      this.downPlayer();
    }
  }, {
    key: 'damageEnemy',
    value: function damageEnemy(ship, bullet) {
      var explosion = this.add.sprite(bullet.x, bullet.y, 'exp');
      explosion.play('boom');
      bullet.destroy();
      var angle2 = this.physics.moveTo(this.eship, this.ship.x, this.ship.y, 100);
      angle2 = this.toDegrees(angle2);
      this.eship.angle = angle2;
      this.downEnemy();
    }
  }, {
    key: 'destroyRock',
    value: function destroyRock(bullet, rock) {
      bullet.destroy();
      var explosion = this.add.sprite(rock.x, rock.y, 'exp');
      explosion.play('boom');
      rock.destroy();
      this.makeRocks();
    }
  }, {
    key: 'getTimer',
    value: function getTimer() {
      var d = new Date();
      this.d;
      return d.getTime();
    }
  }, {
    key: 'onDown',
    value: function onDown() {
      this.downTime = this.getTimer();
    }
  }, {
    key: 'backgroundClicked',
    value: function backgroundClicked() {
      var elapsed = Math.abs(this.downTime - this.getTimer());
      if (elapsed < 300) {
        var tx = this.background.input.localX * this.background.scaleX;
        var ty = this.background.input.localY * this.background.scaleY;
        this.tx = tx;
        this.ty = ty;
        var angle = this.physics.moveTo(this.ship, tx, ty, 100);

        angle = this.toDegrees(angle);
        this.ship.angle = angle;
        //
        //
        //
        var distX2 = Math.abs(this.ship.x - tx);
        var distY2 = Math.abs(this.ship.y - ty);
        if (distX2 > 30 && distY2 > 30) {
          var angle2 = this.physics.moveTo(this.eship, this.ship.x, this.ship.y, 60);
          angle2 = this.toDegrees(angle2);
          this.eship.angle = angle2;
        }
      } else {
        this.makeBullet();
      }
    }
  }, {
    key: 'makeBullet',
    value: function makeBullet() {
      var dirObj = this.getDirFromAngle(this.ship.angle);
      var bullet = this.physics.add.sprite(this.ship.x + dirObj.tx * 30, this.ship.y + dirObj.ty * 30, 'bullet');
      this.bulletGroup.add(bullet);
      bullet.angle = this.ship.angle;
      bullet.body.setVelocity(dirObj.tx * 200, dirObj.ty * 200);
    }
  }, {
    key: 'fireEBullet',
    value: function fireEBullet() {
      var elapsed = Math.abs(this.lastEBullet - this.getTimer());
      if (elapsed < 500) {
        return;
      }
      this.lastEBullet = this.getTimer();
      var ebullet = this.physics.add.sprite(this.eship.x, this.eship.y, 'ebullet');
      this.ebulletGroup.add(ebullet);

      ebullet.body.angularVelocity = 10;
      this.physics.moveTo(ebullet, this.ship.x, this.ship.y, 100);
    }
  }, {
    key: 'getDirFromAngle',
    value: function getDirFromAngle(angle) {
      var rads = angle * Math.PI / 180;
      var tx = Math.cos(rads);
      var ty = Math.sin(rads);
      this;
      return { tx: tx, ty: ty };
    }
  }, {
    key: 'toDegrees',
    value: function toDegrees(angle) {
      this;
      return angle * (180 / Math.PI);
    }
  }, {
    key: 'thisFunction',
    value: function thisFunction() {
      var a = 10;
      this.a;
      return a;
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.ship && this.eship) {
        var distX = Math.abs(this.ship.x - this.tx);
        var distY = Math.abs(this.ship.y - this.ty);

        if (distX < 10 && distY < 10) {
          if (this.ship.body) {
            this.ship.body.setVelocity(0, 0);
          }
        }

        var distX2 = Math.abs(this.ship.x - this.eship.x);
        var distY2 = Math.abs(this.ship.y - this.eship.y);

        if (distX2 < _main.game.config.width / 5 && distY2 < _main.game.config.height / 5) {
          this.fireEBullet();
        }
      }
    }
  }]);

  return SceneMain;
}(Phaser.Scene);

exports.default = SceneMain;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _align = __webpack_require__(2);

var _main = __webpack_require__(0);

var _flatButton = __webpack_require__(3);

var _flatButton2 = _interopRequireDefault(_flatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneOver = function (_Phaser$Scene) {
  _inherits(SceneOver, _Phaser$Scene);

  function SceneOver() {
    _classCallCheck(this, SceneOver);

    return _possibleConstructorReturn(this, (SceneOver.__proto__ || Object.getPrototypeOf(SceneOver)).call(this, 'SceneOver'));
  }

  _createClass(SceneOver, [{
    key: 'preload',
    value: function preload() {
      this.load.image('title', 'assets/title.png');
      this.load.image('button1', 'assets/ui/buttons/2/1.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.alignGrid = new _align.AlignGrid({ rows: 11, cols: 11, scene: this });

      var title = this.add.image(0, 0, 'title');
      _main.align.scaleToGameW(title, 0.8);
      this.alignGrid.placeAtIndex(16, title);

      this.winnerText = this.add.text(0, 0, 'WINNER', {
        fontSize: _main.game.config.width / 10,
        color: 'green'
      });
      this.alignGrid.placeAtIndex(36, this.winnerText);

      if (_main.model.playerWon === true) {
        this.winner = this.add.image(0, 0, 'ship');
      } else {
        this.winner = this.add.image(0, 0, 'eship');
      }
      _main.align.scaleToGameW(this.winner, 0.25);
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

  }]);

  return SceneOver;
}(Phaser.Scene);

exports.default = SceneOver;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = function Constants() {
  _classCallCheck(this, Constants);

  this.SET_SCORE = 'setScore';
  this.UP_POINTS = 'upPoints';
  this.SCORE_UPDATED = 'setScoreUpdated';
  this.PLAY_SOUND = 'playSound';
  this.MUSIC_CHANGED = 'musicChanged';
  this.TOGGLE_SOUND = 'toggleSound';
  this.TOGGLE_MUSIC = 'toggleMusic';
};

exports.default = Constants;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this._score = 0;
    this.soundOn = true;
    this._musicOn = true;
  }

  _createClass(Model, [{
    key: "musicOn",
    set: function set(val) {
      this._musicOn = val;
      emitter.emit(G.MUSIC_CHANGED);
    },
    get: function get() {
      return this._musicOn;
    }
  }, {
    key: "score",
    set: function set(val) {
      this._score = val;
      emitter.emit(G.SCORE_UPDATED);
    },
    get: function get() {
      return this._score;
    }
  }]);

  return Model;
}();

exports.default = Model;

/***/ })
/******/ ]);