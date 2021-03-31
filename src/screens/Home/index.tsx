import React from 'react';
import { Text } from 'react-native';

import { MenuToggle } from '../../components';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <MenuToggle>
        <Text>Home</Text>
      </MenuToggle>
    </Container>
  );
};

export default Home;
