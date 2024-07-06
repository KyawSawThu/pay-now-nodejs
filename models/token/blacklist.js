const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("blacklist", blacklistSchema);
