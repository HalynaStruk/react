
const LOAD_USERS = 'LOAD_USERS';
const LOAD_POSTS = 'LOAD_POSTS';

const loadUsers = (payload) => {
    return {type: LOAD_USERS, payload}
}

const loadPosts = (payload) => {
    return {type: LOAD_POSTS, payload}
}

export {loadUsers, loadPosts}