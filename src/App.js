
import './App.css';
import Header from './Component/Shared/Header/Header'
import Footer from './Component/Shared/Footer/Footer';

import Login from './Component/Shared/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home/Home';


function App() {
  return (
    <div>
     <Header></Header>
     
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
