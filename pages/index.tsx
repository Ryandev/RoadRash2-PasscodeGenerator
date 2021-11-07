
import InfoButton from '../components/InfoButton';
import CenterCardView from '../components/CenterCardView';
import PasscodeGenerator from '../views/PasscodeGenerator';

function Index(): JSX.Element {
    return (
        <>
            <InfoButton 
                text="About" 
                href="https://github.com/Ryandev/RoadRash2-PasscodeGenerator" 
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    right: '10px',
                    zIndex: 1,
                }} />
            <CenterCardView maxWidth='580px'>
                <PasscodeGenerator />
            </CenterCardView>
        </>
    )
}

export default Index
