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
import { Cronology, Release } from '../../models/FilmsList';

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
} from './styles';

const MoreFilms = () => {
  const [filmsList, setFilmsList] = useState<FilmsList>({} as FilmsList);
  const [typeFilmList, setTypeFilmList] = useState<Cronology[] | Release[]>([]);
  const [pickerSelected, setPickerSelected] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const filmsListMemoized = useMemo(() => {
    if (typeFilmList.length === 0) {
      return null;
    }

    return typeFilmList.map((film: any) => (
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
  }, [typeFilmList]);

  useEffect(() => {
    const getHeroes = async () => {
      const getFilms = await getFilmsList();

      setFilmsList(getFilms);
      setTypeFilmList(getFilms.release);
      setLoading(false);
    };
    getHeroes();
  }, []);

  useEffect(() => {
    if (pickerSelected === 'release') {
      setTypeFilmList(filmsList.release);
    }

    setTypeFilmList(filmsList.cronology);
  }, [filmsList.cronology, filmsList.release, pickerSelected]);

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
            <Picker
              onValueChange={(value, index) => setPickerSelected(String(value))}
            >
              <Picker.Item label="Lançamento" value="release" color="#ff0000" />
              <Picker.Item
                label="Cronologia"
                value="cronology"
                color="#ff0000"
              />
            </Picker>
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
