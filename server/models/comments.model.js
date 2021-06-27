const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentSchema = new schema({
    title : {type : String , required :true},
    username : {type : String , required :true},
    comment :{type : String , required :true}
})

const Comments = mongoose.model('Comments',commentSchema , 'Comments');



module.exports = Comments;