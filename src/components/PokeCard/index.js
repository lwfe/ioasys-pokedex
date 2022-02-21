import React from 'react';
import {
  Container,
  Title,
  Image,
  Id,
  CardView,
  IdView,
  ImageView,
  TitleView,
} from './styles';

export default function PokeCard(props) {
  return (
    <Container>
      <CardView>
        <IdView>
          <Id>#001</Id>
        </IdView>
        <ImageView>
          <Image source={require('../../assets/logo.png')} />
        </ImageView>
        <TitleView>
          <Title>{props.title}</Title>
        </TitleView>
      </CardView>
    </Container>
  );
}
