const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection(config.database);

autoIncrement.initialize(connection);

// Course Schema
const CourseSchema = mongoose.Schema({

    courseName: {
        type: String,
        required: true
    },

    courseInstructor: {
        type: String,
        required: true
    },
    courseTime: {
        type: String,
        required: true
    },
    courseMajor: {
        type: String,
        required: true
    },
    courseSem: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    courseRating: {
        type: String,
        required: true
    },

    courseUsers: [{
        userCourseId:String,
        userName:String
    }],

    courseTextbooks: [{
        textbookTitle: String,
        textbookAuthor: String
    }],

    comments: [{
        user: String,
        date: Date,
        comment: String
    }]

});

CourseSchema.plugin(autoIncrement.plugin, 'Course');
const Course = module.exports = mongoose.model('Course', CourseSchema);

module.exports.getCourseById = function (id, callback) {
    Course.findById(id, callback);
}

module.exports.getCourseByMajorSemester = function (major, semester, callback) {

    Course.find({ $and: [{ courseMajor: major }, { courseSem: semester }] }, callback);

}

module.exports.addComment = function (course, callback) {
    course.comments[course.comments.length - 1].date = new Date();
    //console.log(course);
    Course.findByIdAndUpdate(
        course._id,
        { $push: { comments: course.comments[course.comments.length - 1] } },
        { new: true },
        function (err, model) {
            console.log(model);
        }
    );
}

module.exports.addUserToCourse = function (courseId, userId, userName, callback) {
   
    //console.log(userId);
    Course.findByIdAndUpdate(
        courseId,
        { $push: { courseUsers: {userCourseId :  userId , userName : userName}} },
        { new: true },
        function (err, model) {
            //console.log(model);
        }
    );
}