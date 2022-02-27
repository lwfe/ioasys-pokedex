import React from 'react';

import {Container, LogoView, SwitchView, Logo, Title, Switch} from './styles';

export default function Header() {
  return (
    <Container>
      <LogoView>
        <Logo source={require('../../assets/logo.png')} />
        <Title>ioasys pokédex</Title>
      </LogoView>
      <SwitchView>
        <Switch />
      </SwitchView>
    </Container>
  );
}
