import React from 'react';
import {useState, useEffect} from 'react';
import User from './User';

const Users = () => { // запускається компонента
    const [users, setUsers] = useState([]); // по замовчуванню
    // users буде наповнений пустим масивом

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[]) // useEffect приймає колбек і масив залежностей
    // useEffect виконається, після return
    // піля відпрацювання return, fetch дає запит на сервер
    // і задопомогою функції setUsers записує дані в users,
    // як тільки ми записали дани в users наша компонента
    // перезавантажується, useEffect відпрацьовує тільки один раз
    // в першому завантаженні цієї компоненти

    return (
        <div>
            {users.map(user => <User key = {user.id} user={user}/>)}
        </div> // оскільки при першому запуску users наповнений пустим масивом
        // тому мапати небуде що, в результаті ми матимемо пустий div
        // після відпрацювання useEffect наша компонента перезавантажується
        // в users вже є записані дані тоді return відпрацьовує другий раз
        // і оскільки в users є дані то ми їх мапаємо
    );
};

export default Users;