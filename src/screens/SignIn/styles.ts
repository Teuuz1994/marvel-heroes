import styled from 'styled-components/native';

import { Form } from '@unform/mobile';

export const Logo = styled.View`
  max-height: 56px;

  justify-content: center;
  align-items: center;
  margin-bottom: 62px;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.red};
`;

export const Logo_Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Marvel_Regular};
  font-size: 60px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;

export const Welcome = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;

export const MakeLogin = styled(Welcome)`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Light};
  font-size: 14px;
  margin-bottom: 20px;
`;

export const CheckBoxContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const SaveMyLogin = styled(Welcome)`
  font-size: 8px;
  margin-left: 5px;
`;

export const SignUpTextContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignUpRegular = styled(Welcome)`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Regular};
  font-size: 16px;
`;

export const SignUpBold = styled(SignUpRegular)`
  font-family: ${({ theme }) => theme.fontFamily.Axiforma_Bold};
  color: ${({ theme }) => theme.colors.red};
`;

export const FormContainer = styled(Form)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
