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
  });

  useEffect(() => {

  }, []);

  return (
    <Router>
      <Nav state={state} setState={setState}/>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login setState={setState}/>}/>
          <Route path="/register" element={<Register setState={setState}/>}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/owner" element={<OwnerDashboard  state={state}/>}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
