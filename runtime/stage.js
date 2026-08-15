// stage.js — HD 100546b Stage Renderer

export class HDStage {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  render(sprites) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    sprites.forEach(s => s.draw(this.ctx));
  }
}
