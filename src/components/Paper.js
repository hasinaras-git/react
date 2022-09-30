import React from 'react';
import { useNavigate } from 'react-router-dom'

function Paper({ res }) {
    const navigate = useNavigate();

    return (
        <div 
          style={{
            borderLeft: `3px solid ${res.color}`,
          }}
          className='paper'
          onClick={(e) => navigate(`/ressources/details/${res.id}`)}
        >
            <p>{res.name} ({res.pantone_value})</p>
            <p
             style={{
                color: `${res.color}`
             }}
            >
              {res.year}
            </p>
        </div>
    );
}

export default Paper;