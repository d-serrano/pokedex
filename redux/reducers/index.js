import { combineReducers } from 'redux';
// Slice Reducers
import pokemonReducer from './pokemonReducer';
import screenReducer from './screenReducer';

const rootReducer = combineReducers({ 
  pokemonReducer,
  screenReducer
});

export default rootReducer;