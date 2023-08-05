import './App.css';
import {Route, Routes} from 'react-router-dom'


import ClassComponent from './ClassComponent';
import Contact from './Contact';
import Navbar from './Navbar';
import ProductPage from './ProductPage';
import DescriptionProduct from './DescriptionProduct';

function App() {
  return (
      <div className="App">
        <Navbar/>
       <Routes>
         <Route path='/' element={<ClassComponent/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/ProductPage' element={<ProductPage/>}/>
         <Route path='/DescriptionProduct/:productID' element={<DescriptionProduct/>}/>

       </Routes>
      </div>
  );
}

export default App;
