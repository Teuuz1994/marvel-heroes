import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { MenuToggle, LoadingContainer } from '../../components';
import { getTopFilms, getFilmsList } from '../../services/fakeApi';
import { TopFilms, FilmsList } from '../../models';

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
  PersonsImagesContent,
  PersonsTitle,
  PersonsView,
  PersonsText,
  PersonsHeader,
  SeeMore,
  PersonImage,
  PersonsList,
  PersonName,
  PersonsContent,
} from './styles';

interface RenderItem {
  item: TopFilms;
  index: number;
}

const Films = () => {
  const [topFilms, setFilms] = useState<TopFilms[]>([]);
  const [filmsList, setFilmsList] = useState<FilmsList>({} as FilmsList);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleNavigateToMorePersons = () => {
    navigation.navigate('MoreFilms');
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
            <FontAwesome name="star" size={20} color="#FFB300" />
          </StarsContent>
        </RateHero>
      </CarrouselImageContainer>
      <DescriptionView>
        <DescriptionOfHero adjustsFontSizeToFit>
          {item.description}
        </DescriptionOfHero>
        <ReadMore adjustsFontSizeToFit>ver mais</ReadMore>
      </DescriptionView>

      <PersonsView>
        <PersonsTitle adjustsFontSizeToFit>Personagens:</PersonsTitle>

        <PersonsImagesContent>
          {item.persons.map(persons => (
            <AppearenceImage
              key={persons.id}
              source={{ uri: persons.image.uri }}
              resizeMode="cover"
            />
          ))}
        </PersonsImagesContent>
      </PersonsView>
    </CarrouselContainer>
  );

  const personsMemoized = useMemo(() => {
    if (Object.keys(filmsList).length > 0) {
      return filmsList.release.map(films => (
        <PersonsContent key={films.id}>
          <PersonImage
            source={{ uri: films.image.croped.uri }}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <PersonName adjustsFontSizeToFit>{films.name}</PersonName>
        </PersonsContent>
      ));
    }

    return null;
  }, [filmsList]);

  useEffect(() => {
    const loadTopHeroes = async () => {
      const films = await getTopFilms();
      const listFilms = await getFilmsList();

      setFilms(films);
      setFilmsList(listFilms);
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
              Top 10 - Filmes Populares
            </CarrouselTitle>
            <Carousel
              layout="stack"
              data={topFilms}
              sliderWidth={392}
              itemWidth={280}
              renderItem={renderItems}
            />

            <PersonsHeader>
              <PersonsText adjustsFontSizeToFit>Filmes</PersonsText>

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

export default Films;
