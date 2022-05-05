
import './App.css';
import Header from './Component/Shared/Header/Header'
import Footer from './Component/Shared/Footer/Footer';

import Login from './Component/Shared/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      
       <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
