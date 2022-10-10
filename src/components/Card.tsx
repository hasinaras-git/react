import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICardProps {
    user: any;
    email: string;
    imgPath: string;
}

const Card: FC<ICardProps> = (props: any) => {
    const { email, user, imgPath } = props as ICardProps;
    return (
        <div className='card' >
            <img src={imgPath} alt={user.first_name} />
            <Link to={`/user/details/${user.id}`}>{user.first_name} {user.last_name}</Link>
            <span><em>{email}</em></span>
        </div>
    );
}

export default Card;