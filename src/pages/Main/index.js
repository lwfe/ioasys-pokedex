import React, {useEffect, useState} from 'react';
import {FlatList, Image, Switch, Text, TextInput} from 'react-native';

import api from '../../services/api';

//styled-components
import {Container, Child, PokemonsList} from './styles';

function Main() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await api.get('/pokemon');
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemons();
  }, []);

  return (
    <Container>
      <Child>
        <Image source={require('../../assets/logo.png')} />
        <Text>Ioasys Pokedex</Text>
        <Switch />
      </Child>

      <Child>
        <TextInput></TextInput>
      </Child>

      <PokemonsList>
        <FlatList
          data={pokemons}
          horizontal={false}
          numColumns={3}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>;
          }}
        />
      </PokemonsList>
    </Container>
  );
}

export default Main;
