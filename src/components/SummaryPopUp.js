import React, { Component } from 'react';
import { signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../config/firebase';



function SummaryPopUp({user,setToggle}){
    const signInWithGoogle = async () => {
		const result = await signInWithRedirect(auth, provider);
	};
   
    return(
        <div>
        <div className='popup' >
            {user ? <>
            <h3>Successful purchase</h3>
            <button onClick={()=>setToggle(false)}>OK</button>
            </> : <>
                <h3>You must be logged in to order</h3>
                <button onClick={signInWithGoogle}>Login</button>
            </>}
            
        </div>
        </div>
    )
}

export default SummaryPopUp