import './winnerModal.css';

import { useEffect } from 'react';

import { resetGame } from '../../../store/actions/gameActions';
import { updateLeaderboard } from '../../../store/actions/userActions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../store/hooks';

const WinnerModal = () => {
  const dispatch = useAppDispatch();
  const {
    players,
    currentOutcome,
  } = useAppSelector((state) => state.gameData);

  let whoWon: string | null = null
  if (currentOutcome === 1) {
    whoWon = players.player1;
  } else {
    whoWon = players.player2;
  }

  useEffect(() => {
    dispatch(updateLeaderboard({
      player1: players.player1 as string,
      player2: players.player2 as string,
      hasWon: whoWon,
    }))
  }, [])

  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(resetGame());
  }

  return (
    <>
    <div className='modal-backdrop'></div>
    <div className='modal-outer-container'>
      <div className='modal-container'>
        <h2 className='modal-heading'>
          {currentOutcome === -1 && (
            <>It's a Draw</>
          )}
          {currentOutcome !== -1 && (
            <>{
              currentOutcome === 1 ? players.player1 : players.player2
            } Won!
            </>
          )}
        </h2>
        <h3 className='winner-modal-crown-symbol'>👑</h3>
        <div className='winner-modal-button-container'>
          <button className='primary-button winner-modal-button' onClick={buttonOnClick}>
            Play Again
          </button>
        </div>
      </div>          
    </div>
  </>
  )
}

export default WinnerModal;
