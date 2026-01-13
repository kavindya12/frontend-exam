import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const success = login(email, password);

    if (success) {
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify({ email }));
      }
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <img
            className="left-image"
            src="https://img.freepik.com/premium-vector/online-shopping_203633-595.jpg?w=1060"
            alt="Login Illustration"
          />
        </div>

        <div className="login-right">
          <div className="user-icon">👤</div>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
            </div>

            {error && (
              <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>
                {error}
              </p>
            )}

            <button type="submit" className="login-btn">
              LOGIN
            </button>
          </form>

          <div className="signup-link">
            <p>
              Don't have an account?{' '}
              <a href="/signup">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
