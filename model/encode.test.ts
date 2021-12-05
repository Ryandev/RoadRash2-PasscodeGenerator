import { encode } from "./encode";
import { IGameState } from "./GameState";
import { printGameState } from "./util";

function validateCode(
  passCode: string,
  isValid: boolean,
  state: IGameState
): boolean {
  const encoded = encode(state);

  const pass = passCode === encoded;

  if (!pass) {
    console.error(
      `FAILED[reencode] (original, actual) ${passCode} != ${encoded}`
    );
    printGameState(state);
  }

  return pass;
}

describe("encode 1", () => {
  it("matches", () => {
    const defaultState: IGameState = {
      cash: 0,
      bike: 0,
      level: 0,
      beatenLevelAlaska: false,
      beatenLevelArizona: false,
      beatenLevelHawaii: false,
      beatenLevelTennessee: false,
      beatenLevelVermont: false,
    };

    const passValidation =
      validateCode("00D8 110N", true, {
        ...defaultState,
        cash: 1000,
        bike: 0,
        level: 1,
      }) &&
      validateCode("8OD8 110N", true, {
        ...defaultState,
        cash: 195560,
        bike: 0,
        level: 1,
      }) &&
      validateCode("63AE 1J0L", true, {
        ...defaultState,
        cash: 126310,
        bike: 9,
        level: 1,
      }) &&
      validateCode("8546 1T0L", true, {
        ...defaultState,
        cash: 169310,
        bike: 14,
        level: 1,
      }) &&
      validateCode("26HG 1S06", true, {
        ...defaultState,
        cash: 50000,
        bike: 14,
        level: 1,
      }) &&
      validateCode("27HG 5UF2", true, {
        ...defaultState,
        cash: 50000,
        bike: 15,
        level: 5,
        beatenLevelArizona: true,
        beatenLevelTennessee: true,
        beatenLevelHawaii: true,
        beatenLevelAlaska: true,
      }) &&
      validateCode("08DA 3N0P", true, {
        ...defaultState,
        cash: 11250,
        bike: 11,
        level: 3,
      }) &&
      validateCode("27GG 1Q04", true, {
        ...defaultState,
        cash: 50000,
        bike: 13,
        level: 1,
      }) &&
      validateCode("25U5 5JFD", true, {
        ...defaultState,
        cash: 48500,
        bike: 9,
        level: 5,
        beatenLevelArizona: true,
        beatenLevelTennessee: true,
        beatenLevelHawaii: true,
        beatenLevelAlaska: true,
      }) &&
      validateCode("0000 0000", false, defaultState) &&
      validateCode("0000 0001", false, defaultState) &&
      true;

    expect(passValidation).toBe(true);
  });
});
