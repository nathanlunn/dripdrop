import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import axios from 'axios';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Store from './Store';
import Cart from './Cart';
import OwnerDashboard from './OwnerDashboard';
import ErrorPage from './ErrorPage';
import './styles/App.scss';

function App() {
  axios.defaults.withCredentials = true;

  const [state, setState] = useState({
    user: {},
    products: [],
  });

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
    .then(res => {
      if(res.data.loggedIn) {
        setState(prev => ({...prev, user: res.data.user}));
      }
    })
    .catch(err => {
      console.error(err.message);
    })
  }, []);

  return (
    <Router>
      <Nav state={state} setState={setState}/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login state={state} setState={setState}/>}/>
          <Route path="/register" element={<Register state={state} setState={setState}/>}/>
          <Route path="/store" element={<Store state={state} setState={setState} />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path="/owner" element={<OwnerDashboard  state={state}/>}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
