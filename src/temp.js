const boardToCheck = ['x', 'o', 'o', null, 'x', 'o', 'x', 'o', 'x'];

const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

console.info('hey');
WINNER_COMBOS.forEach((combo) => {
    if(boardToCheck[combo[0]] == boardToCheck[combo[1]] && boardToCheck[combo[1]] == boardToCheck[combo[2]]){
        console.log('En ' , combo, ' las posiciones son iguales, y el ganador es ', boardToCheck[combo[0]]);
    }
});