import {REGISTER_SUCCESS , REGISTER_FAIL , LOGIN_SUCCESS ,LOGIN_FAIL, LOGOUT ,LOAD_USER, LOAD_USER_FAIL} from './actionsTypes'
import axios from 'axios'




export const register = (newUser) => dispatch => {

axios.post('/user' , newUser ).then((res) => {

dispatch ({type : REGISTER_SUCCESS , payload : res.data})
})
.catch((err) => {

dispatch({type : REGISTER_FAIL})

console.log(err)

})
}


export const login = ({email , password}) => dispatch => {

axios.post('/login' , {email , password}).then((res) => {

dispatch({type : LOGIN_SUCCESS , payload : res.data})



})
.catch((err) => {

dispatch({type : LOGIN_FAIL})
console.log(err)


})}


export const logout = () => {

return {type : LOGOUT}


}


export const loadUser = () => (dispatch , getState) => {

axios.get('/login' , tokenConfig(getState)).then((res) => {


dispatch({type : LOAD_USER , payload : res.data})


})
.catch((err) => {
dispatch({type : LOAD_USER_FAIL})
console.log(err)}
)

}




const tokenConfig = (getState) => {

const token = getState().auth.token

const config = {

headers : {

    'Content-type' : 'application/json'
}}

if(token) {

config.headers['token'] = token ;

}

return config 

};




