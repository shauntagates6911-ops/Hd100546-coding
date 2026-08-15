export async function loadSound(name) {
  const audio = new Audio(`assets/sounds/${name}`);
  await audio.load;
  return audio;
}
