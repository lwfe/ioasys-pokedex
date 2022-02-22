import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {load} from '../../store/slices/pokemonSlice';

// api
import {api} from '../../services/api';

// components
import Header from '../../components/Header/index';
import Search from '../../components/Search/index';
import PokeCard from '../../components/PokeCard';

// styles
import {Container, PokeList} from './styles';

function Main() {
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await api.get('/pokemon');
        dispatch(load(response.data.results));
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemons();
  }, []);

  return (
    <Container>
      <Header />
      <Search />

      <PokeList>
        <FlatList
          data={pokemons}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return <PokeCard title={item.name} />;
          }}
        />
      </PokeList>
    </Container>
  );
}

export default Main;
