// blocks.js — HD 100546b Block Definitions
// Every block is a function

export const hdBlocks = {
  "move": b => b.sprite.x += b.value,
  "turn": b => b.sprite.angle += b.value,
  "say": b => console.log(b.text),
  "wait": b => new Promise(r => setTimeout(r, b.time * 1000)),
  "event": b => console.log("Event:", b.name),

  // HD cosmic blocks
  "hd_warp": b => b.sprite.x += b.value * 10,
  "hd_nebula": b => console.log("🌌 Nebula Burst!")
};
