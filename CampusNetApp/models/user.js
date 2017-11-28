const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection(config.database);
const Course = require('../models/course');

autoIncrement.initialize(connection);

// User Schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: false
    },
    major: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    prevcourses: [{
        type: String,
        required: true
    }],
    currentcourses: [{
        type: String,
        required: true
    }]
});

UserSchema.plugin(autoIncrement.plugin, 'User');
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.getLastestId = function (callback) {
    User.findOne({}, {}, { sort: { 'created_at': -1 } }, function (err, post) {
        console.log(post._id);
        callback(post._id);
    });
}

module.exports.addUser = function (newUser, callback) {

    let allCourses = newUser.prevcourses.concat(newUser.currentcourses);
    let userId = 0;

    User.findOne({}, {}, { sort: { '_id': -1 } }, function (err, post) {
        //console.log(post._id);

        if(post != null){
            for (var i = 0; i < allCourses.length; i++) {
                
                        //console.log(newUser);
                        Course.addUserToCourse(allCourses[i], post._id +1 , newUser.firstName + ' ' + newUser.lastName, (err, course) => {
                
                            if (err) {
                                throw err;
                            } else {
                                console.log('courses added');
                            }
                        });
                
                    }
        }else{
            for (var i = 0; i < allCourses.length; i++) {
                
                        //console.log(newUser);
                        Course.addUserToCourse(allCourses[i], 1 , newUser.firstName + ' ' + newUser.lastName, (err, course) => {
                
                            if (err) {
                                throw err;
                            } else {
                                console.log('courses added');
                            }
                        });
                
                    }
        }
        
    });

    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}