import Card from './Card';
import React from 'react';

interface IUser {
    users: any;
}

interface IUser {
    first_name?: string;
    email?: string;
    id?: string;
    last_name?: string;
    avatar?: string;
}

const User: React.FC<IUser> = (props: IUser) => {
    const users = props.users as IUser[];

    return (
        <div className="container user-display">
            {
                users.map((user: IUser) => {
                    return <Card 
                     user={user}
                     email={user.email || ''}
                     imgPath={user.avatar || ''}
                     key={user.id}
                    /> 
                })
            }
        </div>
    );
}

export default User;