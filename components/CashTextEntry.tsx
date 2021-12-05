import TextField from "@mui/material/TextField";

export interface ICashTextEntry {
  value: number;
  onChange: (newValue: number) => void;
}

function CashTextEntry(props: ICashTextEntry): JSX.Element {
    return (
        <TextField
            style={{ width: "100%" }}
            type="number"
            id="standard-basic"
            prefix={"$"}
            value={props.value.toString()}
            variant="outlined"
            onChange={(e) => props.onChange(parseInt(e.target.value))}
        />
    );
}

export default CashTextEntry;
