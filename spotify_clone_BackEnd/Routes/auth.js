import express, { Router } from "express"
import User from '../Models/User.js'
import bcrypt from "bcrypt"
import { getToken } from "../Utilities/helper.js"



const route=express.Router()


//Register route for user registration
route.post("/register",async (req,res)=>{
    const {email,password,firstName,lastName,username}=req.body

    let user = await User.findOne({email:email})

    if(user){
        return res.status(403).json({"error":"User with same email already exist"})
    }
    else{
        const hashedPassword=await bcrypt.hash(password,10)
        // console.log(hashedPassword)
        let newUserData={email,password:hashedPassword,firstName,lastName,username}
        const newUser= await User.create(newUserData)

        const token = await getToken(email,newUser)

        const userToSend = {...newUser.toJSON(),token}
        delete userToSend.password
        res.status(200).json(userToSend)
    }




})

//Login Route

//step1 take data from user
route.post("/login",async (req,res)=>{
    const {email,password}=req.body

    //step 2 check whether the email is registered or not
    let user = await User.findOne({email:email})

    if(!user){
        res.status(200).json({"error":"Invalid Credentials"})
    }
    
    //step 3 if the user email is valid check if the password is valid or not
    const isPasswordValid= await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        res.status(200).json({"error":"Invalid Credentials"})
    }

    //step 4 if the user is valid then return the token to the user
    const token = await getToken(email,user)
    const userDetailToSend = {...user.toJSON(),token}
    delete userDetailToSend.password
    res.status(200).json(userDetailToSend)

})


export default route