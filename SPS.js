let score = document.getElementById('score')//0:0
let actions = document.querySelectorAll('.choise');
let msg=document.getElementById('Msg')
let refresh=document.getElementById('refresh');
let userscore=0,computerscore=0;
actions.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        const  compchoice=comp();
        const winner=checkwinner(userchoice,compchoice);
        winnercount(winner);
        score.innerHTML=computerscore+"  :  "+userscore;
        if(userscore==3||computerscore==3){
            declearwinner();
        }
    })
});

const comp=()=>{
const compchoices=["Stone","Scissors","Paper"];
let comchoice=Math.round(Math.random()*2);
return compchoices[comchoice];
}
const checkwinner=(Userchoice,Compchoice)=>{
    if(Userchoice===Compchoice){
     return -1;
    }
    else if((Userchoice=="Stone"&&Compchoice=="Scissors")||(Userchoice=="Scissors"&&Compchoice=="Paper")||(Userchoice=="Paper"&&Compchoice=="Stone")){
       return 1;
    }
    else{
         return 0;
    }
}
const winnercount=(check)=>{
    if(check===1){
        userscore++;
        msg.innerHTML="You Win!...";
        msg.style.color="green";
    }
     else if(check===0){
        computerscore++;
        msg.innerHTML="You lose!...";
        msg.style.color="red";
    }
    else{
        msg.innerHTML=" draw!...";
        msg.style.color="yellow";
    }

}
const declearwinner=()=>{
        if(userscore>computerscore){
            msg.innerHTML="Congratulation you win!....the game";
            msg.style.color="green";
        }
        else if(userscore==computerscore){
            msg.innerHTML="Game draw!.. Try Again...";
            msg.style.color="yellow";
        }
       else{
             msg.innerHTML="You losed the game! Try again..";
             msg.style.color="red";
       }
       userscore=0,computerscore=0;
}
refresh.addEventListener('click',()=>{
    msg.innerHTML="Play your move!...";
    msg.style.color="white";
    userscore=0;
    computerscore=0;
    score.innerHTML=computerscore+" : "+userscore;
})
