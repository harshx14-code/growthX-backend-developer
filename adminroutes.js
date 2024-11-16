const express = require('express');
const Admin = require('../models/adminModel');
const Assignment = require('../models/assignmentModel');
const router = express.Router();

// Register Admin
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const adminExists = await Admin.findOne({ username });
    if (adminExists) return res.status(400).json({ message: 'Admin already exists' });

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
});

// Admin Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
});

// View Assignments
router.get('/assignments', async (req, res) => {
    const { adminId } = req.query;
    const assignments = await Assignment.find({ admin: adminId });
    res.status(200).json(assignments);
});

// Accept Assignment
router.post('/assignments/:id/accept', async (req, res) => {
    const { id } = req.params;
    const assignment = await Assignment.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
    res.status(200).json({ message: 'Assignment accepted', assignment });
});

// Reject Assignment
router.post('/assignments/:id/reject', async (req, res) => {
    const { id } = req.params;
    const assignment = await Assignment.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
    res.status(200).json({ message: 'Assignment rejected', assignment });
});

module.exports = router;
