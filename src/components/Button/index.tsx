import React from 'react';

import { Platform } from 'react-native';

import { ContainerAndroid, ContainerIOS, TextContent } from './styles';

interface ButtonProps {
  textContent: string;
  maxWidth?: string | number;
  extraStyles?: any;
  onPress: () => void;
}

const Button = ({
  textContent,
  maxWidth,
  extraStyles,
  onPress,
}: ButtonProps) => {
  if (Platform.OS === 'android') {
    return (
      <ContainerAndroid
        maxWidth={maxWidth}
        style={extraStyles}
        onPress={onPress}
      >
        <TextContent>{textContent}</TextContent>
      </ContainerAndroid>
    );
  }

  return (
    <ContainerIOS maxWidth={maxWidth} style={extraStyles} onPress={onPress}>
      <TextContent>{textContent}</TextContent>
    </ContainerIOS>
  );
};

export default Button;
