import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useFormik} from 'formik';

function Edituser() {
  let params = useParams()
  const formik = useFormik({
    initialValues : {
      firstname : '',
      lastname : '',
      email : ''
    },
    onSubmit :async values => {
       try {
         await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createUser/${params.id}`,{
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
      let userData = await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createUser/${params.id}`)
      let user =await userData.json()
      formik.setValues(user)
    } catch (error) {
      console.log(error)
    }

  },[])

    return (
        <div>
            <h3 className='header'>Edit User</h3>
            <form className='userForm' onSubmit = {formik.handleSubmit}>
               
  <div class="form-group">
    <label for="firstname">First Name</label>
    <input type="text" class="form-control" id="firstname" placeholder="Enter First Name...."
    onChange = {formik.handleChange} value={formik.values.firstname} />
    
  </div>
  <div class="form-group">
    <label for="lastname">Last Name</label>
    <input type="text" class="form-control" id="lastname"  placeholder="Enter Last Name...."
     onChange = {formik.handleChange} value={formik.values.lastname}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email...."
    onChange = {formik.handleChange} value={formik.values.email}/>
  </div>
   
  <button type="submit" class="btn btn-info">Confirm Edit User</button>
</form>
        </div>
    )
}

export default Edituser