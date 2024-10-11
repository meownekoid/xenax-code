const express = require("express");
const router = express.Router();
const User = require("../Models/User");
router.use(express.json());

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User  added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding user' });
  }
});

router.post('/users/check', async (req, res) => {
  try {
    const { License, ComputerId } = req.body;
    const user = await User.findOne({ License, ComputerId }).exec();
    if (user) {
      res.json({ message: 'User  found' });
    } else {
      res.json({ message: 'User  not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error checking user' });
  }
});

module.exports = router;