import React from 'react'
import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'


function Userlist() {
  const [users, setUsers] = useState([])
  useEffect(async () => {
    getUsers();
  }, [])
   
  async function getUsers(){
    try {
      let items = await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createUser`)
      let userData = await items.json()
      setUsers(userData)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = ( async (id) => {
    try {
      if(window.confirm('Are you sure want to delete')){
      await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createUser/${id}`,{
      method : "DELETE",
      headers : {
        "Content-type" : "application/json"
      }
    })}
    } catch (error) {
      console.log(error)
    }
    getUsers();
 })


    return (
       <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 id="head" class="h3 mb-0 text-gray-800">Userlist</h1>
    <Link to='/createuser' class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-plus fa-lg text-white-50"></i>Create User</Link>
    </div>
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col" colSpan="2">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
      users.map((user, index) => {
        return <tr key={index}>
        <th>{user.id}</th>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td><Link to={`/edituser/${user.id}`} class="btn btn-info">Edit User</Link></td>
        <td><button onClick={() => deleteUser(user.id)} class="btn btn-danger">Delete User</button></td>
      </tr>
      })
    }
  </tbody>
</table>
       </>
    )
}

export default Userlist