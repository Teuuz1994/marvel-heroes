import React, { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import Checkbox from '@react-native-community/checkbox';

import { ContainerView, Input, Button } from '../../components';

import {
  Logo,
  Logo_Text,
  MakeLogin,
  SaveMyLogin,
  SignUpBold,
  SignUpRegular,
  CheckBoxContent,
  Welcome,
  SignUpTextContent,
  FormContainer,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <ContainerView>
      <FormContainer ref={formRef} onSubmit={handleSubmit}>
        <Logo>
          <Logo_Text adjustsFontSizeToFit>marvel</Logo_Text>
        </Logo>

        <Welcome adjustsFontSizeToFit>Bem-Vindo!</Welcome>
        <MakeLogin adjustsFontSizeToFit>Fazer login</MakeLogin>

        <Input
          name="email"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          containerStyles={{ marginBottom: 15 }}
          maxWidth={246}
        />
        <Input
          name="password"
          placeholder="Senha"
          secureTextEntry
          containerStyles={{ marginBottom: 23 }}
          maxWidth={246}
        />
        <Button
          textContent="Entrar"
          maxWidth={246}
          onPress={() => formRef.current?.submitForm()}
          extraStyles={{
            marginBottom: 15,
          }}
        />

        <CheckBoxContent>
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            boxType="square"
            tintColors={{
              true: '#ff0000',
              false: '#fff',
            }}
          />
          <SaveMyLogin adjustsFontSizeToFit>
            Salvar dados de login entre automaticamente
          </SaveMyLogin>
        </CheckBoxContent>

        <SignUpTextContent>
          <SignUpRegular>É novo(a) por aqui? </SignUpRegular>
          <SignUpBold>Cadastre-se</SignUpBold>
        </SignUpTextContent>
      </FormContainer>
    </ContainerView>
  );
};

export default SignIn;
