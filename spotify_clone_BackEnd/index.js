import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { Strategy as JwtStrategy,ExtractJwt } from "passport-jwt"

dotenv.config()

const app = express()
const port = 3000
const opts={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secret:"thisissecret",
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


app.listen(port,()=>{
    console.log(`server running on ${port}`)
})


