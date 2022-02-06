import axios from 'axios';
import { async } from 'regenerator-runtime';

// pokemons list
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers :  { 'Content-Type': 'application/json' }
});

const getPokemon =(url) => {
  return axios.get(url)
  .then(res=>res.data)
  .catch(err=>err);
}


const pokemonsgetMany = async ( offset = 0, limit = 151)=>{
  console.log('get',{offset,limit});
  try{
    let result = await pokeApi( `pokemon/?offset=${offset}&limit=${limit}` );
    result = result.data.results
    // get All data by each pokemon
    let results = await Promise.all(
       result.map( async p => await getPokemon(p.url))
    );
    return results;
  }
  catch(e){
    return e;
  }
}

const pokemonsgetOne = async (id)=>{
  console.log('get',{id});
  try{
    let result = await pokeApi( `pokemon/${id}` );
    return result;
  }
  catch(e){
    return e;
  }
}

export {
  pokeApi,
  pokemonsgetOne,
  pokemonsgetMany
}  