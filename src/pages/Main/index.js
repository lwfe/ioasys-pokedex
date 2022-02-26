import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {load, loadImages} from '../../store/slices/pokemonSlice';

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

  async function loadPokemons() {
    try {
      const response = await api.get('/pokemon');
      dispatch(load(response.data.results));
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

    return <PokeCard title={name} image={imageUrl} />;
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <Container>
      <Header />
      <Search />

      <PokeList>
        <FlatList
          data={pokemons}
          maxToRenderPerBatch={5}
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
