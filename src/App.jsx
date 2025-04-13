import { useState } from 'react';
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {

  // esta cadena se meterá en el className del div
  // por lo tanto se imprimirá una cadena is-selected 
  // si la variable isSelected == true
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  // combinaciones ganadoras
  const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
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

  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(TURNS.X);

  const defaultBoard = Array(9).fill(null);
  const [board, setBoard] = useState(defaultBoard);

  const updateBoard = (index) => {
    // console.log('winner = ', winner)
    // si la posición ya tiene una ficha, salimos
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    console.log('newWinner: ', newWinner);
    if (newWinner) {
      console.log('asignamos ', newWinner, ' a winner')
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
