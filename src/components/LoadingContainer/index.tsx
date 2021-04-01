import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const LoadingContainer = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#ff0000" />
    </Container>
  );
};

export default LoadingContainer;
