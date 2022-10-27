import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../slices/cartItemSlice";
import gameReducer from '../slices/gameSlice'
import openGamePage from "../slices/openGamePageSlice";


const store=configureStore({
    reducer:{
        cartItem:cartItemReducer,
        game:gameReducer,
        openGamePage:openGamePage
    }
})


export default store