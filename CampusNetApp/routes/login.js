var express = require('express');
var router = express.Router();
var mongojs = require ('mongojs');
var db = mongojs('mongodb://thesilverhawk:Hundertakers*513@ds117615.mlab.com:17615/mytasklist_silver');

//Save Task
/*router.post('/auth', function(req, res, next){

    var user = req.body;

    if(!user.userName || !(user.Password + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.userDetails.save(user, function(err, user){
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }
});*/

module.exports = router;