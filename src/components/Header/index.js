import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {changeTheme} from '../../store/slices/themeSlice';
import {Container, LogoView, SwitchView, Logo, Title, Switch} from './styles';

export default function Header() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Container>
      <LogoView>
        <Logo source={require('../../assets/logo.png')} />
        <Title>ioasys pokédex</Title>
      </LogoView>
      <SwitchView>
        <Switch value={theme} onValueChange={() => dispatch(changeTheme())} />
      </SwitchView>
    </Container>
  );
}
