var mongoose = require ('mongoose');

var userSchema = ({
    userid: {type: String},
    password: {type: String}
})

var UserSchema = mongoose.model('Userschema', userSchema);
module.exports = { UserSchema };
