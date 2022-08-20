import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register({setState}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = () => {
    axios.post('http://localhost8080/api/users/register', {name, email, password})
    .then(res => {
      const newUser = res.data.rows[0];
      setState(prev => ({...prev, user: newUser}));
      
    })
    .catch(err => {
      console.error(err.message);
    })
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        name="name"
        value={name}
        type="text"
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        name="email"
        value={email}
        type="text"
        onChange={e => {setEmail(e.target.value)}}
        required
      />
      <input
        name="password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        required
        onKeyPress={e => e.key === 'Enter' && register()}
      />
      <h4>Already Have an Account?</h4>
      <button onClick={() => {navigate('/login')}}>Login</button>
    </div>
  );
}

export default Register;