import React, { Component, useState } from 'react';
import "../css/PopUp.css"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { popUpOk } from '../redux/slices/cartItemSlice';


function PopUp({enabled,removePopUp,color}){
    const dispatch=useDispatch()
    // console.log(enabled);
    return(
    	<div>
        {enabled && (<div className='popup' style={color ? {backgroundColor:color}: null}>
            <h3>Proizvod se vec nalazi u korpi </h3>
            <button onClick={()=>{dispatch(popUpOk(false));removePopUp(false)}}>OK</button>
        </div>)}
        </div>
    )
}


export default PopUp