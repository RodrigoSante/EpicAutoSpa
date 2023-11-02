
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import './IconsStyle.css';

export const EpicLogo = () => {
    return(
        <img 
            src={require('../images/logo_sin_fondo.png')}
            alt='Epic Auto Spa logo' />
    );
}

export const WasapLogo = () => {
    return(
        <BsWhatsapp className="wasap"/>
    );
}

export const InstaLogo = () => {
    return(
        <BsInstagram className="insta"/>
    );
}