const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        License: {
            type: String,
            required: true,
            unique: true // Ensures License is unique and cannot be duplicated
        },
        ComputerId: {
            type: String,
            required: true,
        },
        VrID: { // VrID
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        Country: {
            type: String,
            required: true,
        },
        DiscordId: {
            type: String,
        },
        UnityPackageName: { //   UnityPackageName
            type: String,
            required: true,
        },
        WebsiteSource: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);