
import Dropdown from './Dropdown';
import bikes from '../model/bike';

export interface IBikeDropDown {
    value: number;
    onChange: (newValue: number) => void;
}

function BikeDropdown(props: IBikeDropDown): JSX.Element {
    return (
        <Dropdown 
            elements={bikes.all()} 
            selected={bikes.atIndex(props.value)} 
            name="Bike" 
            onSelect={bikeName => props.onChange(bikes.atValue(bikeName))} />
    );
}

export default BikeDropdown
