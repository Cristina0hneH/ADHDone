const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    password:{
        type: Text,
        required: true,
        select: false
    }
  
})

const User = model("User", userSchema)

module.exports = {
    User,
}
