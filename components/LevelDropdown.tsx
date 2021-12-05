import Dropdown from "./Dropdown";
import levels from "../model/levels";

export interface ILevelDropDown {
  value: number;
  onChange: (newValue: number) => void;
}

function LevelDropdown(props: ILevelDropDown): JSX.Element {
  return (
    <Dropdown
      elements={levels.all()}
      selected={props.value}
      name="Level"
      onSelect={(level) => props.onChange(level)}
    />
  );
}

export default LevelDropdown;
