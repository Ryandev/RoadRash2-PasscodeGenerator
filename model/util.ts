import { IGameState } from "./GameState";

export function printGameState(state: IGameState): void {
  console.log(`
        Cash: ${state.cash}, 
        Bike: ${state.bike}, 
        Level: ${state.level}, 
        Beaten[Vermont,Arizona,Tennessee,Hawaii,Alaska]=[${state.beatenLevelVermont},${state.beatenLevelArizona},${state.beatenLevelTennessee},${state.beatenLevelHawaii},${state.beatenLevelAlaska}]
    `);
}

export function decodePasscodeCharacter(pcode: string): number {
  let val = 0;

  if (pcode < "A") {
    val = pcode.charCodeAt(0) - "0".charCodeAt(0);
  } else {
    val = pcode.charCodeAt(0) - "A".charCodeAt(0) + 10;
  }

  return val;
}

export function encodePasscodeCharacter(val: number): string {
  let c = "";

  if (val < 10) {
    c = String.fromCharCode("0".charCodeAt(0) + val);
  } else {
    c = String.fromCharCode("A".charCodeAt(0) + val - 10);
  }

  return c;
}
