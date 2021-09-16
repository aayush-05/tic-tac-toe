import './gameBoard.css';

import userIcon from '../../../assets/images/userIcon.png';
import {
  playTurn,
  resetGame,
  undoTurn,
} from '../../../store/actions/gameActions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../store/hooks';

const GameBoard = () => {
  const dispatch = useAppDispatch();
  const {
    players,
    currentPlayer,
    currentOutcome,
    movesTracker,
  } = useAppSelector((state) => state.gameData);

  const renderSquares = (movesTracker: number[]) => {
    const squaresArray: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>[] = [];
  
    for (let index = 0; index < 9; index++) {
      squaresArray.push(
        <div 
          className='gameboard-squares' 
          key={index} 
          data-id={index} 
          data-move={movesTracker[index]} 
          onClick={boardSquareOnClick}
        >
          {movesTracker[index] !== 0 && (
            <>
              {movesTracker[index] === 1 ? (
                <>✕</>
              ) : (
                <>〇</>
              )}
            </>)}
        </div>
      )
    }
    return squaresArray;
  }
  
  const boardSquareOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (currentOutcome === 0) {
      const gameboardSquare = e.target as HTMLElement;
      if (gameboardSquare.dataset.move === '0') {
        dispatch(playTurn(
          Number(gameboardSquare.dataset.id)
        ))
      }
    }
  }

  return (
    <div className='gameboard-game-container'>
      <div className='gameboard-container'>
        {renderSquares(movesTracker)}
      </div>
      <div className='gameboard-user-container'>
        <h6>
          <b>Next Player:</b>
          {' '}
          <img src={userIcon} alt='User Icon' className='gameboard-user-icon'/>
          {' '}
          {currentPlayer === 1 ? players.player1 : players.player2}
        </h6>
      </div>
      <div className='gameboard-buttons-container'>
        <button 
          className='primary-button gameboard-buttons'
          onClick={() => {
            dispatch(undoTurn())
          }}
        >
          Undo Move
        </button>
        <button 
          className='primary-button gameboard-buttons'
          onClick={() => {
            dispatch(resetGame())
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  )
}

export default GameBoard;
