let stone=false;
let paper=false;
let scissors=false;
let cStone;
let cPaper;
let cScissors;
let x=0;
let y=0;

document.querySelector("#youValue").innerHTML=x;
document.querySelector("#compValue").innerHTML=y;
document.querySelector(".container").addEventListener("click",click)
 function click()
 {
    console.log("clicked container");
    var randomOption = Math.floor(Math.random() * 3) + 1;
    if (randomOption==1) {
        cStone=true;
        cPaper=false;
        cScissors=false;
    } else {
        if (randomOption==2) {
            cStone=false;
            cPaper=true;
            cScissors=false;  
        } else {
            cStone=false;
            cPaper=false;
            cScissors=true;
        }
        
    }
    console.log(cStone,cPaper,cScissors);
    compStatus();
    stoneWinner();
    paperWinner();
    scissorsWinner();
 }
document.querySelector("#stone").addEventListener("click",fstone)
function fstone(){
    stone=true;
    paper=false;
    scissors=false;
    console.log("stone was clicked",stone);
    youStatus();
}
document.querySelector("#paper").addEventListener("click",fpaper)
function fpaper(){
    stone=false;
    paper=true;
    scissors=false;
    console.log("paper was clicked",paper);
    youStatus();
}
document.querySelector("#scissors").addEventListener("click",fscissors)
function fscissors(){
    stone=false;
    paper=false;
    scissors=true;
    console.log("scissors was clicked",scissors);
    youStatus();
}
document.querySelector("#restart").addEventListener("click",restart)
function restart(){
    x=y=0;
    console.log("clicked restart");
    stone=paper=scissors=false;
    cStone=cPaper=cScissors=false;
    console.log(stone,paper,scissors);
    document.querySelector("#youValue").innerHTML=x;
    document.querySelector("#compValue").innerHTML=y;
    document.querySelector("#compStatus").innerHTML="";
    document.querySelector("#youStatus").innerHTML="";
    document.querySelector("#result").innerHTML="";
}

function compStatus(){
    if (cStone==true) {
        document.querySelector("#compStatus").innerHTML="Computer choose Stone";
    } else { if (cPaper==true) {
        document.querySelector("#compStatus").innerHTML="Computer choose Paper";
    } else {
        document.querySelector("#compStatus").innerHTML="Computer choose Scissors";
    }
        
    }
}
 async function  stoneWinner(){
    if (stone==true && cScissors==true) {
        document.querySelector("#result").innerHTML="You Won This Time";
        x=x+1;
        document.querySelector("#youValue").innerHTML=x;
        const result={
            value:1
        }  
       const response= await fetch("http://localhost:3000/playGame",{method:"POST",
            headers:{
                'Content-Type':'application/json'
             },
              body:JSON.stringify(result)
            })
              
    } else {
        if (stone==true && cPaper==true) {
        document.querySelector("#result").innerHTML="You Loose This Time";
        y=y+1;
        document.querySelector("#compValue").innerHTML=y;
        const result={
            value:0
        }
        const response= await fetch("http://localhost:3000/playGame",{method:"POST",
            headers:{
                'Content-Type':'application/json'
             },
              body:JSON.stringify(result)
            })
        } else {
            if (stone==true && cStone==true) {
                document.querySelector("#result").innerHTML="Draw";
            }
        }
        
    }
}
 async function paperWinner(){
    if (paper==true && cStone==true) {
        document.querySelector("#result").innerHTML="You Won This Time";
        x=x+1;
        document.querySelector("#youValue").innerHTML=x;
        const result={
            value:1
        }  
       const response= await fetch("http://localhost:3000/playGame",{method:"POST",
            headers:{
                'Content-Type':'application/json'
             },
              body:JSON.stringify(result)
            })
    } else {
        if (paper==true && cScissors==true) {
        document.querySelector("#result").innerHTML="You Loose This Time";
        y=y+1;
        document.querySelector("#compValue").innerHTML=y;
        const result={
            value:0
        }
        const response= await fetch("http://localhost:3000/playGame",{method:"POST",
            headers:{
                'Content-Type':'application/json'
             },
              body:JSON.stringify(result)
            })
        } else {
            if (paper==true && cPaper==true) {
                document.querySelector("#result").innerHTML="Draw";
            }
        }
        
    }
}
 async function scissorsWinner(){
    if (scissors==true && cPaper==true) {
        document.querySelector("#result").innerHTML="You Won This Time";
        x=x+1;
        document.querySelector("#youValue").innerHTML=x;
        const result={
            value:1
        }  
       const response= await fetch("http://localhost:3000/playGame",{method:"POST",
            headers:{
                'Content-Type':'application/json'
             },
              body:JSON.stringify(result)
            })
    } else {
        if (scissors==true && cStone==true) {
        document.querySelector("#result").innerHTML="You Loose This Time";
        y=y+1;
        document.querySelector("#compValue").innerHTML=y;
        const result={
            value:0
        }
        const response= await fetch("http://localhost:3000/playGame",{method:"POST",
            headers:{
                'Content-Type':'application/json'
             },
              body:JSON.stringify(result)
            })
        } else {
            if (scissors==true && cScissors==true) {
                document.querySelector("#result").innerHTML="Draw";
            }
        }
        
    }
}
function youStatus(){
    if (stone==true) {
        document.querySelector("#youStatus").innerHTML="You choose Stone";
    } else { if (paper==true) {
        document.querySelector("#youStatus").innerHTML="You choose Paper";
    } else {
        document.querySelector("#youStatus").innerHTML="You choose Scissors";
    }
        
    }
}

const Data=document.getElementById("Data")
Data.addEventListener('click',()=>{
    window.open("http://localhost:3000/displayData")
})









