import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import User from "./Models/User.js"
import  authRoute  from "./Routes/auth.js"
import songRoute from "./Routes/song.js"
import playlistRoute from "./Routes/playlist.js"
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

//Depricated the findOne does not accept a callback


// passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//     User.findOne({ id: jwt_payload.sub }, (err, user) => {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     });
// }));

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
      console.log("JWT Payload:", jwt_payload); 
      const user = await User.findById(jwt_payload.identifier);
      if (user) {
          return done(null, user);
      } else {
          console.log("User not found"); 
          return done(null, false);
      }
  } catch (err) {
      console.error("Error in JWT strategy:", err);
      return done(err, false);
  }
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
app.use("/song",passport.authenticate("jwt",{session:false}),songRoute)
app.use("/playlist",passport.authenticate("jwt",{session:false}),playlistRoute)


app.listen(port,()=>{
    console.log(`server running on ${port}`)
})


