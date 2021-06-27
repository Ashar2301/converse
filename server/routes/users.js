const router =require('express').Router();
let users = require('../models/users.model');
let comments = require('../models/comments.model');
let Title = require('../models/topics.model');

router.route('/').get((req,res)=>{
    const username = req.query.username;
    const password = req.query.password;
    console.log(req.query.username + "query")
  //  console.log(req.body.username + "body")
    users.find({username : username , password : password})
    .then((response) => res.json(response))
    .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/User').get((req,res)=>{
  const username = req.query.username;
  
  console.log(req.query.username + "query2")
//  console.log(req.body.username + "body")
  users.find({username : username })
  .then((response) => res.json(response))
  .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/Signup').post((req,res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    var newUser = new users({name,username,password})

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/UserComments').get((req,res)=>{
    
  console.log(req.body)
  //console.log(req.params)
  console.log(req.query)
  const username = req.query.username;
  //console.log("hellothere" + title + " " + id)
 // var newcomment = new comments({usrnmae , cmt});
  comments.find({username: username})
  .then((response) => res.json(response))
  .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/UserDiscussions').get((req, res) => {
  const username = req.query.username;
  Title.find({user: username})
     .then(topics => res.json(topics))
     .catch(err => res.status(400).json('Error: ' + err));
 });

module.exports = router;