import React, { useState } from 'react';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlelogin = async() => {
    try{
      const res = await axios.post('http://localhost:5000/api/auth/login', {email, password});
      localStorage.setItem('token', res.data.token);
      alert('Login Successfully');
    } catch(err) {
      alert('Login failed');
      console.error(err.response?.data || err.message);
    } 
  };
  return(
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input value= {email} onChange={e => setEmail(e.target.value)} placeholder ="Email" className="input"/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="input"/>
      <button onClick={handlelogin} className="btn">Login</button>
    </div>
  );
}
export default Login;