let playerx=localStorage.getItem('playerx')
let playery=localStorage.getItem('playery')
let score=document.getElementsByClassName('score');
let tindct=document.getElementById("tindct");
 let gamsestopped = document.querySelector(".gamestopped");
// gamsestopped.style.display = "none";
let playerxscore=localStorage.getItem('playerxscore')
let playeryscore=localStorage.getItem('playeryscore')

score[0].innerHTML=playerx+" - "+playerxscore;
score[1].innerHTML=playery+" - "+playeryscore;


let turn="playerx";
const setturn=(turn)=>{
     if(turn == "playerx"){
        tindct.innerText=`TURN - ${playerx} (X)`;
         
     }else{
        tindct.innerText=`TURN - ${playery} (O)`;
       
     }
}

setturn(turn);
const checkwin=()=>{
    
   let box1=document.getElementById('box1').innerText;
   console.log(box1)
   let box2=document.getElementById('box2').innerText;;
   let box3=document.getElementById('box3').innerText;;
   let box4=document.getElementById('box4').innerText;;
   let box5=document.getElementById('box5').innerText;;
   let box6=document.getElementById('box6').innerText;;
   let box7=document.getElementById('box7').innerText;;
   let box8=document.getElementById('box8').innerText;;
   let box9=document.getElementById('box9').innerText;;
   if((box1=="X" && box2=="X" && box3=="X") ||
   (box4=="X" && box5=="X" && box6=="X")||
   (box7=="X" && box8=="X" && box9=="X")||(box1=="X" && box4=="X" && box7=="X") ||(box2=="X" && box5=="X" && box8=="X")||
   (box3=="X" && box6=="X" && box9=="X")||
   (box1=="X" && box5=="X" && box9=="X")||
   (box3=="X" && box5=="X" && box7=="X"))
  {
    let xscore=parseInt(localStorage.getItem('playerxscore'))+1;
    localStorage.setItem('playerxscore', xscore);
    console.log(playerxscore);
     score[0].innerHTML=playerx+" - "+xscore;
     //let gamsestopped = document.querySelector(".gamestopped");
     console.log(gamsestopped)
     gamsestopped.style.display = "flex";
     gamsestopped.innerHTML=`
    
    <h2>${playerx} (X) wins</h2>
    <div>
       <button id="replay" onclick="window.location.href='./index2.html'">play Again</button>
       <button id="quit" onclick="window.location.href='./index.html'">Quit</button>
    </div>
    `
   }else if((box1=="O" && box2=="O" && box3=="O") ||
   (box4=="O" && box5=="O" && box6=="O")||
   (box7=="O" && box8=="O" && box9=="O")||(box1=="O" && box4=="O" && box7=="O") ||(box2=="O" && box5=="O" && box8=="O")||
   (box3=="O" && box6=="O" && box9=="O")||
   (box1=="O" && box5=="O" && box9=="O")||
   (box3=="O" && box5=="O" && box7=="O")){
    let yscore=parseInt(localStorage.getItem('playeryscore'))+1;
    localStorage.setItem('playeryscore', yscore);
    console.log(yscore);
    score[1].innerHTML=playery+" - "+yscore;
    gamsestopped.style.display = "flex";
     gamsestopped.innerHTML=`
    
    <h2>${playery} (X) wins</h2>
    <div>
       <button id="replay" onclick="window.location.href='/index2.html'">play Again</button>
       <button id="quit" onclick="window.location.href='/index2.html'">Quit</button>
    </div>
    `

    
   }else if((box1!="" && box2!="" && box3!="") &&
   (box4!="" && box5!="" && box6!="")&&
   (box7!="" && box8!="" && box9!="")){
    gamsestopped.style.display = "flex";
     gamsestopped.innerHTML=`
    
    <h2>Match Draw !!</h2>
    <div>
       <button id="replay" onclick="window.location.href='/index2.html'">play Again</button>
       <button id="quit" onclick="window.location.href='/index2.html'">Quit</button>
    </div>
    `
   }

};
const showxo =(boxid) =>{
  let box=document.getElementById(boxid);
  console.log(box.innerHTML);
  if(box.innerHTML==""){
    if(turn =='playerx'  ){
        box.innerHTML='X';
        turn="playery"
        setturn(turn)
      }else{
        box.innerHTML='O';
        turn="playerx"
        setturn(turn)
      }
    
  }
 
}
const btnpressed=async  (boxid) =>{
      showxo(boxid);
     checkwin();
}


// let box=document.querySelectorAll(".box");
// console.log(box);
// for(let i=0;i<box.length;i++){
//     box[i].addEventListener('click',function(){
//         console.log("btn has been pressen",box[i]);
//     });
// }

