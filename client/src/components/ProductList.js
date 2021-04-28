import React, { useEffect, useState } from 'react'
import Card from './Card'
import {useDispatch , useSelector} from 'react-redux'
import { getProducts , updateProduct } from '../redux/actions/actions'
import AddModal from './AddModal'
import UpdateModal from './Updatemodal'

const ProductList = () => {

useEffect(() => {
  
  dispatch(getProducts())



}, [])

const [modalIsOpen , setIsOpen] = useState(false)

const [id , setId] = useState(null)



const dispatch = useDispatch()

const products = useSelector(state => state.products)

    return (

<div>

<AddModal/>
<UpdateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id={id} />

        <div style={{display : "flex" , justifyContent:"space-around" ,flexWrap:"wrap" , marginBottom:"30px", marginTop:"100px"}}>

         



        { 
          products ?
        
        
        
        
        products.map((product,i) => 
        
        
        <Card product={product}  setIsOpen={setIsOpen}   setId={setId}/>
        
        
        
        
        ) : <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>





        }

            
        </div>
        </div>
    )
}

export default ProductList
