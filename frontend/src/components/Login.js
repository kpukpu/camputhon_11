import React, { useEffect, useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSuccess = (response) => {
    console.log("Google Login Success:", response);
    axios.post('http://localhost:8000/api/google-login/', {
      token: response.credential
    })
        .then(res => {
          console.log("Server Response:", res.data);
          setUser(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
          navigate('/my-page');
        })
        .catch(err => {
          console.error("Server Error:", err);
        });
  };

  const handleFailure = (error) => {
    console.log("Google Login Failed:", error);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem('user');
    console.log("Logged out successfully");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate('/my-page');
    }
  }, [navigate]);

  return (
      <div>
        {user ? (
            <div>
              <h2>Welcome, {user.email}</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <GoogleLogin
                onSuccess={handleSuccess}
                onFailure={handleFailure}
            />
        )}
      </div>
  );
}

export default Login;