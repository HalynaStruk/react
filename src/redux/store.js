import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerUsers} from "./user.reducer";
import {reducerPosts} from "./post.reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({userState: reducerUsers, postState: reducerPosts})

export let store = createStore(reducers, applyMiddleware(thunk));