import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Company from './pages/Company';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import RedirectsRoute from './route/RedirectsRoute';
import {Routes ,Route} from 'react-router-dom' ;
import  { useState } from 'react';

function App() {
  const [auth,setAuth] =  useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} /> 
        <Route path='/product' element={<Product />} /> 
        <Route path='/product/:id' element={<ProductDetail />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/user' element={<RedirectsRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
/* 
/product/:id 이 아이디 값을 가진 아이템을 보여준다. 
id 라우터의 변수(파라미터) 같은 개념 
*/
