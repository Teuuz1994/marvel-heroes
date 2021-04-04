import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const FilmPost = styled.View`
  position: relative;
  width: 161px;
  height: 245px;

  margin-bottom: 26px;
`;

export const FilmPoster = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 30px;
`;

export const FilmDescriptionContainer = styled(LinearGradient)`
  position: absolute;
  bottom: 0;

  width: 100%;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const DescriptionTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 14px;
`;

export const DescriptionFilmText = styled(DescriptionTitle)`
  font-size: 8px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};

  margin-bottom: 21px;
`;

export const SeeMoreDetails = styled(DescriptionFilmText)`
  font-size: 12px;
  margin-bottom: 0;
`;

export const Header = styled.View`
  justify-content: flex-start;
  align-items: center;

  flex-direction: row;
  margin-left: 42px;
  margin-bottom: 40px;
`;

export const GobackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin-right: 12px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CirclesPagination = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: row;
  margin-top: 63px;
  margin-bottom: 19.33px;
`;

export const FilmsContainer = styled.View`
  justify-content: space-around;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;
`;

export const PickerSelectContent = styled.View`
  justify-content: flex-start;
  align-items: center;

  margin-top: 17px;
`;
