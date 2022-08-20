import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register({setState}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const register = () => {
    axios.post('http://localhost:8080/api/users/register', {name, email, password})
    .then(res => {
      if (typeof(res.data) === 'string') {
        setErrorMessage(res.data);
        return;
      }
      const newUser = res.data.rows[0];
      setState(prev => ({...prev, user: newUser}));
      navigate('/store');
    })
    .catch(err => {
      console.error(err.message);
    })
  }

  return (
    <div>
      {errorMessage && <h4>{errorMessage}</h4>}
      <h2>Register</h2>
      <input
        placeholder="Name"
        name="name"
        value={name}
        type="text"
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="Email"
        name="email"
        value={email}
        type="text"
        onChange={e => {setEmail(e.target.value)}}
        required
      />
      <input
        placeholder="Password"
        name="password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        required
        onKeyPress={e => e.key === 'Enter' && register()}
      />
      <button onClick={register}>Sign Up</button>
      <h4>Already Have an Account?</h4>
      <button onClick={() => {navigate('/login')}}>Login</button>
    </div>
  );
}

export default Register;