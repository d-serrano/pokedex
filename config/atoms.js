import { atom } from "recoil";

export const pokemonAtom = atom ({
  key: 'pokemon', // unique ID (with respect to other atoms/selectors)
  default: null,
});

export const viewAtom = atom({
  key:'view',
  default: 'list'
});