import React from 'react';
import SvgUri from 'react-native-svg-uri';

import {
  Container,
  DetailsView,
  Icon,
  FavIcon,
  FavIconView,
  SvgView,
  TypeView,
  TypeContainer,
  Type,
  MainDetails,
  MainDetailsView,
  WeightView,
  HeightView,
  MovesView,
  Text,
  WeightIcon,
  HeightIcon,
  MovesText,
  SubText,
  BaseStatsView,
} from './styles';

export default function DetailsCard(props) {
  return (
    <Container>
      <SvgView>
        <SvgUri width="200" height="200" source={{uri: props.image}} />
      </SvgView>
      <DetailsView>
        <FavIconView>
          <FavIcon>
            <Icon source={require('../../assets/favIcon.png')} />
          </FavIcon>
        </FavIconView>

        <TypeView>
          <TypeContainer>
            <Type>Grass</Type>
            <Type>Posion</Type>
          </TypeContainer>
        </TypeView>

        <MainDetailsView>
          <MainDetails>
            <WeightView>
              <WeightIcon source={require('../../assets/weightIcon.png')} />
              <Text>{props.weight} kg</Text>
              <SubText>Weight</SubText>
            </WeightView>

            <HeightView>
              <HeightIcon source={require('../../assets/heightIcon.png')} />
              <Text>{props.height} m</Text>
              <SubText>Height</SubText>
            </HeightView>

            <MovesView>
              <MovesText>Chlorophyll / Overgrow</MovesText>
              <SubText>Moves</SubText>
            </MovesView>
          </MainDetails>
        </MainDetailsView>

        <BaseStatsView></BaseStatsView>
      </DetailsView>
    </Container>
  );
}
