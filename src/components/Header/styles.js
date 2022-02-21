import styled from 'styled-components/native';

// Container
export const Container = styled.View`
  flex: 1;
  margin: 50px 40px 0 40px;
  flex-direction: row;
`;

// Views
export const LogoView = styled.View`
  flex: 5;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SwitchView = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

// Components
export const Logo = styled.Image``;
export const Title = styled.Text`
  margin-left: 10px;
  font-family: 'Poppins-Bold';
  font-size: 24px;
  line-height: 32px;
  color: #ec0344;
`;
export const Switch = styled.Switch``;