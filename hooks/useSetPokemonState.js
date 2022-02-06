import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { pokemonAtom } from "../config/atoms";
import { pokemonsgetOne } from "../config/axios";

export default function useSetPokemonState (){
  const setPokemon = useSetRecoilState(pokemonAtom);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(undefined);

  const setPokemonState = async (id)=>{
    try{
      setLoading(true);
      let result = await pokemonsgetOne(id);
      setPokemon(result.data);
    }
    catch(e){
      console.log({e})
      setError(e);
    }
    finally{
      setLoading(false);
    }
  }
 
  return {setPokemonState,loading,error} ;
  
}