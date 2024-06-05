import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import User from "./Models/User.js"
import  authRoute  from "./Routes/auth.js"
import songRoute from "./Routes/song.js"
import { Strategy as JwtStrategy,ExtractJwt } from "passport-jwt"
import passport from "passport"

dotenv.config()      

const app = express()
const port = 3000
app.use(express.json())

const opts={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"thisissecret",
}
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.sub }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
}));


mongoose.connect(`mongodb+srv://apurvjha302:${process.env.PASSWORD}@cluster0.0y6fn19.mongodb.net/`)
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("some error occured")
})

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/auth",authRoute)
app.use("/song",songRoute)


app.listen(port,()=>{
    console.log(`server running on ${port}`)
})


