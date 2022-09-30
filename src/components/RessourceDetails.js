import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function RessourceDetails({ allRes }) {
    const { resId } = useParams();
    const [ res, setRes ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const singleRes = allRes.filter((item) => item.id.toString() === resId)
        setRes(singleRes[0]);
    }, [allRes, resId]);

    return (
        <>
            <div className="container">
                <i
                 className="fa-solid fa-arrow-left"
                 onClick={(e) => navigate('/ressources')}
                >                    
                </i>
                <span>Retour à la liste</span>
            </div>
            <div className='container resDetailsContainer'>
                <p 
                className='dynamicColor'
                style={{
                    backgroundColor: `${res.color}`,
                }}
                >
                    Nom: {res.name}</p>
                <p className='bg-black'>Valeur: {res.pantone_value}</p>
                <p className='bg-black'>Année: {res.year}</p>
            </div>
        </>
        );
}

export default RessourceDetails;