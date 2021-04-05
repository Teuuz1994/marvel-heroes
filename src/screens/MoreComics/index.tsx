import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { MenuToggle, LoadingContainer } from '../../components';
import { getComicList } from '../../services/fakeApi';
import { ComicList } from '../../models';

import {
  Container,
  GobackButton,
  Header,
  HeaderTitle,
  ComicPost,
  ComicsContainer,
  ComicPoster,
  ComicDescriptionContainer,
  DescriptionTitle,
  DescriptionComicText,
  SeeMoreDetails,
  ModalComicInformationsContainer,
  CroppedComicImage,
  FooterModal,
  AvailableComic,
  CloseModalTouchable,
  DividerColumAvailable,
  AvalableOfFans,
  StarsContent,
  ComicDescription,
  StoresAvailableTitle,
  ComicTitle,
  StoresAvailableContentConteiner,
  StoresImage,
  ComicInfoContainer,
  CirclesPagination,
} from './styles';

const MoreComics = () => {
  const [comics, setComics] = useState<ComicList[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalDetailsIsOpen, setModalDetailIsOpen] = useState(false);
  const [comicsDetails, setComicsDetails] = useState<ComicList | null>(null);

  const navigation = useNavigation();

  const toggleOpenModal = useCallback((comicsInformations: ComicList) => {
    setComicsDetails(comicsInformations);
    setModalDetailIsOpen(true);
  }, []);

  const toggleCloseModal = useCallback(() => {
    setModalDetailIsOpen(false);
  }, []);

  const heroesListMemoized = useMemo(() => {
    return comics.map(hero => (
      <ComicPost key={hero.name}>
        <ComicPoster source={{ uri: hero.image.uri }} />

        <ComicDescriptionContainer colors={['#FF0000', '#8000004D']}>
          <DescriptionTitle adjustsFontSizeToFit numberOfLines={1}>
            {hero.name}
          </DescriptionTitle>

          <DescriptionComicText>{hero.description}</DescriptionComicText>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => toggleOpenModal(hero)}
          >
            <SeeMoreDetails>ver detalhes</SeeMoreDetails>
          </TouchableOpacity>
        </ComicDescriptionContainer>
      </ComicPost>
    ));
  }, [comics, toggleOpenModal]);

  useEffect(() => {
    const getHeroes = async () => {
      const comicsList = await getComicList();

      setComics(comicsList);
      setLoading(false);
    };
    getHeroes();
  }, []);

  return (
    <MenuToggle showSidebarMenu={false}>
      {loading ? (
        <LoadingContainer />
      ) : (
        <Container>
          <Header>
            <GobackButton activeOpacity={0.8} onPress={navigation.goBack}>
              <AntDesign name="arrowleft" size={20} color="#ff0000" />
            </GobackButton>
            <FontAwesome5
              name="book-open"
              size={32}
              color="#ff0000"
              style={{ marginRight: 12.27 }}
            />
            <HeaderTitle>HQs</HeaderTitle>
          </Header>

          <Modal
            isVisible={modalDetailsIsOpen}
            useNativeDriver
            animationIn="fadeIn"
            animationOut="fadeOut"
            onBackdropPress={toggleCloseModal}
            onBackButtonPress={toggleCloseModal}
            hideModalContentWhileAnimating
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ModalComicInformationsContainer colors={['#FF0000', '#800000']}>
              <CroppedComicImage
                source={
                  comicsDetails
                    ? { uri: comicsDetails.image.croped.uri }
                    : { uri: '' }
                }
                resizeMode="cover"
              />

              <ComicInfoContainer>
                <ComicTitle>{comicsDetails?.name}</ComicTitle>
                <ComicDescription>
                  {comicsDetails?.description}
                </ComicDescription>
                <StoresAvailableTitle>
                  Disponível para compra:
                </StoresAvailableTitle>
                <StoresAvailableContentConteiner>
                  {comicsDetails?.avalableStores.map(store => (
                    <StoresImage
                      key={store.id}
                      source={
                        comicsDetails
                          ? { uri: store.store.image.uri }
                          : { uri: '' }
                      }
                    />
                  ))}
                </StoresAvailableContentConteiner>
              </ComicInfoContainer>

              <FooterModal>
                <AvailableComic>
                  <DividerColumAvailable>
                    <AvalableOfFans>Crítica:</AvalableOfFans>
                  </DividerColumAvailable>

                  <StarsContent>
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#84848D" />
                  </StarsContent>
                </AvailableComic>

                <CloseModalTouchable onPress={toggleCloseModal}>
                  <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={29}
                    color="#fff"
                  />
                </CloseModalTouchable>
              </FooterModal>
            </ModalComicInformationsContainer>
          </Modal>

          <ComicsContainer>{heroesListMemoized}</ComicsContainer>

          <CirclesPagination>
            <FontAwesome
              name="circle"
              size={15}
              color="#ff0000"
              style={{ marginRight: 4.43 }}
            />
            <FontAwesome
              name="circle"
              size={15}
              color="#84848D"
              style={{ marginRight: 4.43, opacity: 0.25 }}
            />
            <FontAwesome
              name="circle"
              size={15}
              color="#84848D"
              style={{ opacity: 0.25 }}
            />
          </CirclesPagination>
        </Container>
      )}
    </MenuToggle>
  );
};

export default MoreComics;
