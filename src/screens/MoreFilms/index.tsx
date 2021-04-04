import React, { useEffect, useState, useMemo } from 'react';

import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import { MenuToggle, LoadingContainer } from '../../components';
import { getFilmsList } from '../../services/fakeApi';
import { FilmsList } from '../../models';

import {
  Container,
  GobackButton,
  Header,
  HeaderTitle,
  CirclesPagination,
  DescriptionFilmText,
  DescriptionTitle,
  FilmDescriptionContainer,
  FilmPost,
  FilmPoster,
  SeeMoreDetails,
  FilmsContainer,
  PickerSelectContent,
  PickerSelect,
} from './styles';

const MoreFilms = () => {
  const [filmsList, setFilmsList] = useState<FilmsList>({} as FilmsList);
  const [pickerSelected, setPickerSelected] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const filmsListMemoized = useMemo(() => {
    if (Object.keys(filmsList).length > 0) {
      if (pickerSelected === 'release') {
        return filmsList.release.map(film => (
          <FilmPost key={film.id}>
            <FilmPoster source={{ uri: film.image.uri }} />

            <FilmDescriptionContainer colors={['#FF0000', '#8000004D']}>
              <DescriptionTitle adjustsFontSizeToFit numberOfLines={1}>
                {film.name}
              </DescriptionTitle>

              <DescriptionFilmText>{film.description}</DescriptionFilmText>

              <SeeMoreDetails>ver detalhes</SeeMoreDetails>
            </FilmDescriptionContainer>
          </FilmPost>
        ));
      }

      if (pickerSelected === 'cronology') {
        return filmsList.cronology.map(film => (
          <FilmPost key={film.id}>
            <FilmPoster source={{ uri: film.image.uri }} />

            <FilmDescriptionContainer colors={['#FF0000', '#8000004D']}>
              <DescriptionTitle adjustsFontSizeToFit numberOfLines={1}>
                {film.name}
              </DescriptionTitle>

              <DescriptionFilmText>{film.description}</DescriptionFilmText>

              <SeeMoreDetails>ver detalhes</SeeMoreDetails>
            </FilmDescriptionContainer>
          </FilmPost>
        ));
      }

      return filmsList.release.map(film => (
        <FilmPost key={film.id}>
          <FilmPoster source={{ uri: film.image.uri }} />

          <FilmDescriptionContainer colors={['#FF0000', '#8000004D']}>
            <DescriptionTitle adjustsFontSizeToFit numberOfLines={1}>
              {film.name}
            </DescriptionTitle>

            <DescriptionFilmText>{film.description}</DescriptionFilmText>

            <SeeMoreDetails>ver detalhes</SeeMoreDetails>
          </FilmDescriptionContainer>
        </FilmPost>
      ));
    }

    return null;
  }, [filmsList, pickerSelected]);

  useEffect(() => {
    const getHeroes = async () => {
      const getFilms = await getFilmsList();

      setFilmsList(getFilms);
      setLoading(false);
    };
    getHeroes();
  }, [filmsList.cronology, filmsList.release]);

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
            <MaterialCommunityIcons
              name="filmstrip"
              size={32}
              color="#ff0000"
              style={{ marginRight: 12.27 }}
            />
            <HeaderTitle>Personagens</HeaderTitle>
          </Header>

          <PickerSelectContent>
            <PickerSelect
              selectedValue={pickerSelected}
              mode="dropdown"
              dropdownIconColor="#ff0000"
              onValueChange={value => setPickerSelected(String(value))}
              style={{
                width: 200,
                height: 54,
                color: '#ff0000',
                marginBottom: 26,
                marginLeft: 30,
              }}
              itemStyle={{
                borderWidth: 2,
                borderColor: '#ff0000',
                backgroundColor: '#000',
              }}
            >
              <Picker.Item label="Filtrar Por" value="" color="#ff0000" />
              <Picker.Item label="Lançamento" value="release" color="#ff0000" />
              <Picker.Item
                label="Cronologia"
                value="cronology"
                color="#ff0000"
              />
            </PickerSelect>
          </PickerSelectContent>

          <FilmsContainer>{filmsListMemoized}</FilmsContainer>

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

export default MoreFilms;
