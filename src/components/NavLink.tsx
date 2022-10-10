import { useState } from 'react';
import { FC } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';

const NavLink: FC = (props) => {
    const [ isActive, setIsActive ] = useState('user');

    const toggleClassName = (data: string) => (e: any) => {
        setIsActive(data)
    }

    return (
    <nav>
        <div className='container'>
            <ul>
                <li
                onClick={toggleClassName("user")}
                >
                    <Link
                    to="/user"
                    className={isActive === "user"? "active" : ""}
                    >
                        Liste des utilisateurs</Link>
                </li>
                <li
                onClick={toggleClassName('res')}
                >
                    <Link
                    to="/ressources"
                    className={isActive === "res"? "active" : ""}
                    >
                        List des ressources
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default NavLink;