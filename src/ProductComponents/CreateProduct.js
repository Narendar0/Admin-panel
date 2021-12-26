import React from 'react'
import {useFormik} from 'formik';

function CreateProduct() {

  const formik = useFormik({
    initialValues : {
      mobileBrand : '',
      model : '',
      price : ''
    },
    onSubmit :async values => {
       try {
         await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createProduct`,{
         method : "POST",
         body : JSON.stringify(values),
         headers : {
           "Content-type" : "application/json"
         }
       })
       alert('Data Saved Successfully')
       } catch (error) {
         console.log(error)
       }
    }
  })

    return (
        <div>
             <h3 className='header'>Create New Product</h3>
            <form className='productForm' onSubmit = {formik.handleSubmit}>
               
  <div class="form-group">
    <label>Mobile Brand</label>
    <input type="text" class="form-control" name="mobileBrand" placeholder="Enter Mobile Brand...."
    onChange = {formik.handleChange} value={formik.values.mobileBrand}/>
    
  </div>
  <div class="form-group">
    <label>Model</label>
    <input type="text" class="form-control" name="model"  placeholder="Enter Model...."
    onChange = {formik.handleChange} value={formik.values.model}/>
    
  </div>
  <div class="form-group">
    <label>Price</label>
    <input type="text" class="form-control" name="price" aria-describedby="emailHelp" placeholder="Enter Price...."
    onChange = {formik.handleChange} value={formik.values.price}/>
  </div>
   
  <button type="submit" class="btn btn-primary">Create New Product</button>
</form>
        </div>
    )
}

export default CreateProduct