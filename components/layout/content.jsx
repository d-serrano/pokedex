import React, { useEffect, useState } from 'react';
// axios 
import { axiosPokemon } from '../../config/axios';
// redux
import { useDispatch, useSelector } from 'react-redux'
// actions
import { getListPokemonsAction } from '../../redux/actions';
// componets
import List from '../screens/list';
import Table from '../screens/table';
import Gallery from '../screens/gallery';

const content = () => {
  const [ screen, setScreen ] = useState('list');

  useEffect( async () => {
    let pokemon = "ivysaur"
    try {
      getPokemons();
      let response =await axiosPokemon.get( `/${ pokemon }` );
      console.log( 'response : ', response );
      
    } catch (error) {
      console.log( 'error : ', error );
      
    }
    
  }, []);
  
  // dispatch
  const dispatch = useDispatch();
  // get Pokemons from APi
  const getPokemons = async () => {
    dispatch( getListPokemonsAction() );
  }
  //
  const setNewScreen = ( newScreen ) => {
    setScreen( newScreen );
  }
  return (
    <div>
      <div>
        <button onClick = { () => setNewScreen( 'list' ) }>List</button>
        <button onClick = { () => setNewScreen( 'table' ) }>Table</button>
        <button onClick = { () => setNewScreen( 'gallery' ) }>Gallery</button>
      </div>
      {
        screen === 'list'? <List/> : null
      }
      {
        screen === 'table'? <Table/> : null
      }
      {
        screen === 'gallery'? <Gallery/> : null
      }
    </div>
  );
};

export default content;