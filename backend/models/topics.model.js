const mongoose = require('mongoose');
const schema = mongoose.Schema;

const topicSchema = new schema({
    title : {type : String , required: true},
    desc : {type : String , required :true},
    user : {type : String , required :true}
})

const Topic = mongoose.model('topics' , topicSchema);

module.exports = Topic;