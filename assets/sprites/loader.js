// loader.js — Sprite Loader

export async function loadSprite(name) {
  const img = new Image();
  img.src = `assets/sprites/${name}`;
  await img.decode();
  return img;
}
