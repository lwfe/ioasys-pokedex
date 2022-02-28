import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  searchedPokemon: '',
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
    setSearchedPokemon: (state, action) => {
      state.searchedPokemon = action.payload;
    },
  },
});

export const {load, loadDetail, setSearchedPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;
