import {createSlice} from "@reduxjs/toolkit";

const initialState = {cats: []};

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name} = action.payload;
            const newCat = {id: new Date().getTime(), name};
            state.cats.push(newCat);
        }
    }
})

const {reducer: catsReducer, actions: {addCat}} = catSlice;

export default catsReducer;
export const actionsCat = {
    addCat
}
