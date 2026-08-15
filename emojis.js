// emojis.js — HD 100546b Coding
// Zero-thought emoji injector

const HD_EMOJIS = {
  fire: "🔥",
  cosmic: "🪐",
  boom: "💥",
  water: "🐬",
  spark: "⚡",
  builder: "👩‍🏭",
  nebula: "🌌",
  star: "⭐",
  hdcore: "🧨",
  seoul: "🇰🇷",
  sport: "⚾️",
  remix: "🔄",
  erupt: "🌋",
  golf: "⛳️",
  armenia: "🇦🇲",
  starshoot: "🌠",
  hat: "🧢",
  delete: "💣",
};

function hdEmoji(name) {
  return HD_EMOJIS[name] || "✨";
}

function hdInjectEmojis() {
  document.querySelectorAll("[data-emoji]").forEach(el => {
    const key = el.getAttribute("data-emoji");
    el.textContent = hdEmoji(key);
  });
}
