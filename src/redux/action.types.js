
const LOAD_USERS = 'LOAD_USERS';
const LOAD_POSTS = 'LOAD_POSTS';

const loadUsers = (payload, dispatch) => {
    dispatch({type: LOAD_USERS, payload});
}

const loadPosts = (payload, dispatch) => {
    dispatch({type: LOAD_POSTS, payload})
}

export {loadUsers, loadPosts}