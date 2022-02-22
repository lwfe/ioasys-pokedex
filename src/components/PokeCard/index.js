import React from 'react';
import {TouchableOpacity, Title, Image, Id} from './styles';

export default function PokeCard(props) {
  return (
    <TouchableOpacity>
      <Id>#001</Id>
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        }}
      />
      <Title>{props.title}</Title>
    </TouchableOpacity>
  );
}
