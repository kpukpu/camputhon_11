import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

function Login() {
  const [user, setUser] = useState(null);

  const handleSuccess = (response) => {
    console.log("Google Login Success:", response);
    axios.post('http://localhost:8000/api/google-login/', {
      token: response.credential
    })
    .then(res => {
      console.log("Server Response:", res.data);
      setUser(res.data);
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
    console.log("Logged out successfully");
  };

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

