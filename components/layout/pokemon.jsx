import React from 'react'
// styles
import styles from '../../styles/pokemon.module.css'
//Material UI
import { Card } from '@material-ui/core';

export default function pokemon( { pokemon } ) {
  // let { name, description, sprite, gender } = pokemon
 let  name = "Ivysaur";
 let  description =  "The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.";
 let  sprite = "https://cdn.traction.one/pokedex/pokemon/2.png";
 let  types = [ 'grass', 'poison' ];
  return (
    <div className = { styles.pokemon} >
      <img src={ sprite } alt="pokemon" />
      <h3></h3>
    </div>
  )
}
