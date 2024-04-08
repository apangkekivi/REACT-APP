const { response } = require('express');
const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')


const test = (req, res) => {
    res.json('test is working')
}
// register end p[oint]
const resgisterUser = async(req, res) => {
    try{
        const {name, password, address} = req.body;
        // check if name was entered
        if(!address){
            return res.json({
                error:'address is required'
            })
        };
        // check if password was entered
        if(!password || password.length < 6){
            return res.json({
                error: 'password should not be less than six character'
            })
        };
        const exist = await User.findOne({name});
        if(exist){
            return res.json({
                error:'Username is already taken'
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name,
            password:hashedPassword,
            address
        })

        return res.json(user);
    }catch (error){
        console.log(error)
    }
}

// login endpoint
const loginUser = async (req, res) => {
    try {
        const {name, password} = req.body;
        // check if user exist
        const user = await User.findOne({name});
        if(!user) {
            return res.json({
                error: 'No username found!'
            })
        }
        // check if password match
        const match = await comparePassword(password, user.password)
        if (match) {
            res.json('password match')
        }
        
        if(!match){
            res.json({
                error:"password didn't match!"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    resgisterUser,
    loginUser
}