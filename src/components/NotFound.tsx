import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='container notfoundContainer'>
            <h2>404 <br/> NOT FOUND</h2>
            <Link to="/user">Retour à la list des utilisateurs</Link>
        </div>
    );
}

export default NotFound;