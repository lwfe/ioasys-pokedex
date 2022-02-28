import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {load, loadDetail} from '../../store/slices/pokemonSlice';

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
  const searchedPokemon = useSelector(state => state.pokemons.searchedPokemon);
  const dispatch = useDispatch();

  async function loadPokemonDetail(name, image) {
    try {
      const response = await api.get('/pokemon/' + name);
      dispatch(loadDetail(response.data));
      navigation.navigate('PokeDetails', {image: image});
    } catch (error) {
      console.log(error);
    }
  }

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
        onPress={() => {
          loadPokemonDetail(name, imageUrl);
        }}
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
          data={
            searchedPokemon
              ? pokemons.filter(function (e) {
                  return e.name == searchedPokemon.toLowerCase();
                })
              : pokemons
          }
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
