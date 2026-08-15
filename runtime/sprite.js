// sprite.js — HD 100546b Sprite Object

export class HDSprite {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.costume = null;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.fillStyle = "white";
    ctx.fillRect(-20, -20, 40, 40);
    ctx.restore();
  }
}
