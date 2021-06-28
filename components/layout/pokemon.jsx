import React, { useEffect } from 'react'
// styles
import styles from '../../styles/pokemon.module.scss'
//Material UI
import { Card, Container } from '@material-ui/core';
export default function pokemon({ focusPokemon }) {


 const { name, description, hires, gender, type } = focusPokemon
 const { english } = name? name : '';

  return (
    <div className = { styles.pokemon } >
        <img src={ hires } alt="pokemon" />
        <h3>{ english }</h3>
        <p>{ description }</p>
        <div className = {styles.types}>
          {
            type?.map( ( type, index ) => (
              <h4 key = { index }>{ type }</h4>
            ) )
          }
        </div>
    </div>
  )
}
