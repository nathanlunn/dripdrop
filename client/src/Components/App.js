import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Store from './Store';
import OwnerDashboard from './OwnerDashboard';
import ErrorPage from './ErrorPage';

function App() {
  const [state, setState] = useState({
    user: {},
    product: {},
    signingIn: false,
  });

  useEffect(() => {

  }, []);

  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/owner" element={<OwnerDashboard />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
