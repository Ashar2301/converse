const mongoose =require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name :{type : String , required : true},
    username :{type : String , required : true},
    password :{type : String , required : true}
})

const Users = mongoose.model('Users',userSchema , 'Users');
module.exports = Users;