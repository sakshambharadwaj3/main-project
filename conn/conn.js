const mongoose= require('mongoose');

// const db = "mongodb+srv://aman:atlaskicycle@cluster0.as0ic.mongodb.net/basicdata?retryWrites=true&w=majority" 
mongoose.connect("mongodb+srv://aman:atlaskicycle@cluster0.as0ic.mongodb.net/basicdata?retryWrites=true&w=majority",{
}).then(()=>{
   console.log('connection sucessful') 
}).catch((err)=>{
console.log("connection unsuccessful")
    console.log(err)
})

