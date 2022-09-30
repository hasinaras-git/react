import { useEffect, useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';

function UserDetails({ users }) {
    const { id } = useParams();

    const [ user, setUser ] = useState({});

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
                email={user.email}
                imgPath={user.avatar}
            />
        </div>
    );
}

export default UserDetails;