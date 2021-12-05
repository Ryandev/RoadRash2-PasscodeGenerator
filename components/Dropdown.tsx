import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export interface IDropdown<T extends string | number> {
  name: string;
  elements: Array<T>;
  selected: T;
  onSelect: (value: T) => void;
}

function Dropdown<T extends string | number>(props: IDropdown<T>): JSX.Element {
    const idLabel = `dropdown-inputlabel-${props.name}`;

    return (
        <>
            <InputLabel id={idLabel}>{props.name}</InputLabel>
            <Select
                labelId={idLabel}
                id={`${idLabel}-select`}
                value={props.selected}
                label={props.name}
                style={{ width: "100%" }}
                onChange={(e) => props.onSelect(e.target.value as any)}
            >
                {props.elements.map((val) => (
                    <MenuItem key={val} value={val}>
                        {val.toString()}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
}

export default Dropdown;
