async function displayData (){
var data;
async function getData(){
    const response= await fetch("http://localhost:3000/displayData/Data",{method:"GET"})
    data=await response.json()
    console.log(data);
}
 await getData()
document.getElementById("id").innerHTML=data._id
document.getElementById("UserName").innerHTML=data.userName
document.getElementById("Gender").innerHTML=data.gender
document.getElementById("Logins").innerHTML=data.LoginCount
document.getElementById("Wins").innerHTML=data.WonCount
document.getElementById("Loses").innerHTML=data.LoseCount
}
displayData()