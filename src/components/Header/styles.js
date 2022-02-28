import styled from 'styled-components/native';

// Container
export const Container = styled.View`
  flex: 1;
  padding: 30px 30px 20px 30px;
  flex-direction: row;
`;

export const LogoView = styled.View`
  flex: 5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// Components
export const Logo = styled.Image``;
export const Title = styled.Text`
  margin-left: 10px;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #ec0344;
`;
