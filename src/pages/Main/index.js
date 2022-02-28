import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

// Redux
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

function Main({navigation}) {
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const dispatch = useDispatch();

  function pokemonShow(item) {
    const {name, url} = item.item;
    let id = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');

    let imageUrl =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' +
      id +
      '.svg';

    return (
      <PokeCard
        title={name}
        image={imageUrl}
        Id={id}
        onPress={() => navigation.navigate('PokeDetails', {name: name})}
      />
    );
  }

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
      <Search onPress={() => navigation.navigate('Favorites')} />
      <PokeList>
        <FlatList
          data={pokemons}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          renderItem={pokemonShow}
        />
      </PokeList>
    </Container>
  );
}

export default Main;
