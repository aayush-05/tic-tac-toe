import {
  gameDataType,
  playersDataType,
} from '../../types';
import findCurrentOutcome from '../../utils/findCurrentOutcome';

const initialState: gameDataType = {
  players: {
    player1: null,
    player2: null,
  },
  currentPlayer: null,
  currentOutcome: 0,
  playedSquaresSequence: [],
  movesTracker: Array(9).fill(0),
};

const gameReducer = (
  state: gameDataType = initialState, 
  action: {type: string, payload?: playersDataType | number}
) => {
  switch(action.type) {
    case 'START_GAME':
      const playersData = action.payload as playersDataType;
      return {
        ...state,
        players: {
          player1: playersData.player1,
          player2: playersData.player2,
        },
        currentPlayer: 1,
      };
      
    case 'PLAY_TURN':
      const newMovesTracker = [...state.movesTracker];
      const currentPosition = action.payload as number;
      if (state.currentPlayer !== null) {
        newMovesTracker[currentPosition] = state.currentPlayer;

        return {
          ...state,
          currentPlayer: state.currentPlayer === 1 ? 2 : 1,
          currentOutcome: findCurrentOutcome(newMovesTracker),
          playedSquaresSequence: [...state.playedSquaresSequence, currentPosition],
          movesTracker: newMovesTracker,
        };
      }
      return {
        ...state,
      };

    case 'UNDO_MOVE':
      const oldMovesTracker = [...state.movesTracker];
      const lastPlayedSquare = state.playedSquaresSequence[state.playedSquaresSequence.length - 1];
      oldMovesTracker[lastPlayedSquare] = 0;
      const newPlayedSquaresSequence = [...state.playedSquaresSequence];
      newPlayedSquaresSequence.pop();

      if (state.currentOutcome === 0 && state.playedSquaresSequence.length !== 0) {
        return {
          ...state,
          currentPlayer: state.currentPlayer === 1 ? 2 : 1,
          movesTracker: oldMovesTracker,
          playedSquaresSequence: newPlayedSquaresSequence,
        };
      }
      return {
        ...state,
      };

    case 'RESET_GAME':
      return {
        ...state,
        currentPlayer: 1,
        currentOutcome: 0,
        playedSquaresSequence: [],
        movesTracker: Array(9).fill(0),
      };

    case 'NEW_GAME':
      return {
        ...state,
        players: {
          player1: null,
          player2: null,
        },
        currentPlayer: 1,
        currentOutcome: 0,
        playedSquaresSequence: [],
        movesTracker: Array(9).fill(0),
      };
    default:
      return {
        ...state,
      };
  };
};

export default gameReducer;
