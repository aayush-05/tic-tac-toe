import {
  combineReducers,
  createStore,
} from 'redux';

import gameReducer from './reducers/gameReducer';
import usersRankingReducer from './reducers/usersRankingReducer';

const reducer = combineReducers({
  gameData: gameReducer,
  usersData: usersRankingReducer,
});

const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
