import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  maxWidth?: string | number;
}

export const ContainerIOS = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth}px;
        `
      : css`
          max-width: 100%;
        `}
  height: 50px;

  padding: 10px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};

  justify-content: center;
  align-items: center;
`;

export const ContainerAndroid = styled(RectButton)<ButtonProps>`
  width: 100%;
  ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth}px;
        `
      : css`
          max-width: 100%;
        `}
  height: 50px;

  padding: 10px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};

  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
