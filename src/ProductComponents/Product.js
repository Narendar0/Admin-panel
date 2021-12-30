import React from 'react'
import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'

function Product() {

  const [products, setProducts] = useState([])
  useEffect(async () => {
    getProduct();
  }, [])
   
  async function getProduct(){
    try {
      let items = await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createProduct`)
      let userData = await items.json()
      setProducts(userData)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = ( async (id) => {
    try {
      if(window.confirm('Are you sure want to delete')){
      await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/createProduct/${id}`,{
      method : "DELETE",
      headers : {
        "Content-type" : "application/json"
      }
    })}
    } catch (error) {
      console.log(error)
    }
    getProduct();
 })


    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 id="head" class="h3 mb-0 text-gray-800">Products</h1>
        <Link to='/createproduct' class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-plus fa-lg text-white-50"></i>Create Product</Link>
        </div>
        
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Mobile Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Price</th>
      <th scope="col" colSpan="2">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
      products.map((product, index) => {
       return  <tr key={index}>
        <th>{product.id}</th>
        <td>{product.mobileBrand}</td>
        <td>{product.model}</td>
        <td>{product.price}</td>
        <td><Link to={`/editproduct/${product.id}`} class="btn btn-info">Edit Product</Link></td>
        <td><button onClick={() => deleteProduct(product.id)} class="btn btn-danger">Delete User</button></td>
      </tr>
      })
    }
  </tbody>
</table>
           </>
    )
}

export default Product