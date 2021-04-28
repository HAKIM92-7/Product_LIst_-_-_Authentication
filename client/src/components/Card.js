import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteProduct, getProductsById } from '../redux/actions/actions'

const Card = ({product , setIsOpen , setId}) => {


const dispatch = useDispatch()

    return (
        <div>
            <div class="card" style={{width: "18rem" , marginTop:"30px" }}>
  <img src="https://micoedward.com/wp-content/uploads/2018/04/Love-your-product.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <h6 class="card-text">{product.price} TND</h6>

    <h6>{product.brand}</h6>
    <p>{product.description ? product.description : null}</p>


    <a href="#" class="btn btn-primary" onClick={()=> dispatch(deleteProduct(product._id))}>X</a>

    <button className="btn btn-warning" onClick={() => {
      
      setIsOpen(true) ; 
      setId (product._id)
      dispatch(getProductsById(product._id))
      
      }}    > EDIT  </button>
  </div>
</div>
        </div>
    )
}

export default Card
