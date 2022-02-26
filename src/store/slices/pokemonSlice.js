import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: initialState,
  reducers: {
    load: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const {load, loadImages} = pokemonSlice.actions;
export default pokemonSlice.reducer;
