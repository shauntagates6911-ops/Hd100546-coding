export async function loadBackground(name) {
  const img = new Image();
  img.src = `assets/backgrounds/${name}`;
  await img.decode();
  return img;
}
