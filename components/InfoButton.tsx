
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@mui/material/Typography';

export interface IInfoButton {
    href: string;
    text: string;
    style: React.CSSProperties;
}

function InfoButton(props: IInfoButton): JSX.Element {
    return (
        <Button 
            style={props.style}
            variant="contained"
            color="primary"
            onClick={() => window.open(props.href)}
            >
                <Typography>{props.text}</Typography><LaunchIcon fontSize="small" />
        </Button>
    )    
}

export default InfoButton