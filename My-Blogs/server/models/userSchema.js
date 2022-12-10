const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

// Creating a UserSchema
const UserSchema = new mongoose.Schema({
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true

        },
        cnfrmpasword:{
            type: String,
            required: true
        },
        tokens:[
            {
                token:{
                    type: String,
                    required: true        
                }
            }
        ]
})


// Generating a TOKEN
UserSchema.methods.generateAuthToken= async function(){
    try {
        let gen_token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:gen_token})
        await this.save();
        return gen_token;
    } catch (error) {
        console.log(error)
    }
} 

const User = mongoose.model('USER',UserSchema)

module.exports = User;