localStorage.clear();
let playerx=document.getElementById('playerx');
let playery=document.getElementById('playery');
let startbtn=document.getElementById('start-btn');


const startgame=()=>{
     if(playerx.value==""  || playerx.value=="" ){
            
         alert("enter player name");
     }

}


startbtn.addEventListener('click',()=>{
    if(playerx.value== ""  || playery.value== "" ){
            alert("enter player name");
    }else if(playerx.value == playery.value){
        playerx.value ="";
        playery.value =""
        alert("you can not give the same name to the both player's please enter name again");
    }else{
        localStorage.setItem('playerx', playerx.value);
       localStorage.setItem('playery', playery.value);
       localStorage.setItem('playerxscore',0);
       localStorage.setItem('playeryscore',0);
        window.location.href = "./index2.html";
      
    }
})

// localStorage.setItem('playerx', playerx.value);
// localStorage.setItem('playery', playery.value);
// localStorage.setItem('playerxscore',0);
// localStorage.setItem('playeryscore',0);



