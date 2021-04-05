import React, { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import Checkbox from '@react-native-community/checkbox';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';

import { ContainerView, Input, Button } from '../../components';
import { useAuth } from '../../hooks/Fakeauth';
import { getValidationErros } from '../../utils/getValidationErrors';

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
  const { signIn } = useAuth();

  const handleSubmit = async (data: FormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
      });

      await schema.validate(data, { abortEarly: false });

      await signIn({
        email: data.email,
        password: data.password,
        saveMyUserState: isChecked,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = getValidationErros(error);

        formRef.current?.setErrors(erros);
      }

      showMessage({
        message:
          'Não foi possível efetuar o login, verifique os dados e tente novamente',
        type: 'danger',
        autoHide: true,
        duration: 5000,
        textStyle: {
          color: '#fff',
          fontFamily: 'Axiforma_Regular',
          fontSize: 18,
        },
        style: { justifyContent: 'center', alignItems: 'center' },
      });
    }
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
            style={{
              marginTop: -8,
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
