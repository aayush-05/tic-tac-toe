import { leaderboardUserDataType } from '../types';

export function updateLeaderboard(usersData: leaderboardUserDataType) {
  return {
    type: 'UPDATE_LEADERBOARD',
    payload: usersData,
  }
};
