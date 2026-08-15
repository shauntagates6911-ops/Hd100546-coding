export async function loadCostume(name) {
  const img = new Image();
  img.src = `assets/costumes/${name}`;
  await img.decode();
  return img;
}
