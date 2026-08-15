// assets.js — HD 100546b Asset Manager
// Zero-thought cosmic asset loader

export const hdAssets = {
  sprites: {},
  costumes: {},
  sounds: {},
  backgrounds: {},

  async loadAll() {
    await Promise.all([
      this.loadCategory("sprites"),
      this.loadCategory("costumes"),
      this.loadCategory("sounds"),
      this.loadCategory("backgrounds")
    ]);
  },

  async loadCategory(cat) {
    const index = await fetch(`assets/${cat}/index.json`).then(r => r.json());
    this[cat] = index;
  }
};
