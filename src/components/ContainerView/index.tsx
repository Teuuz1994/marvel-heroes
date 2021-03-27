import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ContainerViewProps {
  children: ReactNode;
}

const ContainerView = ({ children }: ContainerViewProps) => {
  return <Container>{children}</Container>;
};

export default ContainerView;
