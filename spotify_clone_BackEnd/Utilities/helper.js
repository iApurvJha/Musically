import jwt from 'jsonwebtoken'

export async function getToken(email,user){
    // console.log("Hello")
    const token = jwt.sign({identifier:user._id},"thisissecret")
    return token

}