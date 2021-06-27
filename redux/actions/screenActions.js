import {
  SET_SCREEN
}  from '../types';


//******************************
//**        Set Screen        **
//******************************
// set screen
export const setScreen = ( newScreen ) =>{
  console.log('screen', newScreen)
  return ( dispatch )  => {
     dispatch ( setScreenAction( newScreen ) );
   }
}


export const setScreenAction = newScreen => ({
  type: SET_SCREEN,
  payload : newScreen
}); 
  
