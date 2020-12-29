import React from 'react';
import { Screen } from '../../components/scr/Screen';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { AppTextInput } from './../../components/AppTextInput/AppTextInput';

export const LoginScreen = () => {
  return (
    <Screen>
      <Image source={require('../../../assets/img/logo-red.png')} />
      <AppTextInput
        keyboardType='email-address'
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Password'
        secureTextEntry={true}
        textContentType='password'
      />
      <StyledLoginButton>
        <StyledButtonText>Login</StyledButtonText>
      </StyledLoginButton>
    </Screen>
  );
};

const StyledLoginButton = styled.TouchableOpacity`
  background-color: teal;
  width: 100%;
  padding: 10px;
`;

const StyledButtonText = styled.Text`
  color: white;
  text-align: center;
`;
