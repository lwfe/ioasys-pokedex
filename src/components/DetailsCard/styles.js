import styled from 'styled-components/native';

export const Container = styled.View``;

// Views
export const DetailsView = styled.View`
  background-color: #fff;
  margin: 0 7px;
  border-radius: 8px;
  z-index: 0;
`;
export const SvgView = styled.View`
  top: 40px;
  align-items: center;
  z-index: 1;
`;

//BaseStats

export const BaseStatsView = styled.View``;

//Main details

export const MainDetailsView = styled.View`
  padding: 20px 0px;
`;
export const MainDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const WeightView = styled.View`
  flex-direction: row;
  width: 65px;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 30px;
`;
export const HeightView = styled.View`
  flex-direction: row;
  width: 65px;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
`;
export const MovesView = styled.View`
  flex-direction: row;
  width: 158px;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 30px;
`;
export const WeightIcon = styled.Image`
  margin: 0 8px 12px 0;
`;
export const HeightIcon = styled.Image`
  margin: 0 8px 12px 0;
`;

export const MovesText = styled.Text`
  margin: 0 8px 12px 0;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

export const SubText = styled.Text`
  color: #b2b2b2;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;
export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

//Types

export const TypeView = styled.View`
  flex-direction: row;
  padding: 16px 32px;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
`;

export const Type = styled.Text`
  color: #fff;
  font-family: Poppins;
  font-style: normal;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 8px;
  background-color: #74cb48;
  border-radius: 10px;
  margin-right: 10px;
`;

// Favorite Icon
export const FavIconView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
export const FavIcon = styled.TouchableOpacity``;
export const Icon = styled.Image`
  margin: 18px 18px;
`;
