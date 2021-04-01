import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { MenuToggle, LoadingContainer } from '../../components';
import { getTopHeroes, getPersonsList } from '../../services/fakeApi';
import { TopHero, PersonsList as ModelPeronsList } from '../../models';

import {
  Container,
  CarrouselContainer,
  CarrouselImageContainer,
  CarrouselTitle,
  HeroImage,
  DescriptionHero,
  NameHero,
  ContentContainer,
  RateHero,
  RateText,
  StarsContent,
  DescriptionOfHero,
  DescriptionView,
  ReadMore,
  AppearenceImage,
  AppearencesView,
  AppearencesTitle,
  AppearencesImagesContent,
  PersonsText,
  PersonsHeader,
  SeeMore,
  PersonImage,
  PersonsList,
  PersonName,
  PersonsContent,
} from './styles';

interface RenderItem {
  item: TopHero;
  index: number;
}

const Persons = () => {
  const [topHeroes, setTopHeros] = useState<TopHero[]>([]);
  const [persons, setPersons] = useState<ModelPeronsList[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleNavigateToMorePersons = () => {
    navigation.navigate('MorePersons');
  };

  const renderItems = ({ item }: RenderItem) => (
    <CarrouselContainer>
      <CarrouselImageContainer>
        <HeroImage source={{ uri: item.image.uri }} resizeMode="cover" />
        <DescriptionHero colors={['transparent', '#ff0000']}>
          <NameHero adjustsFontSizeToFit numberOfLines={2}>
            {item.name}
          </NameHero>
        </DescriptionHero>
        <RateHero>
          <RateText adjustsFontSizeToFit>Avaliações dos Fãs</RateText>
          <StarsContent>
            <FontAwesome name="star" size={20} color="#FFB300" />
            <FontAwesome name="star" size={20} color="#FFB300" />
            <FontAwesome name="star" size={20} color="#FFB300" />
            <FontAwesome name="star" size={20} color="#FFB300" />
            <FontAwesome name="star" size={20} color="#84848D" />
          </StarsContent>
        </RateHero>
      </CarrouselImageContainer>
      <DescriptionView>
        <DescriptionOfHero adjustsFontSizeToFit>
          {item.description}
        </DescriptionOfHero>
        <ReadMore adjustsFontSizeToFit>ver mais</ReadMore>
      </DescriptionView>

      <AppearencesView>
        <AppearencesTitle adjustsFontSizeToFit>Aparições:</AppearencesTitle>

        <AppearencesImagesContent>
          {item.appearances.map(appearence => (
            <AppearenceImage
              key={appearence.image.uri}
              source={{ uri: appearence.image.uri }}
              resizeMode="contain"
            />
          ))}
        </AppearencesImagesContent>
      </AppearencesView>
    </CarrouselContainer>
  );

  const personsMemoized = useMemo(() => {
    return persons.map(person => (
      <PersonsContent key={person.name}>
        <PersonImage
          source={{ uri: person.image.uri }}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <PersonName adjustsFontSizeToFit>{person.name}</PersonName>
      </PersonsContent>
    ));
  }, [persons]);

  useEffect(() => {
    const loadTopHeroes = async () => {
      const heroes = await getTopHeroes();
      const characters = await getPersonsList();

      setTopHeros(heroes);
      setPersons(characters);
      setLoading(false);
    };
    loadTopHeroes();
  }, []);

  return (
    <Container>
      <MenuToggle showSidebarMenu>
        {loading ? (
          <LoadingContainer />
        ) : (
          <ContentContainer>
            <CarrouselTitle adjustsFontSizeToFit>
              Top 10 - Personagens Populares
            </CarrouselTitle>
            <Carousel
              layout="stack"
              data={topHeroes}
              sliderWidth={392}
              itemWidth={280}
              renderItem={renderItems}
            />

            <PersonsHeader>
              <PersonsText adjustsFontSizeToFit>Personagens</PersonsText>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleNavigateToMorePersons}
              >
                <SeeMore adjustsFontSizeToFit>+ Ver todos</SeeMore>
              </TouchableOpacity>
            </PersonsHeader>

            <PersonsList horizontal>{personsMemoized}</PersonsList>
          </ContentContainer>
        )}
      </MenuToggle>
    </Container>
  );
};

export default Persons;
