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

export const HeroesContainer = styled.View`
  justify-content: space-around;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;
`;

export const HeroPost = styled.View`
  position: relative;
  width: 161px;
  height: 245px;

  margin-bottom: 26px;
`;

export const HeroPoster = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 30px;
`;

export const HeroDescriptionContainer = styled(LinearGradient)`
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

export const DescriptionHeroText = styled(DescriptionTitle)`
  font-size: 8px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};

  margin-bottom: 21px;
`;

export const SeeMoreDetails = styled(DescriptionHeroText)`
  font-size: 12px;
  margin-bottom: 0;
`;

export const ModalHeroInformationsContainer = styled(LinearGradient)`
  position: relative;
  width: 328px;
  height: 602px;

  border-radius: 28px;
`;

export const CroppedHeroImage = styled.Image`
  width: 100%;
  height: 169px;

  border-radius: 28px;

  position: absolute;
  top: 0;
`;

export const ContentInformationsHero = styled.View`
  width: 100%;

  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 150px;
  padding: 26px;
`;

export const HeroName = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};

  margin-top: 34px;
  margin-bottom: 15px;
`;

export const Appears = styled(HeroName)`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ListOfAppears = styled(Appears)`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};
  font-size: 6px;
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

export const AvailableHero = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AvalableOfFans = styled(HeroName)`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 11.86px;
`;

export const StarsContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CloseModalTouchable = styled.TouchableOpacity``;
