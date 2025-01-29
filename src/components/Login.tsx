import React, { useState } from 'react';
import './Login.css';
import cmplogo from '../components/assets/logo1.png';
import  {login}  from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ userEmail, password });
      setError(null);
      navigate('/dashboard');
    } catch (err) {
      setError(err as string);
    }
  };

  return (
    <div className='Login'>
      <div className='form-container'>
      <div className='cmp-logo'>
        <img src={cmplogo} alt='Company Logo' />
      </div>
      <div className='form-box login'>
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>

          <div className='input-box'>
            <input
              type='text'
              placeholder='Email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className='remember-forgot'>
            <label>
              <input type='checkbox' /> Remember me
            </label>
            <a href='#'>Forgot password</a>
          </div>

          <a href="/home"><button type='submit'> Sign In</button></a>

          <div className='registr-link'>
            <p>
              Don't have an account? <a href='/signup'>Signup</a>
            </p>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
