import React from 'react';
import { Link } from 'react-router-dom';

function Card({ user, email, imgPath }) {
    return (
        <div className='card' >
            <img src={imgPath} alt={user.first_name} />
            <Link to={`/user/details/${user.id}`}>{user.first_name} {user.last_name}</Link>
            <span><em>{email}</em></span>
        </div>
    );
}

export default Card;