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
        keyboardType=''
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
      />
    </Screen>
  );
};
