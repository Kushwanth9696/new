import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log form data to console
    console.log('username:', email);
    console.log('Password:', password);

    // Optionally, you can navigate to another page here

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{margin: '50px auto', maxWidth: '500px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '20px'}}>
          <label>Username</label>
          <input
            type="username"
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da'}}
            name="username"
            placeholder="Enter your Username"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div style={{marginBottom: '20px'}}>
          <label htmlFor="password">Password</label>

          <div style={{display: 'flex'}}>
            <input
              type={showPassword ? 'text' : 'password'}
              style={{flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da'}}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              style={{padding: '10px', marginLeft: '5px', borderRadius: '5px', border: '1px solid #ced4da', backgroundColor: 'transparent', cursor: 'pointer'}}
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        
        <div style={{ marginBottom: '20px' }}>
          <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: 'black', border: 'none', color: 'white', cursor: 'pointer' }} type="submit">
            Login
          </button>
        </div>

        <hr />

        <p style={{textAlign: 'center', margin: '0'}}>
          If you don't have an account <Link to="/register" style={{color: '#007bff', textDecoration: 'none'}}>Register Now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;