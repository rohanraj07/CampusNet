const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Course = require('../models/course');

// Search Courses
router.post('/search-course-by-major-sem', (req, res) => {
    
    const courseMajor = req.body.courseMajor;
    const courseSem = req.body.courseSem;
    
    Course.getCourseByMajorSemester(courseMajor, courseSem, (err, courses) => {
        
        if(err){
            throw err;
        }else{
            return res.json(courses);
        }
      });
  });

module.exports = router;
