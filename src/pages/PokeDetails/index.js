import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {api} from '../../services/api';
import {useSelector, useDispatch} from 'react-redux';
import {loadDetail} from '../../store/slices/pokemonSlice';

import DetailsHeader from '../../components/DetailsHeader';

import {Container} from './styles';

export default function PokeDetails({route, navigation}) {
  const {name} = route.params;
  const pokemonDetail = useSelector(state => state.pokemons.pokemonDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPokemonDetail() {
      try {
        const response = await api.get('/pokemon/' + name);
        dispatch(loadDetail(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemonDetail();
  }, []);

  return (
    <Container>
      <DetailsHeader
        name={pokemonDetail.name}
        onPress={() => navigation.goBack()}
        Id={pokemonDetail.id}
      />
      <Text>{pokemonDetail.weight / 10}</Text>
    </Container>
  );
}
