// import React, { useState } from "react";
// import axios from 'axios';
//  function Register() {
//   const[name, setName] = useState('');
//   const[email, setEmail] = useState('');
//   const[password, setPassword] = useState('');
//   const handleRegister = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         password
//       });
//       localStorage.setItem("token", res.data);
//       alert("Registration successfull");
//     } catch (err) {
//       console.error("Register error:", err.response?.data || err.message);
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <input value={name} onChange={e => setName(e.target.value)} placeholder="name"
//          className="input" />
//       <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email"
//          className="input" />
//       <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"
//          className="input" /> 
//       <button onClick={handleRegister} className="btn">Register</button>  
//     </div>
//   );
// }
// export default Register;
import React, { useState } from "react";
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      });
      console.log("Registration response:", res.data);
      localStorage.setItem("token", res.data.token); 
      alert("Registration successful");
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      alert("Registration failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className="input border p-2 mb-2 w-full"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="input border p-2 mb-2 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        className="input border p-2 mb-2 w-full"
      />
      <button onClick={handleRegister} className="btn bg-blue-500 text-white p-2 w-full">Register</button>
    </div>
  );
}

export default Register;
