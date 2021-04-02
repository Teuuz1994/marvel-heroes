import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { MenuToggle, LoadingContainer } from '../../components';
import { getTopComics, getComicList } from '../../services/fakeApi';
import { TopComics, ComicList } from '../../models';

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
  item: TopComics;
  index: number;
}

const Persons = () => {
  const [topComics, setTopComics] = useState<TopComics[]>([]);
  const [comisList, setComicsList] = useState<ComicList[]>([]);
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
          {item.creators.map(creator => (
            <AppearenceImage
              key={creator.image.uri}
              source={{ uri: creator.image.uri }}
              resizeMode="cover"
            />
          ))}
        </AppearencesImagesContent>
      </AppearencesView>
    </CarrouselContainer>
  );

  const personsMemoized = useMemo(() => {
    return comisList.map(comic => (
      <PersonsContent key={comic.name}>
        <PersonImage
          source={{ uri: comic.image.croped.uri }}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <PersonName adjustsFontSizeToFit>{comic.name}</PersonName>
      </PersonsContent>
    ));
  }, [comisList]);

  useEffect(() => {
    const loadComics = async () => {
      const comics = await getTopComics();
      const ListOfComics = await getComicList();

      setTopComics(comics);
      setComicsList(ListOfComics);
      setLoading(false);
    };
    loadComics();
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
              data={topComics}
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
