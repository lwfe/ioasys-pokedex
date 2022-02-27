import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Input, SearchView, IconView, Icon} from './styles';

export default function Search(props) {
  return (
    <Container>
      <SearchView>
        <Input placeholder={'Buscar pokemon'} />
      </SearchView>
      <IconView>
        <TouchableOpacity onPress={props.onPress}>
          <Icon source={require('../../assets/favIcon.png')} />
        </TouchableOpacity>
      </IconView>
    </Container>
  );
}
