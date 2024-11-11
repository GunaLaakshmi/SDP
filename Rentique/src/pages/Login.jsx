import axios from 'axios'; // Import axios for API calls
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Redirect to dashboard if already authenticated (using token check)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post("http://127.0.0.1:8080/api/auth/authenticate", {
          email,
          password,
        });

        if (response.status === 200) {
          toast.success("Login successful!");
          const { token, role } = response.data;

          // Store the JWT token and role in local storage
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);

          // Redirect based on the user's role
          if (role === 'ROLE_ADMIN') {
            navigate('/admin');
          } else {
            navigate('/home'); // Redirect to the home page after successful login
          }

          // Reset form after successful login
          setEmail('');
          setPassword('');
        } else {
          toast.error("Invalid email or password.");
        }
      } catch (error) {
        console.error('Login failed:', error);
        toast.error("Login failed. Please check your credentials and try again.");
      }
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .login-page {
            background-image: url('https://img.freepik.com/premium-photo/white-feathered-head-with-feathers-it_1290686-30990.jpg?w=1060');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .login-container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            animation: fadeIn 1s ease-out forwards;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .btn {
            width: 100%;
            padding: 10px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .btn:hover {
            background-color: #555;
          }

          .text-danger {
            color: red;
            font-size: 0.875rem;
          }

          .text-center {
            text-align: center;
          }

          .text-decoration-underline {
            text-decoration: underline;
          }

          .text-info {
            color: #17a2b8;
          }
        `}
      </style>

      <div className="login-page">
        <div className="login-container">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <button className="btn" type="submit" disabled={!email || !password}>
              Login
            </button>
          </form>
          <div className="text-center my-3">
            <p>
              Don't have an account? <Link to="/register" className="text-decoration-underline text-info">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;

// Login.js
/*import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/admin'); // redirect if already logged in
    }
  }, [navigate]);

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;
    if (!email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("http://127.0.0.1:8080/api/auth/authenticate", { email, password });
        if (response.status === 200) {
          const { token, role } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          toast.success("Login successful!");
          navigate(role === 'ROLE_ADMIN' ? '/admin' : '/home');
          setEmail('');
          setPassword('');
        } else {
          toast.error("Invalid email or password.");
        }
      } catch (error) {
        toast.error("Login failed. Please check your credentials and try again.");
      }
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <button type="submit" className="btn" disabled={!email || !password}>Login</button>
          </form>
          <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;*/
