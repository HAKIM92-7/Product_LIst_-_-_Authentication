import {GET_PRODUCTS , GET_PRODUCT_BY_ID} from './actions/actionsTypes'


const initialstate ={

products :[] ,

productToUpdate : {}


}


const reducer = (state = initialstate , action) => {

switch(action.type) {

case GET_PRODUCTS : return {...state , products : action.payload}

case GET_PRODUCT_BY_ID : return {...state , productToUpdate : action.payload}


default : return state


}}


export default reducer