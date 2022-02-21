import React from 'react';
import {TouchableOpacity, Title, Image, Id} from './styles';

export default function PokeCard(props) {
  return (
    <TouchableOpacity>
      <Id>#001</Id>
      <Image source={require('../../assets/logo.png')} />
      <Title>{props.title}</Title>
    </TouchableOpacity>
  );
}
