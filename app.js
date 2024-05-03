let gameSqn =[];
let userSqn = [];
let h2 = document.querySelector('h3');
let colors = ["red","yellow","blue","green"];

let started = false;
let level = 0;

document.addEventListener('keypress', function(e){
    if(started == false)
    {console.log("Game started")
     started = true;
     levelUp()
    }
    
})

function reset(){
    gameSqn = [];
    userSqn = [];
    started = false;
    h2.innerHTML = `Game over :( <br> Your score is ${level}. Press any key to continue`;
    level = 0;
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){document.querySelector('body').style.backgroundColor='white'},50)
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },150)
}

function levelUp(){
    level++;
    h2.innerHTML=`level ${level}`;
    let randNum = Math.floor(Math.random()*4);
    let randColor = colors[randNum];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gameSqn.push(randColor);
    console.log(gameSqn);
}

function checkAns(ind){
    console.log("current level:",level);
    // let ind = level-1;
if(gameSqn[ind]===userSqn[ind]){
    // console.log("Same sequence");
    if(userSqn.length==gameSqn.length){
        userSqn =[];
        setTimeout(levelUp,1000);
    }}
else{
    console.log("Game over");
    h2.innerHTML="Game over Press any key to restart";
    reset();
}
}

function btnPress(){
    let btn = this;
    // console.log(btn);
    btnFlash(btn);
    let color = btn.getAttribute('id')
    userSqn.push(color);
    // console.log(userSqn);
    checkAns(userSqn.length-1);
}

let gameBtns = document.querySelectorAll(".btn");
for(btn of gameBtns){
    btn.addEventListener("click",btnPress);
}


