import {createStore} from "redux";
import {reducer} from "./user.reducer";

let store = createStore(reducer);