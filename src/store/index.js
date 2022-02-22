import {configureStore} from '@reduxjs/toolkit';

import pokemonReducer from './slices/pokemonSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    theme: themeReducer,
  },
});
