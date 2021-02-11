import React,{useState} from 'react'
import './Login.css' 
import {auth,provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import {actionTypes} from '../reducer'

function Login() {
const [state,dispatch ] = useStateValue();

    const signIn = (e) =>{
        //e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            });
            console.log(result);
        }).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="./curc.jpeg">
                </img> 
            </div>
           
            <button type = "submit" onClick={signIn} type="submit">
                Login
            </button>
          

        </div>
    )
}

export default Login
