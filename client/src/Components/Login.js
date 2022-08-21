import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({state, setState}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

  }, [])

  const login = () => {
    axios.post('http://localhost:8080/api/users', {email, password})
    .then(res => {
      if (typeof(res.data) === 'string') {
        setErrorMessage(res.data);
        return;
      }
      const user = res.data.rows[0];
      if (user) {
        setState(prev => ({...prev, user: user}));
        if(user.owner || user.authorized) {
          navigate('/owner');
          return
        }
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
        onKeyPress={e => e.key === 'Enter' && login()}
      />
      <button onClick={login}>Login</button>
      <br></br>
      <h4>No Account? Sign Up</h4>
      <button onClick={() => navigate('/register')}>Sign Up</button>
    </div>
  )
}