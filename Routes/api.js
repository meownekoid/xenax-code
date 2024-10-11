const express = require("express");
const router = express.Router();
const User = require("../Models/User");
router.use(express.json());

// Check if a License exists, if it matches the VrID, or create a new record
router.post('/users/check', async (req, res) => {
    try {
        const { License, VrID, ComputerId, Email, Country, DiscordId, UnityPackageName, WebsiteSource } = req.body;

        // Check if the License already exists
        let user = await User.findOne({ License }).exec();

        if (user) {
            // License exists, now check if it matches the provided VrID
            if (user.VrID === VrID) {
                // VrID matches, return success
                res.json({ message: 'License and VrID match', success: true });
            } else {
                // VrID does not match, return failure
                res.status(400).json({ message: 'License exists but VrID does not match', success: false });
            }
        } else {
            // License does not exist, create a new user entry
            user = new User({
                License,
                VrID, // Insert with the provided VrID
                ComputerId,
                Email,
                Country,
                DiscordId,
                UnityPackageName,
                WebsiteSource
            });
            await user.save();
            res.json({ message: 'License added successfully with new VrID', success: true });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error processing request', error: err.message });
    }
});

module.exports = router;