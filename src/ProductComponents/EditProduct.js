import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useFormik} from 'formik';

function EditProduct() {

  let params = useParams()
  const formik = useFormik({
    initialValues : {
      mobileBrand : '',
      model : '',
      price : ''
    },
    onSubmit :async values => {
      try {
        await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createProduct/${params.id}`,{
        method : "PUT",
        body : JSON.stringify(values),
        headers : {
          "Content-type" : "application/json"
        }
      })
      alert('Data Updated Successfully')
      } catch (error) {
        console.log(error)
      }
   }
 })
 useEffect(async () => {
   try {
     let userData = await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createProduct/${params.id}`)
     let user =await userData.json()
     formik.setValues(user)
   } catch (error) {
     console.log(error)
   }

 },[params.id])


    return (
      <div>
      <h3 className='header'>Edit Product</h3>
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

<button type="submit" class="btn btn-primary">Edit Product</button>
</form>
 </div>
    )
}

export default EditProduct