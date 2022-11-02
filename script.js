let boxes = document.querySelectorAll(".box");
let vez = 0;
let players = [];
const symbol = ["x", "o"]
let game = ["","","","","","","","",""]
let winGame = false;
let gameOver = false;
let winner = "";

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

    if(game[0] == game[1] && game[1] == game[2] && game[2] == symbol[vez]){
      winGame = true;
    } else if(game[3] == game[4] && game[4] == game[5] && game[5] == symbol[vez]){
      winGame = true;
    } else if(game[6] == game[7] && game[7] == game[8] && game[8] == symbol[vez]){
      winGame = true;
    } else if(game[0] == game[3] && game[3] == game[6] && game[6] == symbol[vez]){
      winGame = true;
    } else if(game[1] == game[4] && game[4] == game[7] && game[7] == symbol[vez]){
      winGame = true;
    } else if(game[2] == game[5] && game[5] == game[8] && game[8] == symbol[vez]){
      winGame = true;
    } else if(game[0] == game[4] && game[4] == game[8] && game[8] == symbol[vez]){
      winGame = true;
    } else if(game[2] == game[4] && game[4] == game[6] && game[6] == symbol[vez]){
      winGame = true;
    }else{
       vez == 0? vez++ : vez--; 
    }

    if(players[0] == "" || players[1] == ""){
      vez == 0? winner = "Jogador1" : winner = "Jogador1" ;
    } else{
      vez == 0? winner = players[0] : winner = players[1]
    }

  }else if(winGame !== false && gameOver !== false ){
    let erro = document.querySelector('#erro');
    erro.style.display = ("flex");

  } else if(winGame == true){
    let winGame = document.querySelector("#winGame");
    winGame.style.display = ("flex");
    let winGameP = document.querySelector("#winGameP");
    winGameP.innerHTML = `<p> O ganhador foi:${winner} <\p>`

  } else{
    let gameOver = document.querySelector('#gameOver')
    gameOver.style.display = ("flex");
  }
}

function addPlayers(player1,player2){
  players.push(player1,player2)
}

function restart(){
  let start = document.querySelector('#start');
  let gameOver = document.querySelector('#gameOver')
  let winGame = document.querySelector("#winGame");
  start.style.display = ("flex");
  gameOver.style.display = ("none");
  winGame.style.display = ("none");
  vez = 0;
  game = ["","","","","","","","",""]
  winGame = false;
  gameOver = false;
  winner = "";

  boxes.forEach((box) => {
    box.forEach((div) => { 
      div.parentNode.removeChild(div);
    })
  })
}
