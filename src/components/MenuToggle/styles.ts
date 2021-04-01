import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

interface SideBar {
  showSidebarMenu: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const MenuSidebar = styled.View<SideBar>`
  display: ${({ showSidebarMenu }) => (showSidebarMenu ? 'flex' : 'none')};
  height: 100%;
  width: 100%;

  max-width: 40.7px;

  background-color: ${({ theme }) => theme.colors.black};

  justify-content: center;
  align-items: center;
`;

export const ContentWithHeader = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ButtonDegrade = styled(RectButton)`
  border-radius: 8px;
  height: 150px;

  justify-content: center;
  align-items: center;
`;

export const TitleButtonDegrade = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  font-size: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.black};

  margin-bottom: 75px;
  padding-top: ${Constants.statusBarHeight + 36.6}px;
`;

export const Logo = styled.View<SideBar>`
  max-height: 30px;

  justify-content: center;
  align-items: center;
  padding: 5px;
  ${({ showSidebarMenu }) =>
    showSidebarMenu
      ? css`
          margin-right: 70px;
        `
      : css`
          margin-right: 30px;
        `}

  background-color: ${({ theme }) => theme.colors.red};
`;

export const Logo_Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Marvel_Regular};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;

export const MenuButton = styled(RectButton)<SideBar>`
  background-color: transparent;

  ${({ showSidebarMenu }) =>
    showSidebarMenu
      ? css`
          margin-left: 0;
        `
      : css`
          margin-left: 41px;
        `};
`;

export const ViewGradient = styled(LinearGradient)`
  border-radius: 8px;
  width: 100%;
`;

export const ModalMenu = styled.View`
  width: 200px;
  height: 380px;

  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  border-bottom-right-radius: 50px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const UserAvatar = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  margin-top: 42px;
  margin-bottom: 28px;
`;

export const TextContentModal = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  margin-bottom: 18px;
`;

export const CloseModalButton = styled(RectButton)`
  margin-left: 150px;
`;
