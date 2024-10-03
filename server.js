

const express = require('express')
const bodyparser = require('body-parser')
const cors=require('cors')
const path=require("path")
const app = express()
const port = 3000
const mongoose = require('mongoose')
const { redirect, message } = require('statuses')


app.use(express.json());
app.use(express.static(path.join(__dirname,"../Stone Paper Scissors")))
app.use(express.static(path.join(__filename,"../scr")))
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.urlencoded({extended:false}))







app.get('/', (req, res) => {

})


app.get('/signUp', async (req, res) => {
 await res.sendFile((__dirname)+"/scr/signup.html")
 
 
})
app.post('/signUp/handleform', async(req, res) => {
     console.log("request came");
     var redirect={}
     const {userName,gender}=req.body;
     const checkUser= await userData.findOne({userName})
     if(checkUser){
      redirect={
        value:0
      }
      res.send(JSON.stringify(redirect))
     } 
     else{
     const User=req.body;
      console.log(req.body)
      User['LoginCount']=0;
      User['WonCount']=0;
      User['LoseCount']=0;
      
      console.log(User)
      const newUser=new userData(User);
     var newCreated= await newUser.save();
     if(newCreated){
       console.log("data stored in database")
        redirect={
        value:1
       }
       res.send(JSON.stringify(redirect))
      
      }
     else{
       console.log("error data not stored in database");
       
      }
     
     }        
})






app.get('/login',async (req, res) => {
  res.sendFile((__dirname)+"/scr/login.html")
})

app.post('/login/handleform', async(req, res) => {
  console.log("request came");
  const {userName}=req.body;
     const checkUser= await userData.findOne({userName})
     if(checkUser){
       const User=req.body;
      //  console.log(User);
       const redirect={
         value:1
       }
       LoginData.pop()
       res.send(JSON.stringify(redirect))
       
     
     }
     else{
     redirect.value=0  
     res.send(JSON.stringify(redirect));
     }
    
})


let LoginData=[]
 
app.post('/playGame',async (req, res) => {
  console.log((req.body).userName)
  
  // console.log(userLoginData.userName);
  // console.log(JSON.stringify(userLoginData.userName));
  const {userName}=req.body;
  if((req.body).value==2){
    LoginData.push({userName})
  }
 
  
  console.log(LoginData);
  
  
  if((req.body).value==2){
   const User= await userData.findOne({userName})
  User.LoginCount++
  User.save()
  }
  if((req.body).value==1){
    const User= await userData.findOne(LoginData[0])
    User.WonCount++
    User.save()
  }
  if((req.body).value==0){
    const User= await userData.findOne(LoginData[0])
    User.LoseCount++
    User.save()
  }


  
  
  
})

app.get('/playGame',async (req, res) => {
  res.sendFile((__dirname)+"/scr/playGame.html")
  console.log("inside playGAmezz")
 
  
})





app.get('/displayData', async (req, res) => {
  res.sendFile((__dirname)+"/scr/displayData.html")
 
})
app.get('/displayData/Data', async (req, res) => {
  const User= await userData.findOne(LoginData[0])
  res.send(User)
})








app.listen(port, () => {
  console.log(`server running on port ${port}`)
})




//database//

const userSchema=new mongoose.Schema({
  userName:String,
  gender:String,
  LoginCount:Number,
  WonCount:Number,
  LoseCount:Number,
})
const userData = new mongoose.model('User',userSchema);
mongoose.connect('mongodb+srv://muzzu2605afzall:9972228752.@clusterafzal.mzc6v.mongodb.net/')