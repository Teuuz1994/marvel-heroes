import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { MenuToggle, LoadingContainer } from '../../components';
import { getPersonsList } from '../../services/fakeApi';
import { PersonsList } from '../../models';

import {
  Container,
  GobackButton,
  Header,
  HeaderTitle,
  HeroPost,
  HeroesContainer,
  HeroPoster,
  HeroDescriptionContainer,
  DescriptionTitle,
  DescriptionHeroText,
  SeeMoreDetails,
  ModalHeroInformationsContainer,
  CroppedHeroImage,
  FooterModal,
  AvailableHero,
  CloseModalTouchable,
  ContentInformationsHero,
  HeroName,
  Appears,
  ListOfAppears,
  DividerColumAvailable,
  AvalableOfFans,
  StarsContent,
} from './styles';

const MorePersons = () => {
  const [heroes, setHeroes] = useState<PersonsList[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalDetailsIsOpen, setModalDetailIsOpen] = useState(false);
  const [heroDetails, setHeroDetails] = useState<PersonsList | null>(null);

  const navigation = useNavigation();

  const toggleOpenModal = useCallback((heroInformations: PersonsList) => {
    setHeroDetails(heroInformations);
    setModalDetailIsOpen(true);
  }, []);

  const toggleCloseModal = useCallback(() => {
    setModalDetailIsOpen(false);
  }, []);

  const heroesListMemoized = useMemo(() => {
    return heroes.map(hero => (
      <HeroPost key={hero.name}>
        <HeroPoster source={{ uri: hero.image.uri }} />

        <HeroDescriptionContainer colors={['#FF0000', '#8000004D']}>
          <DescriptionTitle adjustsFontSizeToFit numberOfLines={1}>
            {hero.name}
          </DescriptionTitle>

          <DescriptionHeroText>{hero.description}</DescriptionHeroText>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => toggleOpenModal(hero)}
          >
            <SeeMoreDetails>ver detalhes</SeeMoreDetails>
          </TouchableOpacity>
        </HeroDescriptionContainer>
      </HeroPost>
    ));
  }, [heroes, toggleOpenModal]);

  useEffect(() => {
    const getHeroes = async () => {
      const heroesList = await getPersonsList();

      setHeroes(heroesList);
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
            <MaterialIcons
              name="people-alt"
              size={32}
              color="#ff0000"
              style={{ marginRight: 12.27 }}
            />
            <HeaderTitle>Personagens</HeaderTitle>
          </Header>

          <Modal
            isVisible={modalDetailsIsOpen}
            useNativeDriver
            animationIn="fadeIn"
            animationOut="fadeOut"
            onBackdropPress={toggleCloseModal}
            onBackButtonPress={toggleCloseModal}
            hideModalContentWhileAnimating
          >
            <ModalHeroInformationsContainer colors={['#FF0000', '#800000']}>
              <CroppedHeroImage
                source={
                  heroDetails
                    ? { uri: heroDetails.image.croped.uri }
                    : { uri: '' }
                }
                resizeMode="cover"
              />

              <ContentInformationsHero>
                <HeroName>{heroDetails?.name}</HeroName>
                <Appears>Aparições:</Appears>
                {heroDetails?.appearences.map(appear => (
                  <ListOfAppears adjustsFontSizeToFit key={appear}>
                    {appear}
                    {'\n'}
                  </ListOfAppears>
                ))}
              </ContentInformationsHero>

              <FooterModal>
                <AvailableHero>
                  <DividerColumAvailable>
                    <AvalableOfFans>Avaliações dos Fãs</AvalableOfFans>
                  </DividerColumAvailable>

                  <StarsContent>
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#FFB300" />
                    <FontAwesome name="star" size={20} color="#84848D" />
                  </StarsContent>
                </AvailableHero>

                <CloseModalTouchable onPress={toggleCloseModal}>
                  <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={29}
                    color="#fff"
                  />
                </CloseModalTouchable>
              </FooterModal>
            </ModalHeroInformationsContainer>
          </Modal>

          <HeroesContainer>{heroesListMemoized}</HeroesContainer>
        </Container>
      )}
    </MenuToggle>
  );
};

export default MorePersons;
