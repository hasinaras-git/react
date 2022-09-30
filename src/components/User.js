import Card from './Card';

function User({ users }) {

    return (
        <div className="container user-display">
            {
                users.map((user) => {
                    return <Card 
                     user={user}
                     id={user.id}s
                     email={user.email}
                     imgPath={user.avatar}
                     key={user.id}
                    /> 
                })
            }
        </div>
    );
}

export default User;