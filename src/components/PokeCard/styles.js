import styled from 'styled-components/native';

// Container
export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: space-around;
`;

// Views
export const CardView = styled.View`
  flex: 1;
  width: 104px;
  height: 112px;
  border: 1px solid;
  border-radius: 8px;
`;

export const IdView = styled.View`
  flex: 1;
`;
export const ImageView = styled.View`
  flex: 1;
`;
export const TitleView = styled.View`
  flex: 1;
`;

// Components
export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
`;

export const Image = styled.Image`
  width: 72px;
  height: 72px;
`;

export const Id = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 8px;
  text-align: right;
`;
