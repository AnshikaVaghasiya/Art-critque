// CRUD logic for project model
const Project = require('../models/projectModel');
exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};
exports.createProject = async (req, res) => {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.json(savedProject);
};
exports.updateProject = async (req, res) => {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updated);
};
exports.deleteProject = async (req, res) => {
    await Project.findByIdAndUpdate(req.params.id);
    res.json({ message: "Deleted" });
};
