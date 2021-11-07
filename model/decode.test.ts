
import { decode } from './decode'
import { printGameState } from './util';


function validateCode(passCode: string, isValid: boolean, cashExpected: number, bikeExpected: number, levelExpected: number): boolean {
    const result = decode(passCode);

    const validIsValid = result.isValid === isValid;
    const validBike = result.result.bike === bikeExpected;
    const validCash = result.result.cash === cashExpected;
    const validLevel = result.result.level === levelExpected;

    const pass = validIsValid && validBike && validCash && validLevel;

    if ( !pass ) {
        console.error("\n\nPASSCODE: %s\n",passCode);

        if ( !validIsValid ) {
            console.error("FAILED[mismatch]: isValid %d!=%d\n", result.isValid ? 1:0, isValid ? 1:0);
        }

        if ( !validBike ) {
            console.error("FAILED[mismatch]: bike (actual,expected) %d!=%d\n", result.result.bike, bikeExpected);
        }

        if ( !validCash ) {
            console.error("FAILED[mismatch]: cash (actual,expected) %d!=%d\n", result.result.cash, cashExpected);
        }

        if ( !validLevel ) {
            console.error("FAILED[mismatch]: level (actual,expected) %d!=%d\n", result.result.level, levelExpected);
        }

        printGameState(result.result);
    }

    return pass;
}

describe('decode 1', () => {
    it('matches', () => {
        const passValidation = (
            validateCode("00D8 110N", true, 1000, 0, 1) && //cash=1000, Bike=0 level=1
            validateCode("8OD8 110N", true, 195560, 0, 1) && //cash=195560, Bike=0 level=1
            validateCode("63AE 1J0L", true, 126310, 9, 1) && //cash=126310, Bike=9 level=1
            validateCode("8546 1T0L", true, 169310, 14, 1) && //cash=169,310, Bike=14 level=1
            validateCode("26HG 1S06", true, 50000, 14, 1) && // Bike=14, Cash=50000
            validateCode("27HG 5UF2", true, 50000, 15, 5) && // Bike=15, level=1
            validateCode("08DA 3N0P", true, 11250, 11, 3) && // Level=3 cash=4500, Bike=12
            validateCode("27GG 1Q04", true, 50000, 13, 1) && // Level=1, Cash=50000, Bike=13
            validateCode("25U5 5JFD", true, 48500, 9, 5) &&
            validateCode("EVVU 3U29", true, 327670, 15, 3) &&
    
            validateCode("0000 0000", false, 0, 0, 0) &&
            validateCode("0000 0001", false, 0, 0, 0) &&
    
            true
        );

        expect(passValidation).toBe(true);
    })
})
  