import React from 'react';

import {Container, BackIcon, Image, Name, IconView, IdView, Id} from './styles';

export default function DetailsHeader(props) {
  return (
    <Container>
      <IconView>
        <BackIcon onPress={props.onPress}>
          <Image source={require('../../assets/backIcon.png')} />
        </BackIcon>
        <Name>{props.name}</Name>
      </IconView>

      <IdView>
        <Id>#{props.Id}</Id>
      </IdView>
    </Container>
  );
}
