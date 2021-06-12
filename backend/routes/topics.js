const router = require('express').Router();
let Title = require('../models/topics.model');

router.route('/').get((req, res) => {
 Title.find()
    .then(topics => res.json(topics))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const user = req.body.user;

  const newTitle = new Title({title,desc,user});

  newTitle.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
  //console.log("xs" + req.params.id)
  Title.findById(req.params.id)
    .then(object =>res.json(object))
    .catch(err=>res.json(err))
})



module.exports = router;