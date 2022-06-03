
const LOAD_USERS = 'LOAD_USERS';
const LOAD_POSTS = 'LOAD_POSTS';

const loadUsers = () => async (dispatch) => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    dispatch({type: LOAD_USERS, payload: users})
}

const loadPosts = () => async (dispatch) => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    dispatch({type: LOAD_POSTS, payload: posts})
}

export {loadUsers, loadPosts}