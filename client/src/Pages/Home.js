// import { motion } from 'framer-motion';
// function Home() {
//     return (
//         <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}}>
//             <h1 className="text-4x1 font-bold">Welcome to My Portfolio</h1>
//         </motion.div>
//     );
// }
// export default Home;

// import React from 'react';
// import { motion } from 'framer-motion';
// import RegistrationForm from './RegistrationForm'; // adjust path if needed

// function Home() {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
//       <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      
//       {/* Registration form below */}
//       <RegistrationForm />
//     </motion.div>
//   );
// }

// export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/Register")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </div>
    </motion.div>
  );
}

export default Home;
