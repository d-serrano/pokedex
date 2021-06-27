import {
  SET_SCREEN
}  from '../types';
const initialState = {
    screen : 'table'
}
const screenReducer =  ( state = initialState, action) =>{
  const { type, payload } = action;
  switch ( type ) {
    case SET_SCREEN:
      console.log('reducer', payload)
      return{
        ...state,
        screen : payload
      }
    	default:
         return state;
  }
}

export default screenReducer;