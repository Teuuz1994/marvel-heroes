import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const CarrouselContainer = styled.View`
  background-color: transparent;
  margin-left: -30px;
  width: 100%;
`;

export const CarrouselTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
  margin-left: 25px;
`;

export const CarrouselImageContainer = styled.View`
  position: relative;
  width: 100%;
  max-height: 220px;

  border-radius: 50px;
`;

export const HeroImage = styled.Image`
  width: 100%;
  height: 100%;

  max-width: 202px;

  border-radius: 50px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.red};
`;

export const DescriptionHero = styled(LinearGradient)`
  width: 68%;
  height: 59px;

  border-radius: 50px;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 1px;
  left: 5px;
`;

export const NameHero = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const ContentContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const RateHero = styled.View`
  width: 140px;
  height: 59px;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.black};
  border-width: 1px;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.colors.red};
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 1px;
  left: 170px;
`;

export const RateText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 3.16px;
`;

export const StarsContent = styled.View`
  flex-direction: row;
`;

export const DescriptionView = styled.View`
  width: 100%;
  max-width: 284px;

  margin-top: 30px;

  background-color: ${({ theme }) => theme.colors.black};
  padding: 5px;
`;

export const DescriptionOfHero = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ReadMore = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
  margin-top: 11px;
`;

export const AppearencesView = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 5px;
`;

export const AppearencesImagesContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const AppearencesTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  color: ${({ theme }) => theme.colors.white};

  margin-top: 28px;
  margin-bottom: 11px;
`;

export const AppearenceImage = styled.Image`
  width: 55px;
  height: 55px;

  border-radius: 8px;

  margin-right: 7px;
`;

export const PersonsHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PersonsText = styled(AppearencesTitle)`
  margin-top: 0;
`;

export const SeeMore = styled(PersonsText)`
  margin-right: 40px;
`;

export const PersonsList = styled.ScrollView``;

export const PersonsContent = styled.View`
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

export const PersonImage = styled.Image`
  width: 142px;
  height: 69px;

  border-radius: 13px;
  margin-right: 10px;

  overflow: hidden;
`;

export const PersonName = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};

  margin-top: 11px;
  margin-right: 20px;
`;
