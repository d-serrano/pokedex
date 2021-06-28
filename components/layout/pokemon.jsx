import React, { useEffect } from 'react'
// styles
import styles from '../../styles/pokemon.module.scss'
//Material UI
import { Card, Container, FilledInput } from '@material-ui/core';
//
import Image  from 'next/image'
export default function pokemon({ focusPokemon }) {


 const { name, description, hires, gender, type } = focusPokemon
 const { english } = name ;

  return (
    <div className = { styles.pokemon } >
        <Image
          src={ hires } 
          alt="pokemon" 
          width = { 200 }
          height = { 300 }
         />
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
