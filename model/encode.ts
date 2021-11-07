import { IGameState } from "./GameState";
import { encodePasscodeCharacter } from "./util";

export function encode(state: IGameState): string {
    const encodedValues: Array<number> = [];

    const cash = state.cash / 10;
    const second = (cash + (cash >> 4) + (cash >> 8) + (cash >> 12) + state.bike) & 0xF;

    const cashNibbleSplit0 = ( ( ( cash & 0xF000 ) >> 12 ) & 0xF );
    const cashNibbleSplit1 = ( ( ( cash & 0x0F00 ) >>  8 ) & 0xF );
    const cashNibbleSplit2 = ( ( ( cash & 0x00F0 ) >>  4 ) & 0xF );
    const cashNibbleSplit3 = ( ( ( cash & 0x000F ) >>  0 ) & 0xF );    

    /* each character onscreen is 5bits, so push the nibble up 1 bit & insert ? into LSB */
    encodedValues[0] = ( cashNibbleSplit0 << 1 );
    encodedValues[1] = ( cashNibbleSplit1 << 1 ) | ((second >> 0) & 0x1);
    encodedValues[2] = ( cashNibbleSplit2 << 1 ) | ((second >> 1) & 0x1);
    encodedValues[3] = ( cashNibbleSplit3 << 1 ) | ((second >> 2) & 0x1);
    encodedValues[4] = state.level;
    encodedValues[5] = (state.bike << 1) | ((second >> 3) & 0x1);
    encodedValues[6] = (
        (state.beatenLevelAlaska     ? 0x1  : 0x0) |
        (state.beatenLevelHawaii     ? 0x2  : 0x0) |
        (state.beatenLevelTennessee  ? 0x4  : 0x0) |
        (state.beatenLevelArizona    ? 0x8  : 0x0) |
        (state.beatenLevelVermont    ? 0x10 : 0x0) |
        0x0
    );
    encodedValues[7] = (
        ( encodedValues[0] + 
          encodedValues[1] + 
          encodedValues[2] + 
          encodedValues[3] + 
          encodedValues[4] +
          encodedValues[5] ) ^ encodedValues[6]
    ) & 0x1F;    

    const passcode = 
        encodedValues.slice(0,4).map(c=>encodePasscodeCharacter(c)).join('') + 
        ' ' + 
        encodedValues.slice(4).map(c=>encodePasscodeCharacter(c)).join('');

    return passcode;
}