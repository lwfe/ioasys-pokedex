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
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #ec0344;
`;
export const Switch = styled.Switch``;
