import { playersDataType } from '../types';

export const initializeGame = (players: playersDataType) => {
  return {
    type: 'START_GAME',
    payload: {
      ...players,
    },
  };
};

export const playTurn = (squareId: number) => {
  return {
    type: 'PLAY_TURN',
    payload: squareId,
  };
};

export const undoTurn = () => {
  return {
    type: 'UNDO_MOVE',
  };
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME',
  };
};
