import Alive from '../../../public/Assets/Images/alivelogo.png';

export default function ApplicationLogo({className}) {
    return (
        <img src={Alive} alt="Alive Logo" className={className}/>
    );
}
