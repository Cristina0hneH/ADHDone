const {User} = require("../models/users")

const login = async(req, res, next)=>{
    try{
        //const email = req.body.email;
        //const password = req.body.password;
    }
    catch (error) {
        res.status(400).send("invalid Email");
      }
}
