const express = require('express');
const auth = require('../middleware/auth');
const Project = require('../models/Project');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});
router.post('/', auth, async (req, res) => {
    const { title, description, link } = req.body;
    const newProj = new Project({ title, description, link, user: req.user });
    const saved = await newProj.save();
    res.json(saved);
});
router.put('/:id', auth, async (req, res) => {
    const { title, description, link } = req.body;
    const proj = await Project.findOneAndUpdate(
        { _id: req.params.id, user: req.user },
        { title, description, link },
        { new: true}
    );
    res.json(proj);
});
router.delete('/:id', auth, async (req,res) => {
    await Project.findOneAndDelete({ _id: req.params.id, user: req.user });
    res.json({ msg: 'Deleted '});
});
module.exports = router;