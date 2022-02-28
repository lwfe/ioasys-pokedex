import React, {useEffect} from 'react';
import SvgUri from 'react-native-svg-uri';

import {api} from '../../services/api';
import {useSelector, useDispatch} from 'react-redux';
import {loadDetail} from '../../store/slices/pokemonSlice';

import DetailsHeader from '../../components/DetailsHeader';
import DetailsCard from '../../components/DetailsCard';

import {Container} from './styles';

export default function PokeDetails({route, navigation}) {
  const {name, image} = route.params;
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

      <DetailsCard
        image={image}
        weight={pokemonDetail.weight / 10}
        height={pokemonDetail.height / 10}
      />
    </Container>
  );
}
