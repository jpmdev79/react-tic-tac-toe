import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        if (
            boardToCheck[combo[0]] &&
            boardToCheck[combo[0]] == boardToCheck[combo[1]] &&
            boardToCheck[combo[1]] == boardToCheck[combo[2]]
        ) {
            console.log('En ', combo, ' las posiciones son iguales, y el ganador es ', boardToCheck[combo[0]]);
            return boardToCheck[combo[0]]
        }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    // si hay alguna casilla con null, el juego no ha terminado 
    for (const value of newBoard) {
        if (value === null) {
            return false
        }
    }
    // si todas las casillas tenían un valor, el juego ha terminad en empate
    return true
}