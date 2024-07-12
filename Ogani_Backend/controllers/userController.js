const { User } = require('../models/index');
const jwt = require('jsonwebtoken');
const secretKey = 'salman';

const registerUser = async(req,res)=>{
     const user = await User.create(req.body);
     res.send({
        message:"User registered Successsfully",
        user
     })
}

const userLogin = async(req,res)=>{
    const user = req.body;
    // console.log(user)
    const email = user.email
    // console.log(email)
     const data = await User.findOne({where:{email},
        attributes: { exclude: ['password'] }}
     )
    //  console.log(data)

    jwt.sign({user},secretKey,{expiresIn:'300s' },(err,token)=>{
        res.send({
            token,
            data
        })
    })
}

const userProfile = async(req,res)=>{
    jwt.verify(req.token, secretKey,(err,authData)=>{
        if(err){
            res.send({
                message:"Invalid Token!!!."
            })
        }else{
            res.send({
                message:"Profile Data Fetch",
                authData
            })
        }
    })
}

function verifyToken(req,res,next){
    const header = req.headers['authorization']
    // console.log(header);
    if(typeof header !== 'undefined'){
     const bearerHeader = header.split(" ");
     const token = bearerHeader[1];
    //  console.log(token);
     req.token = token;
     next();
     
    }else{
        res.send({
            result:"Invalid Token!"
        })
    }

}

module.exports ={
    registerUser,
    userLogin,
    userProfile,verifyToken
}