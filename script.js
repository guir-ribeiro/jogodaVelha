let boxes = document.querySelectorAll(".box");
let vez = 0;
let players = [];
const symbol = ["x", "o"]
let game = ['', '', '', '', '', '', '', '', '']
let gameOver = false;
let divwinGame = document.querySelector("#winGame");
let winStates = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [0,5,8],
  [0,4,8],
  [2,4,6],
]

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

    if(game[id] !== ''){
      alert('Posição já ocupada meu caro')
      return
    }

    let boxElement = document.createElement("div");
    boxElement.classList.add(symbol[vez])
    let text = document.createTextNode(symbol[vez]);
    boxElement.appendChild(text)
    box.appendChild(boxElement)
    game[id] = symbol[vez];

    checkWin()

    vez == 0? vez++ : vez--; 
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
  gameOver = false;
  players = [];
  // winner = "";

  
  classX.forEach(div => { 
    div.parentNode.removeChild(div);
  })
  classO.forEach(div => { 
    div.parentNode.removeChild(div);
  })

}

function checkWin(){

  for(let i = 0;i <  winStates.length; i++){
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if(game[pos1] == game[pos2] 
      && game[pos1] == game[pos3] 
      && game[pos1] !== "" ){
    
      divwinGame.style.display = ("flex");
      let winGameP = document.querySelector("#winGameP");
      winGameP.innerHTML = `<p> O ganhador foi:${checkWiner()} <\p>`

      
    }else if(game.indexOf("") == -1){
      let gameOver = document.querySelector('#gameOver')
      gameOver.style.display = ("flex");
    }
  }
}

function checkWiner(){

  let winner = '';
  if(players[0] == "" || players[1] == ""){
    vez == 0? winner = "Jogador1" : winner = "Jogador2" ;
  } else{
    vez == 0? winner = players[0] : winner = players[1]
  }
  return winner
}