import {combineReducers, createStore} from "redux";
import {reducerUsers} from "./user.reducer";
import {reducerPosts} from "./post.reducer";

let reducers = combineReducers({userState: reducerUsers, postState: reducerPosts})

export let store = createStore(reducers);