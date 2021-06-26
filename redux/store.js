import { createStore, applyMiddleware, compose } from 'redux';
// reducers
import rootReducer from './reducers';
// midlewares
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

if (typeof window !== "undefined") {
}

const preLoadState = {
  pokemons : [],
    pokemon: {},
    loadingPokemons : false,
		loadingPokemons: false
}
// middlewares - compose withd devtool + thunk for async behaviour
const composedEnhancer = composeWithDevTools( applyMiddleware( thunk ) );
//store
const store = createStore( rootReducer, preLoadState, composedEnhancer);

export default store;