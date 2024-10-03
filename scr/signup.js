


var userName= document.getElementById("userName");
var submit=document.getElementById("submit");
var gender=document.getElementById("gender");
submit.addEventListener("click",sendUserData);





 async function sendUserData(){
    if(userName.value)
    {
    var User={
        "userName": userName.value,
        "gender": gender.value,
    }

console.log(User);
 var response=await fetch("http://localhost:3000/signUp/handleform",{method:"POST",
    headers:{
    'Content-Type':'application/json'
 },
  body:JSON.stringify(User)})

 displayData();
  async function displayData(){
    const data=await response.json()
     console.log(data.value);
     if(data.value==0){
         document.getElementById("error").innerHTML="User Name Already Exists"
         document.getElementById("success").innerHTML=""
     }
   
   if(data.value==1){
     document.getElementById("success").innerHTML="User Created successfully"
     document.getElementById("error").innerHTML=""
     const button=document.createElement("button")
     const loginBtn=document.getElementById("loginBtn")
     button.innerHTML="Login"
     loginBtn.appendChild(button);
     button.addEventListener("click",()=>{window.open("http://localhost:3000/login")})
   }
   else{
     console.log("Data not sent");
     
   }
  }

 }
 else{
    console.log("Please enter userName");
    document.getElementById("error").innerHTML="Please enter userName"
  }

}


