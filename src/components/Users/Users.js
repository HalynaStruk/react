import {useState, useEffect} from 'react';

import {usersService} from '../../services/users.service';
import {User} from '../User/User';

export const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

