import "./sb-admin-2.css";
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Userlist from "./UserComponents/Userlist";
import Createuser from "./UserComponents/Createuser";
import Edituser from "./UserComponents/Edituser";
import Product from "./ProductComponents/Product";
import CreateProduct from "./ProductComponents/CreateProduct";
import EditProduct from "./ProductComponents/EditProduct";

function App() {
  return (
    <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
        <Navbar/>
        <div class="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/users" element={<Userlist/>}></Route>
            <Route path="/products" element={<Product/>}></Route>
            <Route path="/createuser" element={<Createuser/>}></Route>
            <Route path="/edituser/:id" element={<Edituser/>}></Route> 
            <Route path="/createproduct" element={<CreateProduct/>}></Route>
            <Route path="/editproduct/:id" element={<EditProduct/>}></Route>
          </Routes>
        </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
      </>
  );
}

export default App;