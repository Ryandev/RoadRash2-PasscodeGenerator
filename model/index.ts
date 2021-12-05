import { decode } from "./decode";
import { encode } from "./encode";
import { IGameState } from "./GameState";

function firstBootState(): IGameState {
  return {
    level: 1,
    bike: 0,
    cash: 1000,
    beatenLevelAlaska: false,
    beatenLevelArizona: false,
    beatenLevelHawaii: false,
    beatenLevelTennessee: false,
    beatenLevelVermont: false,
  };
}

const exports = {
  encode,
  decode,
  firstBootState,
};

export default exports;
