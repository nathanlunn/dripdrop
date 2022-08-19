import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({setState}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = () => {
    axios.post('http://localhost:8080/api/users', {email, password})
    .then(res => {
      const user = res.data.rows[0];
      if (user) {
        setState(prev => ({...prev, user: user}));
        navigate('/store');
        return;
      }
      setErrorMessage('Login Credentials Are Incorrect');
    })
    .catch(err => {
      console.error(err.message);
    })
  };
  return(
    <div>
      {errorMessage && <h3>{errorMessage}</h3>}
      <h2>Login</h2>
      <input 
        value={email}
        placeholder="email"
        name="email"
        onChange={e => setEmail(e.target.value)}
        required
        type="text"
      />
      <input 
        value={password}
        placeholder="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
        required
        type="password"
      />
      <button onClick={login}>Login</button>
      <br></br>
      <h4>No Account? Sign Up</h4>
      <button onClick={() => navigate('/register')}>Sign Up</button>
    </div>
  )
}