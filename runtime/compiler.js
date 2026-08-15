// compiler.js — HD 100546b Block → Runtime Compiler
// Zero-thought cosmic compiler

import { hdState } from "./state.js";
import { HDSprite } from "./sprite.js";

// Example block format:
// { type: "move", value: 10, target: "Sprite1" }

export function hdCompileProject(projectJson) {
  // projectJson = { sprites: [...], scripts: [...] }
  hdState.sprites = projectJson.sprites.map(s => new HDSprite(s.name));
  hdState.scripts = projectJson.scripts.map(hdCompileScript);
}

export function hdCompileScript(script) {
  // script = { blocks: [...] }
  return script.blocks.map(hdCompileBlock);
}

export function hdCompileBlock(block) {
  // Turn raw block JSON into runtime-ready structure
  return {
    type: block.type,
    value: block.value ?? 0,
    text: block.text ?? "",
    time: block.time ?? 0,
    name: block.name ?? "",
    sprite: findSprite(block.target)
  };
}

function findSprite(name) {
  return hdState.sprites.find(s => s.name === name) || null;
}
