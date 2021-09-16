import './nameModal.css';

import { useState } from 'react';

import { initializeGame } from '../../../store/actions/gameActions';
import { useAppDispatch } from '../../../store/hooks';

const NameModal = () => {
  const dispatch = useAppDispatch();
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const fieldOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'player1-name':
        setPlayer1Name(value.trim());
        break;
      case 'player2-name':
        setPlayer2Name(value.trim());
        break;
    }
  }

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (player1Name !== '' && player2Name !== '') {
      dispatch(initializeGame({
        player1: player1Name,
        player2: player2Name,
      }))
    }
  }

  return (
    <>
      <div className='modal-backdrop'></div>
      <div className='modal-outer-container'>
        <div className='modal-container'>
          <h2 className='modal-heading'>
            Enter Details
          </h2>
          <form onSubmit={formOnSubmit}>
            <div className='name-modal-field-container'>
              <label
                htmlFor='player1-name' 
                className={`name-modal-text-field-label${player1Name === '' ? '' : ' value-filled'}`}
              >
                Player 1 Name
              </label>
              <input 
                type='text' 
                id='player1-name' 
                name='player1-name' 
                value={player1Name} 
                onChange={fieldOnchange} autoFocus
              />
            </div>
            <div className='name-modal-field-container'>
              <label 
                htmlFor='player2-name' 
                className={`name-modal-text-field-label${player2Name === '' ? '' : ' value-filled'}`}
              >
                Player 2 Name
              </label>
              <input 
                type='text' 
                id='player2-name' 
                name='player2-name' 
                value={player2Name} 
                onChange={fieldOnchange}
              />
            </div>
            <div className='name-modal-field-container'>
              <input 
                type='submit' 
                className='button-primary name-modal-submit-button' 
                aria-label='Play' 
                value='Play' 
                disabled={player1Name === '' || player2Name === ''} 
              />
            </div>
          </form>
        </div>          
      </div>
    </>
  )
}

export default NameModal;
