import React, { useEffect } from 'react'
// styles
import styles from '../../styles/pokemon.module.scss'
//Material UI
import { Card, Container } from '@material-ui/core';
// redux
import { useDispatch, useSelector } from 'react-redux';
export default function pokemon( ) {
  const focusPokemon = useSelector( state =>state.pokemonReducer.pokemon );
 
  console.log( 'sider',focusPokemon )

 const { name, description, hires, gender, type } = focusPokemon
 const { english } = name? name : '';
 //let  name = "Ivysaur";
 //let  description =  "The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.";
 //let  sprite = "https://cdn.traction.one/pokedex/pokemon/2.png";
 
  return (
    <div className = { styles.pokemon } >
      {
        focusPokemon ?
        <>
        <img src={ hires } alt="pokemon" />
        <h3>{ english }</h3>
        <p>{ description }</p>
        <div className = {styles.types}>
          {
            type?.map( ( type, index ) => (
              <h4 key = { index }>{ type }</h4>
            ) )
          }
        </div> </> : <h3>Selecciopna un Pokemon</h3>

      }
    </div>
  )
}
