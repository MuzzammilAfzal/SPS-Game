const userName=document.getElementById("userName");
const submit=document.getElementById("submit");
submit.addEventListener('click',sendUserData)





async function sendUserData(){
    if(userName.value){
      const User= {
        "userName": userName.value
     }
     var response= await fetch("http://localhost:3000/login/handleform",{method:"POST",
        headers:{
        'Content-Type':'application/json'
     },
      body:JSON.stringify(User)})
      
      async function displayData(){
       const data=await response.json()
        console.log(data.value);
       
        User['value']=2;
      if(data.value==1){
        console.log("Data Sent")
        window.open("http://localhost:3000/playGame")
        const response=await fetch("http://localhost:3000/playGame",{method:"POST",
          headers:{
            'Content-Type':'application/json'
         },
          body:JSON.stringify(User)})
          
        
        
      }
      else{
        console.log("Data not sent");
        if(data.value==0){
            document.getElementById("error").innerHTML="UserName Does Not Exist..SignUp First"
        }
      }
    }
    displayData();
    } 
    else{
        console.log("Please Enter UserName");
        document.getElementById("error").innerHTML="Please enter userName" 
    }
}