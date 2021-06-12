const router = require('express').Router();
let comments = require('../models/comments.model');




router.route('/addComment').post((req,res)=>{
    const title = req.body.title;
    const username = req.body.username;
    const comment = req.body.comment;
    console.log(title  + username + comment);
    var newcomment = new comments({title , username ,comment});
    newcomment.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/getComments').get((req,res)=>{
    
    console.log(req.body)
    //console.log(req.params)
    console.log(req.query)
    const title = req.query.title;
    //console.log("hellothere" + title + " " + id)
   // var newcomment = new comments({usrnmae , cmt});
    comments.find({title : title})
    .then((response) => res.json(response))
    .catch(err => res.status(400).json('Error: ' + err));
})



module.exports = router;