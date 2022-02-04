import { atom } from "recoil";

const CurrentPokemon = {
  key: 'pokemon', // unique ID (with respect to other atoms/selectors)
  default: null,
}