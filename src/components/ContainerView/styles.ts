import { Platform, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import styled, { css } from 'styled-components/native';

const systemOS = Platform.OS;

const statusbarHeightConstant = Constants.statusBarHeight;

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.black};
  width: ${dimensions.width}px;
  ${systemOS === 'android'
    ? css`
        height: 100%;
        padding-top: ${statusbarHeightConstant}px;
      `
    : css`
        height: 100%;
      `}
  justify-content: center;
  align-items: center;
`;
