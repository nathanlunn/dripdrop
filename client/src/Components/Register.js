import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './styles/Register.scss';

function Register({state, setState}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const errorAfterLoading = (errMes) => {
    setTimeout(() => {
      setLoading(false);
      setErrorMessage(errMes);
    },1000);
  }


  const register = () => {
    setLoading(true);
    setErrorMessage('');
    if(name.length < 2) {
      errorAfterLoading('Your Name Must Be Atleast Two Letters');
      return;
    }
    if(!email.includes('@') || email.substring(email.length - 4, email.length) !== '.com') {
      errorAfterLoading('invalid email address');
      return;
    }
    if(password.length < 6) {
      errorAfterLoading('your password must be atleast 6 characters long');
      return;
    }
    axios.post('http://localhost:8080/api/users/register', {name, email, password})
    .then(res => {
      if (typeof(res.data) === 'string') {
        errorAfterLoading(res.data);
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
    <div className="register">
      {loading && <div className='register__spinner'></div>}
      {errorMessage && <h4 className='register__error'>{errorMessage}</h4>}
      <h2 className='register__title'>Register</h2>
      <label  className='register__label' for='name'>Name:</label>
      <input
        className='register__input'
        placeholder="Name"
        name="name"
        value={name}
        type="text"
        onChange={e => setName(e.target.value)}
        required
      />
      <label  className='register__label' for='email'>Email:</label>
      <input
        className='register__input'
        placeholder="Email"
        name="email"
        value={email}
        type="text"
        onChange={e => {setEmail(e.target.value)}}
        required
      />
      <label  className='register__label' for='password'>Password:</label>
      <input
        className='register__input'
        placeholder="Password"
        name="password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        required
        onKeyPress={e => e.key === 'Enter' && register()}
      />
      <button className='register__button register__button--confirm' onClick={register}>Sign Up</button>
      <h4 className='register__alternative'>Already Have an Account?</h4>
      <button className='register__button register__button--login' onClick={() => {navigate('/login')}}>Login</button>
    </div>
  );
}

export default Register;