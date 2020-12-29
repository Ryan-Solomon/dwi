import React from 'react';
import { Screen } from '../../components/scr/Screen';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { AppTextInput } from './../../components/AppTextInput/AppTextInput';

export const LoginScreen = () => {
  return (
    <Screen>
      <StyledContainer>
        <Image
          style={styles.image}
          source={require('../../../assets/img/logo-red.png')}
        />
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
      </StyledContainer>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

const StyledContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

const StyledLoginButton = styled.TouchableOpacity`
  background-color: teal;
  width: 100%;
  padding: 15px;
  border-radius: 30px;
  margin-top: 20px;
`;

const StyledButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 20px;
`;
