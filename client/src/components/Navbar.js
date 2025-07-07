// import { Link } from 'react-router-dom';
// function Navbar() {
//     return (
//         <nav className="bg-gray-800 text-white p-4 flex justify-between">
//             <Link to="/"
//             className="font-bold">Portfolio</Link>
//             <div>
//                 <Link to="/"
//                 className="mx-2">Home</Link>
//                 <Link to="/projects"
//                 className="mx-2">Projects</Link>
//                 <Link to="/contact"
//                 className="mx-2">Contact</Link>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;
import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <ul className="flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;