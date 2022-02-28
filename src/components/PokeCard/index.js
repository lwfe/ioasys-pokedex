import React from 'react';
import SvgUri from 'react-native-svg-uri';
import {TouchableOpacity, Title, Id, SvgView} from './styles';

export default function PokeCard(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Id>#{props.Id}</Id>
      <SvgView>
        <SvgUri
          width="72"
          height="72"
          style={{alignSelf: 'center'}}
          source={{
            uri: props.image,
          }}
        />
      </SvgView>
      <Title>{props.title}</Title>
    </TouchableOpacity>
  );
}
