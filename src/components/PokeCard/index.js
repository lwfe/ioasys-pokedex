import React from 'react';
import SvgUri from 'react-native-svg-uri';
import {TouchableOpacity, Title, Image, Id} from './styles';

export default function PokeCard(props, {navigation}) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Id>#001</Id>
      <SvgUri
        width="72"
        height="72"
        style={{alignSelf: 'center'}}
        source={{
          uri: props.image,
        }}
      />
      <Title>{props.title}</Title>
    </TouchableOpacity>
  );
}
