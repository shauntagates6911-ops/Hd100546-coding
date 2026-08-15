// scheduler.js — HD 100546b Scheduler
// Runs scripts every frame

import { hdState } from "./state.js";
import { hdRunBlock } from "./interpreter.js";

export const hdSchedule = {
  loop() {
    if (!hdState.running) return;

    hdState.scripts.forEach(script => {
      hdRunBlock(script);
    });

    requestAnimationFrame(() => hdSchedule.loop());
  }
};
