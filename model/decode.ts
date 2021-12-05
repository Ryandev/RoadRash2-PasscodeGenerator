import { IGameState } from "./GameState";
import { decodePasscodeCharacter } from "./util";

export interface IDecodeResult {
  result: IGameState;
  error: string;
  isValid: boolean;
}

const PASSCODE_TOO_SHORT: IDecodeResult = {
    result: {
        level: 0,
        cash: 0,
        bike: 0,
        beatenLevelAlaska: false,
        beatenLevelHawaii: false,
        beatenLevelTennessee: false,
        beatenLevelArizona: false,
        beatenLevelVermont: false,
    },
    error: "Invalid passcode. too short",
    isValid: false,
};

const PASSCODE_TOO_LONG: IDecodeResult = {
    result: {
        level: 0,
        cash: 0,
        bike: 0,
        beatenLevelAlaska: false,
        beatenLevelHawaii: false,
        beatenLevelTennessee: false,
        beatenLevelArizona: false,
        beatenLevelVermont: false,
    },
    error: "Invalid passcode. too long",
    isValid: false,
};

export function decode(passcode: string): IDecodeResult {
    if (passcode.length < 9) {
        return PASSCODE_TOO_SHORT;
    } else if (passcode.length > 9) {
        return PASSCODE_TOO_LONG;
    }

    const decodedValues: Array<number> = [];

    passcode.split("").forEach((char) => {
        if (char !== " ") {
            decodedValues.push(decodePasscodeCharacter(char));
        }
    });

    const checksumActual =
    (decodedValues[0] +
      decodedValues[1] +
      decodedValues[2] +
      decodedValues[3] +
      decodedValues[4] +
      decodedValues[5]) ^
    decodedValues[6];
    const checksumExpected = decodedValues[7];

    const isValid =
    (checksumExpected & 0x1f) == (checksumActual & 0x1f) &&
    checksumExpected > 0; /* prevent 0000-0000 passcode showing valid */

    const level = decodedValues[4] & 0x7;

    const cash =
    (((decodedValues[0] << 11) &
      0xf000) /* lower 3 bits, Missing MSB each time? */ |
      ((decodedValues[1] << 7) & 0x0f00) /* lower 3 bits */ |
      ((decodedValues[2] << 3) & 0x00f0) /* lower 3 bits */ |
      ((decodedValues[3] >> 1) & 0x000f)) /* lower 3 bits */ *
    10;

    const bike = (decodedValues[5] >> 1) & 0xf;

    const beatenLevelAlaska = decodedValues[6] & 0x1 ? true : false;
    const beatenLevelHawaii = decodedValues[6] & 0x2 ? true : false;
    const beatenLevelTennessee = decodedValues[6] & 0x4 ? true : false;
    const beatenLevelArizona = decodedValues[6] & 0x8 ? true : false;
    const beatenLevelVermont = decodedValues[6] & 0x10 ? true : false;

    return {
        result: {
            level,
            cash,
            bike,
            beatenLevelAlaska,
            beatenLevelHawaii,
            beatenLevelTennessee,
            beatenLevelArizona,
            beatenLevelVermont,
        },
        error: isValid
            ? ""
            : `Invalid passcode. Checksum mismatch: expected,actual ${checksumExpected},${checksumActual}`,
        isValid,
    };
}
