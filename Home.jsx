import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    const go = () => {
        navigate('/Client');
    };

    const textStyle = {
        color: 'black',
        fontSize: '19px',
        lineHeight: '1.5',
        textAlign: 'justify',
        justifyContent: 'center',
    };

    return (
        <>
            <div className="container mt-5 text-center">
                <b style={textStyle}>
                    Bienvenue sur <i><u>Frère Dates de Vol</u></i>, votre compagnie aérienne de confiance. 
                    Profitez de nos services pour des voyages confortables, sûrs et ponctuels. 
                    Explorez nos destinations et planifiez vos prochaines aventures en toute simplicité. 
                    Nous sommes ravis de vous accompagner dans vos déplacements. Bon voyage et merci de choisir 
                     <i><u>Frère Dates de Vol</u></i>.
                </b>
                <br />
                <button 
                    onClick={go} 
                    className="btn btn-primary mt-3" 
                    aria-label="Lancer votre Trip">
                    Lancer votre Trip
                </button>
            </div>
        </>
    );
}
