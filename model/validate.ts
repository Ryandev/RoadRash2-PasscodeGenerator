import { IGameState } from "./GameState";

export interface IValidateResponse {
  isValid: boolean;
  info: string;
}

function validate(state: IGameState): IValidateResponse {
  const messages = [];

  if (state.cash > 327670) {
    messages.push("Cash value exceeds maximum. Will be capped at $327,670");
  }

  if (state.bike > 15) {
    messages.push("Invalid Bike, cannot exceed 15");
  }

  if (state.level > 6) {
    messages.push("Invalid level, cannot exceed 6");
  }

  if (
    state.beatenLevelAlaska &&
    state.beatenLevelArizona &&
    state.beatenLevelTennessee &&
    state.beatenLevelVermont &&
    state.beatenLevelHawaii
  ) {
    messages.push(
      "Cannot set all stages. It will not be accepted by game. Please untick 1 stage"
    );
  }

  return {
    isValid: messages.length == 0,
    info: messages.join(", "),
  };
}

export default validate;
