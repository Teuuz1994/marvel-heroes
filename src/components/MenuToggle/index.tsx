import React, { ReactNode, useState, useCallback } from 'react';

import { TouchableOpacity, Modal } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/Fakeauth';

import {
  Container,
  ContentWithHeader,
  MenuSidebar,
  ButtonDegrade,
  Header,
  TitleButtonDegrade,
  Logo,
  Logo_Text,
  MenuButton,
  ViewGradient,
  ModalMenu,
  UserAvatar,
  TextContentModal,
  CloseModalButton,
} from './styles';

interface MenuToggleProps {
  children: ReactNode;
  showSidebarMenu: boolean;
}

const MenuToggle = ({ children, showSidebarMenu }: MenuToggleProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigation = useNavigation();

  const { user, signOut } = useAuth();

  const toggleModal = useCallback(() => {
    setModalIsOpen(prevState => !prevState);
  }, []);

  return (
    <Container>
      <Modal
        animationType="fade"
        visible={modalIsOpen}
        onRequestClose={toggleModal}
        transparent
      >
        <ModalMenu
          style={{
            borderColor: '#ff0000',
            shadowColor: '#ff0000',
            borderRightWidth: 2,
            borderBottomWidth: 2,
          }}
        >
          <UserAvatar source={{ uri: user?.avatar }} />
          <RectButton>
            <TextContentModal>Perfil</TextContentModal>
          </RectButton>

          <RectButton>
            <TextContentModal>Configurações</TextContentModal>
          </RectButton>

          <RectButton>
            <TextContentModal>Visite nosso site</TextContentModal>
          </RectButton>

          <TouchableOpacity activeOpacity={0.6} onPress={signOut}>
            <RectButton>
              <TextContentModal>Sair</TextContentModal>
            </RectButton>
          </TouchableOpacity>
        </ModalMenu>

        <TouchableOpacity activeOpacity={0.6} onPress={toggleModal}>
          <CloseModalButton>
            <AntDesign name="close" size={32} color="#ff0000" />
          </CloseModalButton>
        </TouchableOpacity>
      </Modal>

      <MenuSidebar showSidebarMenu={showSidebarMenu}>
        <ViewGradient colors={['transparent', '#ff0000']}>
          <ButtonDegrade onPress={() => navigation.navigate('Persons')}>
            <TitleButtonDegrade
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{ transform: [{ rotate: '90deg' }] }}
            >
              Personagens
            </TitleButtonDegrade>
          </ButtonDegrade>
        </ViewGradient>

        <ViewGradient colors={['transparent', '#ff0000']}>
          <ButtonDegrade onPress={() => navigation.navigate('Films')}>
            <TitleButtonDegrade
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{ transform: [{ rotate: '90deg' }] }}
            >
              Filmes
            </TitleButtonDegrade>
          </ButtonDegrade>
        </ViewGradient>

        <ViewGradient colors={['transparent', '#ff0000']}>
          <ButtonDegrade onPress={() => navigation.navigate('Comics')}>
            <TitleButtonDegrade
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{ transform: [{ rotate: '90deg' }] }}
            >
              Quadrinhos
            </TitleButtonDegrade>
          </ButtonDegrade>
        </ViewGradient>
      </MenuSidebar>
      <ContentWithHeader>
        <Header>
          <MenuButton showSidebarMenu={showSidebarMenu} onPress={toggleModal}>
            <Ionicons name="menu" size={32} color="#ff0000" />
          </MenuButton>

          <Logo>
            <Logo_Text>MARVEL</Logo_Text>
          </Logo>
        </Header>

        {children}
      </ContentWithHeader>
    </Container>
  );
};

export default MenuToggle;
