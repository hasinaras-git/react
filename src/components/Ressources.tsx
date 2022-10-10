import { useState, FC } from 'react';
import Paper from './Paper';

interface IRessourceProps {
    data: any;
}

const Ressources: FC<IRessourceProps> = (props: IRessourceProps) => {
    const { data } = props;
    const [ optionValue, setOptionValue ] = useState('');
    const [ sorted, setSorted ] = useState(data);

    const handleChange = (e: any) => {
        if (e.target.value === 'name') {
            setSorted(data.slice().sort((a: any, b: any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
        }
        else if (e.target.value === "date") {
            setSorted(data.slice().sort((a: any, b: any) => b.year - a.year))
        } else {
            setSorted(data)
        }
        setOptionValue(e.target.value);
    }

    return (
        <div className='container ressources'>
            <div className='selectContainer'>
                <p>Filtrer par </p>
                <select
                    value={optionValue}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="date">Date</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className='resContainer'>
                {
                    sorted.map((ressource: any) => {
                        return (
                            <Paper
                                res={ressource}
                                key={ressource.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Ressources;