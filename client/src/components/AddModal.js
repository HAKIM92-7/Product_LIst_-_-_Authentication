import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addProduct } from '../redux/actions/actions'

const AddModal = () => {


const dispatch = useDispatch()

const [newProduct , setNewProduct] = useState ({

name :"" ,
price :0 ,

brand:"" ,

description:""
})



const onChange = (e) => {

setNewProduct({...newProduct , [e.target.name] : e.target.value})


}


const onSubmit =(e) => {

e.preventDefault()

dispatch(addProduct(newProduct))

setNewProduct({

    name :"" ,
    price :0 ,
    brand:"" ,
    description:""



})}




    return (
        <div>
           
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add new product
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name="name" value={newProduct.name} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="number" name="price" value={newProduct.price} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Brand</label>
    <input type="text" name="brand" value={newProduct.brand} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <textarea type="text" name="description" value={newProduct.description} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp">
       
    </textarea>
    
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>









      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default AddModal
