  let k = 0;
  let status = true;
  let move;
  let playerXname = window.prompt('Please enter your name') || 'Player1';
  let playerOname = window.prompt('Please enter your name') || 'Player2';
  let playerX = 0;
  let playerO = 0;
  let winner;
  let board = [0, 0, 0,
               0, 0, 0, 
               0, 0, 0];
               document.getElementById('playerX').innerHTML = `${playerXname}'s score = ${playerX} (Player X)`;
               document.getElementById('playerO').innerHTML = `${playerOname}'s score = ${playerO} (Player O)`;
    document.addEventListener('click', () => {
      let name = event.target.id;
      if(name !== 'Reset'){
        if((document.getElementById(name).innerHTML !== 'x' && document.getElementById(name).innerHTML !== 'o') && status === true){
          k % 2 === 0 ? move = 'x' : move = 'o';
          document.getElementById(name).innerHTML = move;
          let position = (name.slice(-1));
          board[position] = move;
          if(checker(board)){
            status = false;
            winner === 'x' ? setTimeout(() => alert(`${playerXname} wins!`), 100) : setTimeout(() => alert(`${playerOname} wins!`), 100);
          }else if(k === 8){
            status = false;
            alert('Game over!');
          }
          k++;
        }else{
          alert('Please start new game');
        }
      }
    })

  const checker = (game) => {
    results = [];
    for(let i = 0; i < 3; i++){
      results[i] = game[i] + game[i + 3] + game[i + 6];
    }
    let count = 3;
    for(let i = 0; i < 7; i+=3){
      results[count] = game[i] + game[i + 1] + game[i + 2];
      count++;
    }
    results[6] = game[0] + game[4] + game[8];
    results[7] = game[2] + game[4] + game[6];
    let win = ['xxx', 'ooo'];
    for(var i of results){
      if(win.indexOf(i) > -1){
        winner = win[win.indexOf(i)].slice(-1);
        winner === 'x' ? playerX++ : playerO++;
        winner === 'x' ? document.getElementById('playerX').innerHTML = `${playerXname}'s score = ${playerX} (Player X)` : document.getElementById('playerO').innerHTML = `${playerOname}'s score = ${playerO} (Player O)`;
        return true;

      }
    }
    return false;
  }

const reset = () => {
  board = [0, 0, 0,
           0, 0, 0, 
           0, 0, 0];
  status = true;
  k = 0;
}
document.getElementById('Reset').addEventListener('click', () => {
  board = [0, 0, 0,
           0, 0, 0, 
           0, 0, 0];
  for(var i = 0; i < 9; i++){
    document.getElementById('cell' + i).innerHTML = '';
  }
  status = true;
  winner === 'o' ? k = 1 : k = 0;
});
