import React, {useEffect, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

// api
import api from '../../services/api';

// components
import Header from '../../components/Header/index';
import Search from '../../components/Search/index';
import PokeCard from '../../components/PokeCard';

// styles
import {Container, PokeList} from './styles';

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
      <Header />
      <Search />

      <PokeList>
        <FlatList
          data={pokemons}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
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
