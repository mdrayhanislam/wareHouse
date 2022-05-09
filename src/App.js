
import './App.css';
import Header from './Component/Shared/Header/Header'
import Footer from './Component/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Register from './Component/Login/Register/Register';
import ProductUpdate from './Component/ProductUpdate/ProductUpdate';
import RequireAuth from './Component/Login/RequireAuth/RequireAuth';
import AddService from './Component/AddService/AddService';
import ManageItems from './Component/ManageItems/ManageItems';
import Blogs from './Component/Blogs/Blogs';



function App() {
  return (
    <div>
     <Header></Header>
     
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>

       {/* <Route path='/service/:serviceId' element={<ProductUpdate></ProductUpdate>}></Route> */}

       <Route path='/service/:serviceId' element={
         <RequireAuth>
           <ProductUpdate></ProductUpdate>
         </RequireAuth>
       }></Route>

       <Route path='/addservice' element={
         <RequireAuth>
           <AddService></AddService>
         </RequireAuth>
       }></Route>

       <Route path='/manageitems' element={
         <RequireAuth>
           <ManageItems></ManageItems>
         </RequireAuth>
       }></Route>

       <Route path="/*" element={<NotFound></NotFound>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
