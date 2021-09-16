import './leaderBoard.css';

import React from 'react';

import userIcon from '../../../assets/images/userIcon.png';
import { useAppSelector } from '../../../store/hooks';

const LeaderBoard = () => {
  const {
    leaderBoard,
  } = useAppSelector((state) => state.usersData);

  return (
    <>
    <div className='leaderboard-outer-container'>
      <h2 className='modal-heading'>
        LeaderBoard
      </h2>
      {leaderBoard.map((userDetails, index) => (
        <React.Fragment key={index}>
          <div className='leaderboard-user-container'>
            <img src={userIcon} alt='User' />
            <div className='leaderboard-user'>
            <h6 className='leaderboard-user-name'>
              {userDetails.name}
            </h6>
            <p className='leaderboard-user-details'>
              <b>Wins:</b> {userDetails.wonMatches} |{' '}
              <b>Losses:</b> {userDetails.lostMatches}
            </p>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
    </>
  )
};

export default LeaderBoard;
