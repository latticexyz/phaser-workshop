import { PhaserLayer } from "../createPhaserLayer";
import { createCamera } from "./createCamera";
import { createControlsSystem } from "./createControlsSystem";
import { createMapSystem } from "./createMapSystem";
import { createPlayerSystem } from "./createPlayerSystem";

export const registerSystems = (layer: PhaserLayer) => {
  createCamera(layer);
  createMapSystem(layer);
  createPlayerSystem(layer);
  createControlsSystem(layer);
};
