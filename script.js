let boxes = document.querySelectorAll(".box");
let vez = 0;
let players = [];
const symbol = ["x", "o"]
let game = ["","","","","","","","",""]
var winGame = false;
let gameOver = false;
let winner = "";
let divwinGame = document.querySelector("#winGame");

document.addEventListener('DOMContentLoaded', () => {

  boxes.forEach((box) => {
  box.addEventListener('click', CreateDivBox)
  })
})

function start(){
  let start = document.querySelector('#start');
  let player1 = document.querySelector("#player1").value;
  let player2 = document.querySelector("#player2").value;
  
  addPlayers(player1,player2);

  start.style.display = ("none");
}

function CreateDivBox(event){
  let box = event.target;
  let id = box.id;
  if(winGame == false && gameOver == false){
    let boxElement = document.createElement("div");
    boxElement.classList.add(symbol[vez])
    let text = document.createTextNode(symbol[vez]);
    boxElement.appendChild(text)
    box.appendChild(boxElement)
    game[id] = symbol[vez];
    console.log(game);

    if(game[0] == game[1] && game[1] == game[2] && game[2] == symbol[vez] && game[0] !== "" ){
      winGame = true;
      console.log("if1")
    } else if(game[3] == game[4] && game[4] == game[5] && game[5] == symbol[vez] && game[3] !== ""){
      winGame = true;
      console.log("if2")
    } else if(game[6] == game[7] && game[7] == game[8] && game[8] == symbol[vez] && game[6] !== ""){
      winGame = true;
      console.log("if3")
    } else if(game[0] == game[3] && game[3] == game[6] && game[6] == symbol[vez] && game[0] !== ""){
      winGame = true;
      console.log("if4")
    } else if(game[1] == game[4] && game[4] == game[7] && game[7] == symbol[vez] && game[1] !== ""){
      winGame = true;
      console.log("if5")
    } else if(game[2] == game[5] && game[5] == game[8] && game[8] == symbol[vez] && game[2] !== ""){
      winGame = true;
      console.log("if6")
    } else if(game[0] == game[4] && game[4] == game[8] && game[8] == symbol[vez] && game[0] !== ""){
      winGame = true;
      console.log("if7")
    } else if(game[2] == game[4] && game[4] == game[6] && game[6] == symbol[vez] && game[2] !== ""){
      winGame = true;
      console.log("if8")
    }else{
       vez == 0? vez++ : vez--; 
    }

    if(players[0] == "" || players[1] == ""){
      vez == 0? winner = "Jogador1" : winner = "Jogador2" ;
    } else{
      vez == 0? winner = players[0] : winner = players[1]
    }

    if(winGame == true){
      divwinGame.style.display = ("flex");
      let winGameP = document.querySelector("#winGameP");
      winGameP.innerHTML = `<p> O ganhador foi:${winner} <\p>`
    
    } else if(gameOver == true){
      let gameOver = document.querySelector('#gameOver')
      gameOver.style.display = ("flex");

    } else if(winGame == true && gameOver == true ){
        let erro = document.querySelector('#erro');
        erro.style.display = ("flex");
    }
  }
}

function addPlayers(player1,player2){
  players.push(player1,player2)
}

function restart(){
  let start = document.querySelector('#start');
  let gameOver = document.querySelector('#gameOver')
  let classX = document.querySelectorAll(".x");
  let classO = document.querySelectorAll(".o");
  start.style.display = ("flex");
  gameOver.style.display = ("none");
  divwinGame.style.display = ("none");
  vez = 0;
  game =["","","","","","","","",""];
  winGame = false;
  gameOver = false;
  winner = "";

  
  classX.forEach(div => { 
    div.parentNode.removeChild(div);
  })
  classO.forEach(div => { 
    div.parentNode.removeChild(div);
  })

}