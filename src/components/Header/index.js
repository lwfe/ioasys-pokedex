import React from 'react';

import {Container, LogoView, Logo, Title} from './styles';

export default function Header() {
  return (
    <Container>
      <LogoView>
        <Logo source={require('../../assets/logo.png')} />
        <Title>ioasys pokédex</Title>
      </LogoView>
    </Container>
  );
}
