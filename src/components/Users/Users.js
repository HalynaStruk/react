import {useState, useEffect} from 'react'
import {usersService} from '../../services/users.service';

export const Users = () => {
const [users, setUsers] = useState();
useEffect(() => {
    usersService.getAllUsers().then(value => setUsers(value))
}, [])
    return (
        <div>
            
        </div>
    );
};

export default Users;