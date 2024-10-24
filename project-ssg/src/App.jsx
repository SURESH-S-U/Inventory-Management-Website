import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Login from './Login';
import RetDashBoard from './RetDashBoard'

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li><Link to = '/Login'>Login Page</Link></li>
      <li><Link to = '/RetDashBoard'>Retailer Dash Board</Link></li>
    </ul>
        <Routes>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/RetDashBoard' element = {<RetDashBoard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
