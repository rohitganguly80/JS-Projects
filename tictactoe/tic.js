let buttons= document.querySelectorAll(".button");
let reset= document.getElementById("reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");
let turn0 = true;
let count=0 ;
const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
  
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        if(turn0){
        button.innerText = "0";
        turn0=false;
    }
    else{
        button.innerText = "X";
        turn0=true;
    }
    button.disabled = true;
    checkWinner();
});
});
const disableBoxes = () => {
    for (let button of buttons) {
      button.disabled = true;
    }
  };
  const enableBoxes = () => {
    for (let button of buttons) {
      button.disabled = false;
      button.innerText = "";
    }
  };
  
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const checkWinner = () => {
    for (let pattern of patterns) {
      let pos1Val = buttons[pattern[0]].innerText;
      let pos2Val = buttons[pattern[1]].innerText;
      let pos3Val = buttons[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  newGameBtn.addEventListener("click", resetGame);
  reset.addEventListener("click", resetGame);