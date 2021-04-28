import React ,{useState , useEffect} from 'react';
import Modal from 'react-modal';
import {useDispatch , useSelector} from 'react-redux'
import { updateProduct } from '../redux/actions/actions';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


function UpdateModal ({modalIsOpen , setIsOpen , id}){
 
  const productToUpdate = useSelector(state => state.productToUpdate)


useEffect(() => {
  

  setNewValue({
   
    name : productToUpdate.name , 
    price : productToUpdate.price , 
    brand : productToUpdate.brand , 
    description : productToUpdate.description

  })




}, [productToUpdate])






  const dispatch = useDispatch()

   const [newValue , setNewValue] = useState ({

    name :"" ,
    price :"" ,
    brand:"" ,
    description:""


   })


const onChange = (e) => {


setNewValue({...newValue , [e.target.name] : e.target.value})


}


const onSubmit = (e) => {

e.preventDefault()

dispatch(updateProduct(id , newValue))

setNewValue({

name:"" ,
price:"" ,
brand:"" ,
description:""


})

closeModal()

}







  function openModal() {
    setIsOpen(true);
  }



  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        
        <Modal
          isOpen={modalIsOpen}
         
         onRequestClose={closeModal}
          style={customStyles}
          
        >

<h2 >Update Product</h2>

<form onSubmit={onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name="name" value={newValue.name} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Price</label>
    <input type="number" name="price" value={newValue.price} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Brand</label>
    <input type="text" name="brand" value={newValue.brand} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <textarea type="text" name="description" value={newValue.description} class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp">
       
    </textarea>
    
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>














          <button onClick={closeModal}>close</button>
         
        
        </Modal>
      </div>
    );
}


export default UpdateModal