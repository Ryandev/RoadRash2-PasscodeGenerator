import { IGameState } from "./GameState";

function clamp(val: number, min: number, max: number) {
    return Math.min( Math.max(val, min), max );
}

function sanitize(stateIn: IGameState): IGameState {
    const stateOut = {...stateIn};

    stateOut.cash = clamp(stateOut.cash, 0, 327670);
    stateOut.bike = clamp(stateOut.bike, 0, 15);
    stateOut.level = clamp(stateOut.level, 1, 5);

    return stateOut;
}

export default sanitize