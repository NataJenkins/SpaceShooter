import { game } from '../../main.js';

export class Align {
  scaleToGameW(obj, per) {
    this.obj = obj;
    obj.displayWidth = game.config.width * per;
    obj.scaleY = obj.scaleX;
  }

  // CENTER

  static center(obj) {
    obj.x = game.config.width / 2;
    obj.y = game.config.height / 2;
  }

  static centerH(obj) {
    obj.x = game.config.width / 2;
  }

  static centerV(obj) {
    obj.y = game.config.height / 2;
  }
}

export class AlignGrid {
  constructor(config) {
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
      config.height = game.config.height;
    }
    if (!config.width) {
      config.width = game.config.width;
    }
    this.scene = config.scene;
    // cell width;
    this.cw = config.width / config.cols;
    // cell height;
    this.ch = config.height / config.rows;
  }

  show() {
    let i = 0;
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

  placeAt(xx, yy, obj) {
    // calc position based upon the cellwidth and cellheight
    const x2 = this.cw * xx + this.cw / 2;
    const y2 = this.ch * yy + this.ch / 2;

    obj.x = x2;
    obj.y = y2;
  }

  placeAtIndex(index, obj) {
    const yy = Math.floor(index / this.config.cols);
    const xx = index - yy * this.config.cols;
    this.placeAt(xx, yy, obj);
  }

  showNumbers() {
    this.show();
    let count = 0;
    for (let i = 0; i < this.config.rows; i += 1) {
      for (let j = 0; j < this.config.cols; j += 1) {
        const numText = this.scene.add.text(0, 0, count, { color: '#ff0000' });
        numText.setOrigin(0.5, 0.5);
        this.placeAtIndex(count, numText);
        count += 1;
      }
    }
  }
}
