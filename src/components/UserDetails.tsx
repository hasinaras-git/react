import { useEffect, useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { FC } from 'react'
import * as React from 'react';

interface IUser {
    first_name: string;
    last_name: string;
    id: string;
    email: string;
    avatar: string;
}

interface IUsers {
    users: IUser[];
}

const UserDetails: FC<IUsers> = (props: IUsers) => {
    const users = props.users;

    const { id } = useParams();

    const [ user, setUser ] = useState<IUser>({} as IUser);

    useEffect(() => {
        const user = users.filter((user) => {
            return user.id.toString() === id;
        });
        setUser(user[0]);
    }, [ id, users ]);

    return (
        <div className='container userDetails'>
            <Card 
                user={user}
                email={user.email || ''}
                imgPath={user.avatar || ''}
            />
        </div>
    );
}

export default UserDetails;