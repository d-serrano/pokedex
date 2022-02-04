import React from 'react'
// 
import { 
  TableContainer , 
  Table, 
  TableHead, 
  TableBody, 
  TableRow,
  TableCell,
  Paper , 
  Avatar
  } from '@material-ui/core';
export default function PokeTable({ pokemonList, getPokemon }) {
  
  return (
    <TableContainer component = {Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>thumbnail</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Species</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
             pokemonList.map( pokemon => (
              <PokemonRow
                key = { pokemon.id }
                pokemon = { pokemon }
                getPokemon = { getPokemon }
              />
             ) )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const PokemonRow = ({ pokemon, getPokemon } ) => {
  
  const {
    name, 
    id,
    species,
    thumbnail
  } = pokemon;
  const { english } = name;

  return (
    
    <TableRow  onMouseOver= { () => getPokemon( id ) }  >
            <TableCell>{ id }</TableCell>
            <TableCell><Avatar src={ thumbnail } alt={ thumbnail }  /></TableCell>
            <TableCell>{ english }</TableCell>
            <TableCell>{ species }</TableCell>
    </TableRow>
      
   );
}
 
