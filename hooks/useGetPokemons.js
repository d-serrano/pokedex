import { useState } from "react";
import { pokemonsgetMany } from "../config/axios";
export default function useGetPokemons ({offset,limit}){
  const [pokemonList, setPokemonList] = useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(undefined);

  const getPokemons = async ()=>{
    try{
      setLoading(true);
      let result = await pokemonsgetMany(offset);
      setPokemonList(result);
    }
    catch(e){
      console.log({e})
      setError(e);
    }
    finally{
      setLoading(false);
    }
  }
 
  return [getPokemons,pokemonList,loading,error] ;
  
}