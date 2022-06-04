import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: []};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            const {newDog} = {id: new Date().getTime(), name};
            state.dogs.push(newDog);
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex((dog) => dog.id === id);
            state.dogs.splice(index, 1);

        }
    }
})

const {reducer: dogsReducer, actions: {addDog, deleteDog}} = dogSlice;

export default dogsReducer;

export const actionsDog = {
    addDog,
    deleteDog
}