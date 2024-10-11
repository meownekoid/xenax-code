const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    License: {
      type: String,
      require: true,
    },
    ComputerId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
