import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";

export const Users = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>

        </div>
    );
};

