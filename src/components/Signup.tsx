import React, { useState } from 'react';
import './Signup.css';
import cmplogo from '../components/assets/logo1.png';
import { register } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({ userEmail, firstName, lastName, password });
      setSuccess(true);
      setError(null);
      if(success){
        navigate('/login');
      }
    } catch (err) {
      setError(err as string);
      setSuccess(false);
    }
  };

  return (
    <div className='wrapper'>
      <div className='signup-container'>
      <div className='cmp-logo'>
      <img src={cmplogo} alt='Company Logo' />
        </div>
      <div className='signup-form'>
        <form onSubmit={handleSignup}>
          <h1>Sign Up</h1>

          <div className='signup-input'>
            <input
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className='signup-input'>
            <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className='signup-input'>
            <input
              type='email'
              placeholder='Email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className='signup-input'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>Sign up successful!</p>}

          <button type='submit'>Sign Up</button>

          <div className='signin-link'>
            Already have an account? <a href='/Login'>Sign in </a>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;
