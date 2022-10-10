import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

interface IRes {
    color: string;
    pantone_value: string;
    year: string;
    name: string;
}

interface IResDetailsProps {
    allRes: IRes[]
}

const RessourceDetails: FC<IResDetailsProps> = (props: IResDetailsProps) => {
    const { allRes } = props;
    const { resId } = useParams();
    const [ res, setRes ] = useState({} as IRes);
    const navigate = useNavigate();

    useEffect(() => {
        const singleRes = allRes.filter((item: any) => item.id.toString() === resId)
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