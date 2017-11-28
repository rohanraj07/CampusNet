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

  router.post('/addcomment', (req, res) => {
    
    var course = req.body;

    
    Course.addComment(course, (err, course) => {
        
        if(err){
            throw err;
        }else{
            return res.json(courses);
        }
      });
  });

  // Search Courses by id
router.get('/getCourseById/:id', (req, res) => {
    
    const id = req.params.id;
    
    Course.getCourseById(id, (err, courses) => {
        
        if(err){
            throw err;
        }else{
            return res.json(courses);
        }
      });
  });

  router.get('/allcourses', (req, res) => {
    Course.find({}, (err, courses) => {
        
        if(err){
            throw err;
        }else{
            return res.json(courses);
        }
      });
  });

module.exports = router;
