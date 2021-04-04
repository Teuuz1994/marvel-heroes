import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
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

export const ComicsContainer = styled.View`
  justify-content: space-around;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;
`;

export const ComicPost = styled.View`
  position: relative;
  width: 161px;
  height: 245px;

  margin-bottom: 26px;
`;

export const ComicPoster = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 30px;
`;

export const ComicDescriptionContainer = styled(LinearGradient)`
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

export const DescriptionComicText = styled(DescriptionTitle)`
  font-size: 8px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};

  margin-bottom: 21px;
`;

export const SeeMoreDetails = styled(DescriptionComicText)`
  font-size: 12px;
  margin-bottom: 0;
`;

export const ModalComicInformationsContainer = styled(LinearGradient)`
  position: relative;
  width: 328px;
  height: 602px;

  border-radius: 28px;
`;

export const CroppedComicImage = styled.Image`
  width: 100%;
  height: 169px;

  border-radius: 28px;

  position: absolute;
  top: 0;
`;

export const FooterModal = styled.View`
  position: absolute;
  bottom: 0;

  flex-direction: row;
  justify-content: space-between;
`;

export const DividerColumAvailable = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AvailableComic = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
`;

export const AvalableOfFans = styled.Text`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 11.86px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const StarsContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CloseModalTouchable = styled.TouchableOpacity`
  position: absolute;

  right: -180px;
  top: 45px;
`;

export const ComicInfoContainer = styled.View`
  padding: 20px;
`;

export const ComicTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  margin-top: 190px;
`;

export const ComicDescription = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 18px;
`;

export const StoresAvailableTitle = styled(ComicDescription)`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  font-size: 12px;
  margin-bottom: 16px;
`;

export const StoresAvailableContentConteiner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StoresImage = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 9px;
  margin-right: 18px;
`;

export const CirclesPagination = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: row;
  margin-top: 63px;
  margin-bottom: 19.33px;
`;
