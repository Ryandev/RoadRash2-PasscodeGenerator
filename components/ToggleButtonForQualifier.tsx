
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import CrossIcon from '@mui/icons-material/Clear';

export enum IQualifierLevel {
    Alaska = 1,
    Arizona = 2,
    Tennessee = 3,
    Vermont = 4,
    Hawaii = 5,
}

export interface IQualifierCheckboxes {
    values: Array<IQualifierLevel>;
    onChange: (values: Array<IQualifierLevel>) => void;
}

const QualifierNames: Record<IQualifierLevel, string> = {
    [IQualifierLevel.Alaska]: "Alaska",
    [IQualifierLevel.Arizona]: "Arizona",
    [IQualifierLevel.Tennessee]: "Tennessee",
    [IQualifierLevel.Vermont]: "Vermont",
    [IQualifierLevel.Hawaii]: "Hawaii",
};

export function ToggleButtonForQualifier(props: {qualifier: IQualifierLevel, selected: boolean, onChange?: (value: boolean) => void}): JSX.Element {
    return (
        <ToggleButton
            size={"small"}
            onChange={_ => props.onChange?.(!props.selected)}
            value={props.qualifier}
            sx={{width:'100%', textOverflow: 'clip', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: 'left'}}
            selected={props.selected}>
            <span>{QualifierNames[props.qualifier]}</span>
            {
                props.selected ? <CheckIcon /> : <CrossIcon />
            }
        </ToggleButton>
    );
} 

export default ToggleButtonForQualifier
