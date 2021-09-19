import { leaderboardUserDataType } from '../../types';
import { UPDATE_LEADERBOARD } from '../actionTypes/userActionTypes';

export function updateLeaderboard(usersData: leaderboardUserDataType) {
  return {
    type: UPDATE_LEADERBOARD,
    payload: usersData,
  }
};
