import React from 'react'
import {useFormik} from 'formik';

function Createuser() {

 const formik = useFormik({
   initialValues : {
     firstname : '',
     lastname : '',
     email : ''
   },
   onSubmit :async values => {
      try {
        await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createUser`,{
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
             <h3 className='header'>Create User</h3>
            <form className='userForm' onSubmit = {formik.handleSubmit}>
               
  <div class="form-group">
    <label for="firstname">First Name</label>
    <input type="text" class="form-control" id="firstname" name='firstname' placeholder="Enter First Name...."
    onChange = {formik.handleChange} value={formik.values.firstname} />
    
  </div>
  <div class="form-group">
    <label for="lastname">Last Name</label>
    <input type="text" class="form-control" id="lastname" name='lastname' placeholder="Enter Last Name...."
    onChange = {formik.handleChange} value={formik.values.lastname} />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email...."
    onChange = {formik.handleChange} value={formik.values.email} />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
   
  <button type="submit" class="btn btn-primary">Create User</button>
</form>
        </div>
    )
}

export default Createuser