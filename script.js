const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "\u2715";

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7], 
];

function init() {
    selected = [];

    currentPlayer.innerHTML = `BOA SORTE!`;

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    })
}

init();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;

    setTimeout(() => {
        check();
    }, 100);

    player = player === "\u2715" ? "\◯" : "\u2715";
    currentPlayer.innerHTML = `VEZ DO:  ${player}`;

}

function check() {
    let playerLastMove = player === "\u2715" ? "\◯" : "\u2715";
  
    const items = selected
      .map((item, i) => [item, i])
      .filter((item) => item[0] === playerLastMove)
      .map((item) => item[1]);
  
    for (pos of positions) {
      if (pos.every((item) => items.includes(item))) {
        alert("O JOGADOR '" + playerLastMove + "' GANHOU");
        init();
        return;
      }
    }
  
    if (selected.filter((item) => item).length === 9) {
      alert("JOGO EMPATADO");
      init();
      return;
    }
  
    const currentPlayerItems = selected
    currentPlayer.innerHTML = message
      .map((item, i) => [item, i])
      .filter((item) => item[0] === player)
      .map((item) => item[1]);
  
    for (pos of positions) {
      if (pos.every((item) => currentPlayerItems.includes(item))) {
        let message;
        if (player === "\u2715") {
          message = "O JOGADOR 'X' PERDEU!";
        } else {
          message = "O JOGADOR 'O' PERDEU!";
        }
        init();
        return;
      }
    }
  }
  
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", reset);

  function reset() {
  selected = [];
  player = "\u2715";
  init();
}