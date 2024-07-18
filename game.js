let boxes=document.querySelectorAll(".box");
let resetbut=document.querySelector('#resetbutton');
let newGamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#mess");

let turnO=true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    ruenO=true;
    enaablebox();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=  true;//taki hm jb doobara change kre to usme changes na ho
        checkWinner();
        //showWinner();
    });
});

const disablebox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enaablebox = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};
//for checking winnig condition
const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,//yani boxes bale array k aandar is endex pr jao 
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText);//and inke aandar ki value print krne ko use innertText

        let poss1Value=boxes[pattern[0]].innerText;
        let poss2Value=boxes[pattern[1]].innerText;
        let poss3Value=boxes[pattern[2]].innerText;

        if(poss1Value!="" && poss2Value!="" && poss3Value!=""){
                if(poss1Value == poss2Value && poss2Value == poss3Value){
                    console.log("winner",poss1Value);

                    showWinner(poss1Value);
                }
        }

    }
};

newGamebtn.addEventListener("click",resetGame);
resetbut.addEventListener("click",resetGame);