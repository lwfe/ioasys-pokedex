import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  pokemonDetail: {},
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: initialState,
  reducers: {
    load: (state, action) => {
      state.pokemons = action.payload;
    },
    loadDetail: (state, action) => {
      state.pokemonDetail = action.payload;
    },
  },
});

export const {load, loadDetail} = pokemonSlice.actions;
export default pokemonSlice.reducer;
