import { useState } from 'react';
import Paper from './Paper';

function Ressources({ data }) {
    const [ optionValue, setOptionValue ] = useState('');
    const [ sorted, setSorted ] = useState(data);

    const handleChange = (e) => {
        if (e.target.value === 'name') {
            setSorted(data.slice().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
        }
        else if (e.target.value === "date") {
            setSorted(data.slice().sort((a, b) => b.year - a.year))
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
                    sorted.map((ressource) => {
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