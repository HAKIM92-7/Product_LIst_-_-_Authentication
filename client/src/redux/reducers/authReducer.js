import {REGISTER_SUCCESS , LOGIN_SUCCESS , LOGOUT, LOAD_USER } from '../actions/actionsTypes'


const initialState = {

token : localStorage.getItem('token') ,
user : null ,
isAuth : false ,

}



const authReducer = (state = initialState , action) =>{


const {type , payload} = action

switch(type) {

case REGISTER_SUCCESS : 
case LOGIN_SUCCESS : 

localStorage.setItem('token' , payload.token)

return {...state , token : payload.token , user : payload.user , isAuth : true }

case LOGOUT : localStorage.removeItem('token')

return {...state , token : null , user : null , isAuth : false}

case LOAD_USER : return {...state , isAuth : true , user : payload}


                        

default : return state


}}

export default authReducer