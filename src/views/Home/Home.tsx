import './home.css';

import GameBoard from '../../components/home/gameBoard/GameBoard';
import LeaderBoard from '../../components/home/leaderBoard/LeaderBoard';
import NameModal from '../../components/home/nameModal/NameModal';
import WinnerModal from '../../components/home/winnerModal/WinnerModal';
import { useAppSelector } from '../../store/hooks';

const Home = () => {
  const {
    players,
    currentOutcome,
  } = useAppSelector((state) => state.gameData);

  const isWinner = currentOutcome !== 0;
  const arePlayersInitialized = players.player1 === null && players.player2 === null;

  return (
    <>
      {isWinner && (
        <WinnerModal />
      )}
      {arePlayersInitialized && (
        <NameModal />
      )}
      <nav className='home-header-container'>
        <h1 className='home-header-text'>Tic Tac Toe</h1>
      </nav>
      <main className='home-main-container'>
        <GameBoard />
        <LeaderBoard />
      </main>
    </>
  )
}

export default Home;
