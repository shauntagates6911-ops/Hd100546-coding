// engine.js — HD 100546b Runtime Core
// Zero-thought cosmic execution engine

import { hdState } from "./state.js";
import { hdRunBlock } from "./interpreter.js";
import { hdSchedule } from "./scheduler.js";

export const hdEngine = {
  start() {
    hdState.running = true;
    hdSchedule.loop();
  },

  stop() {
    hdState.running = false;
  },

  run(block) {
    return hdRunBlock(block);
  }
};
