import { useState } from 'react';
import  confetti  from 'canvas-confetti'
import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';
import { TURNS } from './constants';
import './App.css'
import { checkWinnerFrom, checkEndGame } from './logic/board';

function App() {
  
  const resetGame = () => {
    setWinner(null)
    setBoard(defaultBoard)
    setTurn(TURNS.X)
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
    const newWinner = checkWinnerFrom(newBoard)
    console.log('newWinner: ', newWinner);
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
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

      <WinnerModal winner={winner} resetGame={resetGame}/>

    </main>
  )
}

export default App
