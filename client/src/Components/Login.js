import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Login.scss';

export default function Login({state, setState}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const errorAfterLoading = (errMes) => {
    setTimeout(() => {
      setLoading(false);
      setErrorMessage(errMes);
    },1000);
  }

  const login = () => {
    setLoading(true);
    setErrorMessage('')
    axios.post('http://localhost:8080/api/users', {email, password})
    .then(res => {
      if (typeof(res.data) === 'string') {
        errorAfterLoading(res.data);
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
      errorAfterLoading('login credentials are incorrect');
    })
    .catch(err => {
      console.error(err.message);
    })
  };

  return(
    <div className="login">
      {loading && <div className='login__spinner'></div>}
      {errorMessage && <h3 className='login__error'>{errorMessage}</h3>}
      <h2 className="login__title">Login</h2>
      <label className='login__label' for='email'>Email:</label>
      <input 
        className="login__input"
        value={email}
        placeholder="email"
        name="email"
        onChange={e => setEmail(e.target.value)}
        required
        type="text"
      />
      <label className='login__label' for='password'>Password:</label>
      <input
        className="login__input"
        value={password}
        placeholder="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
        required
        type="password"
        onKeyPress={e => e.key === 'Enter' && login()}
      />
      <button className='login__button login__button--confirm' onClick={login}>Login</button>
      <br></br>
      <h4 className='login__alternative'>No Account? Sign Up</h4>
      <button className='login__button login__button--register' onClick={() => navigate('/register')}>Sign Up</button>
    </div>
  )
}