import React from 'react';
import {useSelector} from 'react-redux';

import DetailsHeader from '../../components/DetailsHeader';
import DetailsCard from '../../components/DetailsCard';

import {Container} from './styles';

export default function PokeDetails({route, navigation}) {
  const {image} = route.params;
  const pokemonDetail = useSelector(state => state.pokemons.pokemonDetail);

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
        moves={
          pokemonDetail.abilities[1]
            ? pokemonDetail.abilities[0].ability.name +
              '/' +
              pokemonDetail.abilities[1].ability.name
            : pokemonDetail.abilities[0].ability.name
        }
      />
    </Container>
  );
}
