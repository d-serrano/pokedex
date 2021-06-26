import React, { useEffect } from 'react';
// axios 
import { axiosPokemon } from '../../config/axios';
// redux
import { useDispatch, useSelector } from 'react-redux'
// actions
import { getListPokemonsAction } from '../../redux/actions';

const content = () => {
  // dispatch
  const dispatch = useDispatch();
  const getPokemons = async () => {
    dispatch( getListPokemonsAction() );
  }
  
  useEffect( async () => {
    let pokemon = "ivysaur"
    try {
      getPokemons();
       let response0 =await axiosPokemon.get( `/${ pokemon }` );
       console.log( 'response0 : ', response0 );
       
    } catch (error) {
      console.log( 'error : ', error );
      
    }

  }, []);

    
  return (
    <div>
      <p>pokemons</p>
    </div>
  );
};

export default content;