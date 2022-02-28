import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Input, SearchView, IconView, Icon} from './styles';
import {useDispatch} from 'react-redux';
import {setSearchedPokemon} from '../../store/slices/pokemonSlice';

export default function Search(props) {
  const dispatch = useDispatch();

  return (
    <Container>
      <SearchView>
        <Input
          placeholder={'Buscar pokemon'}
          onChangeText={text => {
            dispatch(setSearchedPokemon(text));
          }}
        />
      </SearchView>
      <IconView>
        <TouchableOpacity onPress={props.onPress}>
          <Icon source={require('../../assets/favIcon.png')} />
        </TouchableOpacity>
      </IconView>
    </Container>
  );
}
