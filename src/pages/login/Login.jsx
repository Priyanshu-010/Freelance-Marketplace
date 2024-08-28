import React, { useState } from 'react'
import './Login.scss'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", { username, password }, { withCredentials: true });
      // localStorage.setItem("currentUser", JSON.stringify(res.data));
      // navigate("/")     
      console.log(res.data);

    } catch (err) {
      setError(err);
      console.log(err);

      // setError(err.response.data);
    }
  };
  return (

    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Log In</button>

      </form>
    </div>
  )
}

export default Login