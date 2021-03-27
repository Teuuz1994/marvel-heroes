import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isErrored: boolean;
  maxWidth?: number | string;
}

export const Container = styled.View<ContainerProps>`
  border-radius: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 2px;
  border-color: ${({ isErrored, theme }) =>
    isErrored ? theme.colors.red : theme.colors.white};
  width: 100%;
  ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth}px;
        `
      : css`
          max-width: 100%;
        `}
`;
