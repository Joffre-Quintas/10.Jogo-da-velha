const currentPlayer = document.querySelector('.player')
const board = document.querySelector('.board')
const afterGame = document.querySelector('.after-game')
const btnPlayAgain = document.querySelector('.btn-playagain')
let player = 'X'

const win = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]
let choiceP1 = []
let choiceP2 = []

function newMove(e){
    e.target.innerHTML = player;
    if(player === 'X'){
        choiceP1.push(Number(e.target.dataset.i));      
        
        const victoryP1 = win.some(item => item.every(i => choiceP1.includes(i)));
        if (victoryP1) {
            afterGame.style.display = 'flex'
            document.getElementById('winner').innerHTML = "O jogador X venceu!"
        }
        player = 'O'
        currentPlayer.innerHTML = player
    }else{
        choiceP2.push(Number(e.target.dataset.i));
        const victoryP2 = win.some(item => item.every(i => choiceP2.includes(i)));
        if (victoryP2) {
            afterGame.style.display = 'flex'
            document.getElementById('winner').innerHTML = "O jogador O venceu!"
        }
        player = 'X'
        currentPlayer.innerHTML = player
    }
    if((choiceP1.length + choiceP2.length) === 9 ){
        afterGame.style.display = 'flex'
            document.getElementById('winner').innerHTML = "Empatou!"
    }
    e.target.removeEventListener('click', newMove)
}
function init(){
    currentPlayer.innerHTML = player
    const cell = document.querySelectorAll('.cell');
    cell.forEach(cell=>(cell.innerHTML = '', cell.addEventListener('click', newMove)))
}

btnPlayAgain.addEventListener('click',resetGame=>{
    afterGame.style.display = 'none';
    choiceP1 = [];
    choiceP2 = [];
    init();
})
init()