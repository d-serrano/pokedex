import React from 'react'
// styles
import styles from '../../styles/pokemon.module.scss'
//Material UI
import { Card, Container } from '@material-ui/core';

export default function pokemon( { pokemon } ) {
  // let { name, description, sprite, gender } = pokemon
 let  name = "Ivysaur";
 let  description =  "The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.";
 let  sprite = "https://cdn.traction.one/pokedex/pokemon/2.png";
 let  types = [ 'grass', 'poison' ];
  return (
    <div className = { styles.pokemon } >
      <img src={ sprite } alt="pokemon" />
      <h3>{ name }</h3>
      <p>{ description }</p>
      <div className = {styles.types}>
        {
          types.map( type => (
            <h4>{ type }</h4>
          ) )
        }
      </div>
    </div>
  )
}
