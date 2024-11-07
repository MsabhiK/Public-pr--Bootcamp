const mongoose = require('mongoose');

const Author_db = new mongoose.Schema({
    name: { type: String, required: [true, "{PATH} is required"], minLength: [3, "{PATH} must be at least 3 characters long"] }   
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', Author_db);
