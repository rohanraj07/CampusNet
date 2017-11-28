const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection(config.database);

autoIncrement.initialize(connection);

// Course Schema
const ChatSchema = mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now }

});

ChatSchema.plugin(autoIncrement.plugin, 'Chat');
const Chat = module.exports = mongoose.model('Chat', ChatSchema);


