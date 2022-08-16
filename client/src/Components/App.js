import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Login from './Login';
import Register from './Register';
import Store from './Store';
import OwnerDashboard from './OwnerDashboard';

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
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />}/>
        </Routes>
        <Routes>
          <Route path="/store" element={<Store />}/>
        </Routes>
        <Routes>
          <Route path="/owner" element={<OwnerDashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
