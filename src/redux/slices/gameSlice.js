import { createSlice } from "@reduxjs/toolkit";


//Used for search
const initialState={
    value:[]
}

export const gameSlice=createSlice({
    name:'items',
    initialState,
    reducers:{
        addGame:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addGame}=gameSlice.actions;

export default gameSlice.reducer