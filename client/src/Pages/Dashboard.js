import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not authenticated. Please log in.");
        return;
      }

      const res = await axios.get("http://localhost:5000/api/projects", {
        headers: {
          Authorization: `${token}`,
        },
      });

      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err.response?.data || err.message);
      alert("Failed to fetch projects.");
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();

    if (!newProject.title || !newProject.description) {
      return alert("Please fill in all fields.");
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not authenticated. Please log in.");
      return;
    }

    console.log("Sending token for POST:", token); 

    try {
      const res = await axios.post(
        "http://localhost:5000/api/projects",
        newProject,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setProjects([...projects, res.data]);
      setNewProject({ title: "", description: "" }); 
    } catch (err) {
      console.error("Error adding project:", err.response?.data || err.message);
      alert("Failed to add project. See console for details.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-400 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Your Projects</h1>

      <motion.form
        onSubmit={handleAddProject}
        className="bg-white text-black rounded-xl p-6 mb-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold mb-4">Add New Project</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full mb-4 px-4 py-2 border rounded-md"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full mb-4 px-4 py-2 border rounded-md"
          rows="3"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition"
        >
          Add Project
        </button>
      </motion.form>

      {projects.length > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;