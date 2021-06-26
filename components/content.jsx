import React, { useEffect } from 'react';
import axios from 'axios';
import { listPokemons,   axiosPokemon } from '../config/axios';
const content = () => {

  useEffect( async () => {
    let pokemon = "ivysaur"
    try {
      let response =await listPokemons.get( 'pokemon/?limit=151' );
      console.log( 'response : ', response );
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