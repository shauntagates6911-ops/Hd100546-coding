// interpreter.js — HD 100546b Block Interpreter
// Executes blocks with zero thought

import { hdBlocks } from "./blocks.js";

export function hdRunBlock(block) {
  const fn = hdBlocks[block.type];
  if (fn) return fn(block);
}
