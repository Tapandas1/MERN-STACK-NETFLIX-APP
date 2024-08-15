const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const app=express();
const authRoute=require("./routes/auth");
const userRoute=require("./routes/user")
const movieRoute=require("./routes/movie")
const listRoute=require("./routes/lists")

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connection Sucessfull"))
.catch((err)=>console.log(err))

app.use(express.json());
app.use(cors())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);


app.listen(8000,()=>{
    console.log("Backend server is running");
})