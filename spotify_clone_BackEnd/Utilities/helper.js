import jwt from 'jsonwebtoken'

export async function getToken(email,user){
    const token = jwt.sign({identifier:user._id},"thisissecret")
    return token

}